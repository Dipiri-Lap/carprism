// 검색 / 관련기사 자동 렌더링이 공유하는 기사 메타데이터
// 새 기사를 발행할 때마다 이 배열에 항목 하나를 추가할 것.
window.ARTICLES_DATA = [
  {
    slug: "highway-toll-discount-multichild-disabled-2026",
    title: "다자녀·장애인·유공자 고속도로 통행료 할인 확대 — 대상·할인율·신청 방법",
    date: "2026-07-22",
    image: "seoul_tollgate_hipass.jpg",
    categories: ["news"],
    tags: ["고속도로통행료할인", "다자녀가구", "장애인통행료감면", "국가유공자", "하이패스"]
  },
  {
    slug: "car-subscription-long-term-rent-trend",
    title: "소유 대신 이용 — 차량 구독·장기렌트 서비스 확산의 이유",
    date: "2026-07-22",
    image: "kona_electric_charging.jpg",
    categories: ["news", "domestic"],
    tags: ["차량구독서비스", "장기렌트", "현대셀렉션", "기아플렉스", "카리스구독"]
  },
  {
    slug: "ev-conversion-subsidy-1million-won",
    title: "내연차 전환지원금 100만 원 신설 — 3년 이상 된 차 처분하고 전기차로 갈아타면",
    date: "2026-07-22",
    image: "kia_ev6_official.jpg",
    categories: ["news", "electric"],
    tags: ["전환지원금", "전기차보조금", "내연차전기차전환", "조기폐차", "기후에너지환경부"]
  },
  {
    slug: "ev-subsidy-evaluation-system-july-2026",
    title: "7월 전기차 보조금 개편 — 제작·수입사 평가제 시행, 테슬라 통과·BYD 탈락",
    date: "2026-07-22",
    image: "tesla_model_y.jpg",
    categories: ["news", "electric"],
    tags: ["전기차보조금", "평가제", "테슬라", "BYD", "공급망기여도", "기후에너지환경부"]
  },
  {
    slug: "kia-stonic-diesel-used-buy-guide",
    title: "신차에서 사라진 디젤, 중고 스토닉이 대안인 이유 — 연비·가격 총정리",
    date: "2026-07-21",
    image: "stonic_diesel_front.jpg",
    categories: ["news", "domestic"],
    tags: ["기아스토닉", "디젤SUV", "중고차추천", "연비", "스토닉디젤"]
  },
  {
    slug: "driving-license-subsidy-2026-h2",
    title: "2026 하반기 운전면허 지원금 총정리 — 지역별 금액·대상·신청 방법",
    date: "2026-07-21",
    image: "driving_license_exam_office.jpg",
    categories: ["news"],
    tags: ["운전면허지원금", "청년지원금", "자립준비청년", "디딤돌운전면허지원센터", "운전상식"]
  },
  {
    slug: "kgm-project-s10-flagship-suv",
    title: "KGM '프로젝트 S10', 렉스턴 후속 플래그십 SUV — 팰리세이드에 던지는 승부수",
    date: "2026-07-21",
    image: "rexton_current_uk.jpg",
    categories: ["news", "domestic"],
    tags: ["KGM", "프로젝트S10", "SE10", "렉스턴", "아리랑", "팰리세이드", "REEV"]
  },
  {
    slug: "rainy-season-hydroplaning-tire-check",
    title: "장마철 빗길 안전운전 — 수막현상(하이드로플레이닝) 예방과 타이어 마모도 체크법",
    date: "2026-07-20",
    image: "rain_driving_pov.jpg",
    categories: ["news"],
    tags: ["수막현상", "하이드로플레이닝", "빗길운전", "타이어마모", "장마철", "운전상식"]
  },
  {
    slug: "cadillac-escalade-iq-review",
    title: "캐딜락 에스컬레이드 IQ·IQL — 750마력 710km 전동화 플래그십, 국내외 정보 총정리",
    date: "2026-07-20",
    image: "escalade_iq_front.jpg",
    categories: ["import", "electric"],
    tags: ["캐딜락", "에스컬레이드IQ", "에스컬레이드IQL", "전기차", "수입차", "슈퍼크루즈"]
  },
  {
    slug: "bentley-continental-gt-s-gtc-s-korea",
    title: "벤틀리 더 뉴 컨티넨탈 GT S·GTC S 국내 출시 — 680마력 하이브리드, 3억 6,850만 원부터",
    date: "2026-07-20",
    image: "bentley_gt_s_official.jpg",
    categories: ["import"],
    tags: ["벤틀리", "컨티넨탈GT", "컨티넨탈GTC", "수입차", "고성능", "하이브리드"]
  },
  {
    slug: "aston-martin-dreadnought-mw4",
    title: "전장을 달리는 슈퍼카 — 콜 오브 듀티 MW4의 애스턴마틴 드레드노트 완전 분석",
    date: "2026-07-19",
    image: "am_dreadnought.jpg",
    categories: ["import"],
    tags: ["애스턴마틴", "드레드노트", "COD", "MW4", "게임차량", "전술SUV"]
  },
  {
    slug: "genesis-gv60-gv70-electrified-2027",
    title: "제네시스 '2027 GV60'·'2027 GV70 전동화 모델' 판매 개시 — 가격은 동결, 사양은 강화",
    date: "2026-07-19",
    image: "genesis_gv60_2027_official.jpg",
    categories: ["domestic", "electric"],
    tags: ["제네시스", "GV60", "GV70", "전동화", "전기차", "연식변경"]
  },
  {
    slug: "k5-2026-facelift-review",
    title: "기아 K5 상품성 강화 연식변경, 2,763만 원부터 — 국내외 리뷰 종합",
    date: "2026-07-18",
    image: "k5_side_exterior.jpg",
    categories: ["domestic", "reviews"],
    tags: ["기아", "K5", "연식변경", "상품성강화", "시승기", "리뷰"]
  },
  {
    slug: "seltos-hybrid-review-2026",
    title: "드디어 하이브리드 탑재! 3세대 '기아 셀토스 풀체인지' 시승기 및 가성비 추천 트림",
    date: "2026-07-17",
    image: "seltos_official.png",
    categories: ["domestic", "reviews"],
    tags: ["기아", "셀토스", "하이브리드", "풀체인지", "시승기", "트림추천"]
  },
  {
    slug: "july-promotions-2026",
    title: "7월 여름 한정 최대 400만 원 할인! 지금 당장 계약해야 이득인 가성비 국산·수입 세단",
    date: "2026-07-17",
    image: "sonata_official.png",
    categories: ["news", "domestic"],
    tags: ["할인", "프로모션", "쏘나타", "수입차", "BMW", "아우디", "대기기간"]
  },
  {
    slug: "tesla-vs-byd-2026",
    title: "테슬라 모델 Y 독주에 브레이크? 가성비 끝판왕 'BYD 돌핀' 한국 상륙 분석",
    date: "2026-07-17",
    image: "byd_dolphin.jpg",
    categories: ["news", "import", "electric"],
    tags: ["전기차", "테슬라", "BYD", "모델Y", "돌핀", "보조금"]
  },
  {
    slug: "hybrids-and-suvs-2026",
    title: "지금 사면 후회할까? 2026 하반기 출시 예정 하이브리드 & SUV 주목 신차 5종",
    date: "2026-07-17",
    image: "gv80_hybrid.png",
    categories: ["news", "domestic"],
    tags: ["하이브리드", "SUV", "신차", "기아", "현대차", "제네시스"]
  },
  {
    slug: "sales-ranking-2026-06",
    title: "2026년 6월 국산차 판매량 TOP 10, 그랜저가 정상 탈환",
    date: "2026-07-14",
    image: "grandeur_official.png",
    categories: ["news", "domestic"],
    tags: ["그랜저", "셀토스", "쏘렌토", "카니발", "스포티지", "판매량"]
  },
  {
    slug: "avante-vs-byd-busan-2026",
    title: "아반떼 vs BYD, 부산모빌리티쇼가 보여준 하이브리드 전쟁",
    date: "2026-07-12",
    image: "avante.png",
    categories: ["news", "domestic", "import"],
    tags: ["아반떼", "BYD", "제네시스", "하이브리드", "전기차"]
  }
];
