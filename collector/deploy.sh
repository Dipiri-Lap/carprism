#!/usr/bin/env bash
# CarPrism 뉴스 수집기 GCP 배포 스크립트
# 사용법: Git Bash에서 `bash deploy.sh` 실행 (collector 폴더 안에서)
#
# 사전 준비:
#   1. gcloud CLI 설치: https://cloud.google.com/sdk/docs/install
#   2. gcloud auth login  (브라우저로 구글 계정 로그인)
#   3. 결제 계정(Billing Account) 필요 — 신규 프로젝트는 결제 연결 전엔 배포 불가
#
# 이 스크립트가 하는 일:
#   - GCP 프로젝트 생성 (carprism-collector)
#   - 필요한 API 활성화 (Cloud Run, Cloud Build, Firestore, Scheduler, Secret Manager)
#   - Firestore 네이티브 DB 생성
#   - Notion 토큰/DB ID를 Secret Manager에 저장 (터미널에서 직접 입력, 화면에 안 남음)
#   - 컨테이너 빌드 후 Cloud Run 배포 (외부 공개 안 함 — 인증된 호출만 허용)
#   - Cloud Scheduler로 4시간마다 자동 실행되도록 등록 (0 */4 * * *)

set -euo pipefail

PROJECT_ID="carprism-collector"
REGION="asia-northeast3"   # 서울 리전
SERVICE_NAME="carprism-collector"
REPO_NAME="carprism"
SCHEDULER_JOB="carprism-collector-job"
SCHEDULER_SA="carprism-scheduler-sa"

echo "=== 1. GCP 프로젝트 생성: $PROJECT_ID ==="
if gcloud projects describe "$PROJECT_ID" >/dev/null 2>&1; then
  echo "프로젝트가 이미 존재합니다. 다음 단계로 넘어갑니다."
else
  gcloud projects create "$PROJECT_ID" --name="CarPrism Collector"
fi
gcloud config set project "$PROJECT_ID"

echo ""
echo "=== 2. 결제 계정 연결 확인 ==="
if ! gcloud billing projects describe "$PROJECT_ID" --format="value(billingEnabled)" 2>/dev/null | grep -q "True"; then
  echo "이 프로젝트에 결제 계정이 연결되어 있지 않습니다."
  echo "사용 가능한 결제 계정 목록:"
  gcloud billing accounts list
  read -rp "위 목록에서 연결할 결제 계정 ID를 입력하세요 (예: 012345-6789AB-CDEF01): " BILLING_ACCOUNT_ID
  gcloud billing projects link "$PROJECT_ID" --billing-account="$BILLING_ACCOUNT_ID"
else
  echo "결제 계정이 이미 연결되어 있습니다."
fi

echo ""
echo "=== 3. 필요한 API 활성화 ==="
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  firestore.googleapis.com \
  cloudscheduler.googleapis.com \
  secretmanager.googleapis.com \
  iam.googleapis.com

echo ""
echo "=== 4. Firestore 데이터베이스 생성 (네이티브 모드) ==="
if gcloud firestore databases describe --database="(default)" >/dev/null 2>&1; then
  echo "Firestore DB가 이미 존재합니다."
else
  gcloud firestore databases create --location="$REGION" --type=firestore-native
fi

echo ""
echo "=== 5. Artifact Registry 저장소 생성 ==="
if gcloud artifacts repositories describe "$REPO_NAME" --location="$REGION" >/dev/null 2>&1; then
  echo "저장소가 이미 존재합니다."
else
  gcloud artifacts repositories create "$REPO_NAME" \
    --repository-format=docker \
    --location="$REGION" \
    --description="CarPrism collector images"
fi

echo ""
echo "=== 6. Notion 비밀값을 Secret Manager에 저장 ==="
echo "(입력값은 화면에 표시되지 않고, 채팅이나 로그에도 남지 않습니다)"

if gcloud secrets describe NOTION_TOKEN >/dev/null 2>&1; then
  echo "NOTION_TOKEN 시크릿이 이미 존재합니다. 건너뜁니다. (값을 바꾸려면 아래 명령을 직접 실행하세요)"
  echo '  echo -n "새값" | gcloud secrets versions add NOTION_TOKEN --data-file=-'
else
  read -rsp "Notion Integration Token 입력: " NOTION_TOKEN_VALUE
  echo ""
  printf '%s' "$NOTION_TOKEN_VALUE" | gcloud secrets create NOTION_TOKEN --data-file=- --replication-policy=automatic
  unset NOTION_TOKEN_VALUE
fi

if gcloud secrets describe NOTION_DATABASE_ID >/dev/null 2>&1; then
  echo "NOTION_DATABASE_ID 시크릿이 이미 존재합니다. 건너뜁니다."
else
  read -rp "Notion Database ID 입력: " NOTION_DB_ID_VALUE
  printf '%s' "$NOTION_DB_ID_VALUE" | gcloud secrets create NOTION_DATABASE_ID --data-file=- --replication-policy=automatic
  unset NOTION_DB_ID_VALUE
fi

echo ""
echo "=== 7. 컨테이너 빌드 & 푸시 ==="
IMAGE="$REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$SERVICE_NAME:latest"
gcloud builds submit --tag "$IMAGE" .

echo ""
echo "=== 8. Cloud Run 배포 (외부 비공개, 인증된 호출만 허용) ==="
gcloud run deploy "$SERVICE_NAME" \
  --image="$IMAGE" \
  --region="$REGION" \
  --no-allow-unauthenticated \
  --set-secrets="NOTION_TOKEN=NOTION_TOKEN:latest,NOTION_DATABASE_ID=NOTION_DATABASE_ID:latest" \
  --memory=512Mi \
  --timeout=300 \
  --max-instances=1

echo ""
echo "=== 9. Cloud Run 런타임 서비스계정에 Firestore 권한 부여 ==="
PROJECT_NUMBER=$(gcloud projects describe "$PROJECT_ID" --format="value(projectNumber)")
RUNTIME_SA="$PROJECT_NUMBER-compute@developer.gserviceaccount.com"
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$RUNTIME_SA" \
  --role="roles/datastore.user" \
  --condition=None

echo ""
echo "=== 10. Cloud Scheduler용 전용 서비스계정 생성 및 호출 권한 부여 ==="
if gcloud iam service-accounts describe "$SCHEDULER_SA@$PROJECT_ID.iam.gserviceaccount.com" >/dev/null 2>&1; then
  echo "서비스계정이 이미 존재합니다."
else
  gcloud iam service-accounts create "$SCHEDULER_SA" \
    --display-name="CarPrism Scheduler Invoker"
fi
SCHEDULER_SA_EMAIL="$SCHEDULER_SA@$PROJECT_ID.iam.gserviceaccount.com"

gcloud run services add-iam-policy-binding "$SERVICE_NAME" \
  --region="$REGION" \
  --member="serviceAccount:$SCHEDULER_SA_EMAIL" \
  --role="roles/run.invoker"

SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" --region="$REGION" --format="value(status.url)")

echo ""
echo "=== 11. Cloud Scheduler 작업 등록 (4시간마다: 0 */4 * * *) ==="
if gcloud scheduler jobs describe "$SCHEDULER_JOB" --location="$REGION" >/dev/null 2>&1; then
  gcloud scheduler jobs update http "$SCHEDULER_JOB" \
    --location="$REGION" \
    --schedule="0 */4 * * *" \
    --uri="$SERVICE_URL" \
    --http-method=POST \
    --oidc-service-account-email="$SCHEDULER_SA_EMAIL" \
    --oidc-token-audience="$SERVICE_URL" \
    --time-zone="Asia/Seoul"
else
  gcloud scheduler jobs create http "$SCHEDULER_JOB" \
    --location="$REGION" \
    --schedule="0 */4 * * *" \
    --uri="$SERVICE_URL" \
    --http-method=POST \
    --oidc-service-account-email="$SCHEDULER_SA_EMAIL" \
    --oidc-token-audience="$SERVICE_URL" \
    --time-zone="Asia/Seoul"
fi

echo ""
echo "=========================================="
echo "배포 완료!"
echo "서비스 URL: $SERVICE_URL"
echo "스케줄: 4시간마다 (0 */4 * * *, Asia/Seoul)"
echo ""
echo "수동으로 한 번 바로 실행해보려면:"
echo "  gcloud scheduler jobs run $SCHEDULER_JOB --location=$REGION"
echo ""
echo "로그 확인:"
echo "  gcloud run services logs read $SERVICE_NAME --region=$REGION --limit=50"
echo "=========================================="
