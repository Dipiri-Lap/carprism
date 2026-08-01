"""
CarPrism 뉴스 수집 파이프라인 (RSS 전용, 원문 적재 버전)
- RSS 16개 수집 (죽은 피드 4개 제외: 데일리카/카미디어/오토뷰/Autoblog)
- Firestore로 URL 해시 중복제거
- Notion DB에 원문 그대로 적재
- Cloud Run + Cloud Scheduler(0 */4 * * *)로 4시간마다 실행

필요 패키지: feedparser, google-cloud-firestore, notion-client, flask, gunicorn
환경변수:
  NOTION_TOKEN, NOTION_DATABASE_ID
  (Firestore는 Cloud Run 기본 서비스계정 인증 사용)
"""

import os
import hashlib
import datetime as dt
from flask import Flask

import feedparser
from google.cloud import firestore
from notion_client import Client as NotionClient

app = Flask(__name__)

# 소스 정의
RSS_FEEDS = {
    # 국내 8
    "모터그래프":     "https://www.motorgraph.com/rss/allArticle.xml",
    "오토헤럴드":     "https://www.autoherald.co.kr/rss/allArticle.xml",
    "탑라이더":       "https://www.top-rider.com/rss/allArticle.xml",
    "카가이":         "https://www.carguy.kr/rss/allArticle.xml",
    "오토트리뷴":     "https://www.autotribune.co.kr/rss/allArticle.xml",
    "지피코리아":     "https://www.gpkorea.com/rss/allArticle.xml",
    "모토야":         "https://www.motoya.co.kr/rss/allArticle.xml",
    # 해외 9
    "Motor1":         "https://www.motor1.com/rss/news/all/",
    "Carscoops":      "https://www.carscoops.com/feed/",
    "CarBuzz":        "https://carbuzz.com/feed/",
    "InsideEVs":      "https://insideevs.com/rss/news/all/",
    "Electrek":       "https://electrek.co/feed/",
    "The Autopian":   "https://www.theautopian.com/feed/",
    "Autoevolution":  "https://www.autoevolution.com/rss/news.xml",
    "CnEVPost":       "https://cnevpost.com/feed/",
    "Car and Driver": "https://www.caranddriver.com/rss/all.xml/",
}

USER_AGENT = "Mozilla/5.0 (compatible; CarPrismBot/1.0)"
MAX_PER_FEED = 30

db = firestore.Client()
COLLECTION = "carprism_seen"

notion = NotionClient(auth=os.environ["NOTION_TOKEN"])
NOTION_DB = os.environ["NOTION_DATABASE_ID"]


def url_hash(url: str) -> str:
    return hashlib.sha256(url.encode("utf-8")).hexdigest()[:24]


def is_new(h: str) -> bool:
    ref = db.collection(COLLECTION).document(h)
    if ref.get().exists:
        return False
    ref.set({"ts": firestore.SERVER_TIMESTAMP})
    return True


def add_to_notion(title, url, source, published):
    notion.pages.create(
        parent={"database_id": NOTION_DB},
        properties={
            "제목":   {"title": [{"text": {"content": title[:200]}}]},
            "출처":   {"select": {"name": source}},
            "분류":   {"select": {"name": "RSS"}},
            "URL":    {"url": url},
            "수집일": {"date": {"start": published or dt.datetime.utcnow().isoformat()}},
        },
    )


def collect_rss():
    added, errors = 0, []
    for source, feed_url in RSS_FEEDS.items():
        try:
            parsed = feedparser.parse(feed_url, agent=USER_AGENT)
            if parsed.bozo and not parsed.entries:
                errors.append(source)
                continue
            for entry in parsed.entries[:MAX_PER_FEED]:
                link = entry.get("link")
                if not link:
                    continue
                h = url_hash(link)
                if not is_new(h):
                    continue
                published = None
                if entry.get("published_parsed"):
                    published = dt.datetime(*entry.published_parsed[:6]).isoformat()
                add_to_notion(
                    title=entry.get("title", "(제목없음)"),
                    url=link,
                    source=source,
                    published=published,
                )
                added += 1
        except Exception as e:
            print(f"[RSS ERROR] {source}: {e}")
            errors.append(source)
    return added, errors


@app.route("/", methods=["GET", "POST"])
def run():
    added, errors = collect_rss()
    msg = f"완료: 신규 {added}건 추가"
    if errors:
        msg += f" | 실패 피드: {', '.join(errors)}"
    print(msg)
    return msg, 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
