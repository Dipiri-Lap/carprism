const fs = require('fs');

const porsche = {
  slug: "porsche-cayenne-electric-korea-launch-2026",
  headline: "\"배터리 113kWh, 최고 1,156마력\"… 포르쉐가 카이엔에서 처음으로 엔진을 들어냈습니다",
  headlineShort: "포르쉐 카이엔 일렉트릭, 국내 하반기 출시",
  description: "포르쉐 최초의 순수전기 카이엔이 공개됐다. 113kWh 배터리로 최대 642km를 달리고, 터보 모델은 런치 컨트롤 시 1,156마력을 낸다. 국내 가격은 1억 4천만원대부터, 출시는 2026년 하반기다.",
  subtitle: "1970년대부터 이어진 가솔린 카이엔의 계보에 처음으로 순수전기 모델이 합류했다. 800V 아키텍처와 113kWh 배터리를 앞세운 카이엔 일렉트릭이 올해 하반기 국내 상륙을 준비하고 있다.",
  date: "2026-09-02",
  time: "09:30",
  sectionName: "수입차",
  sectionHref: "import.html",
  categoryLabel: "EV",
  categoryClass: "cat-ev",
  heroImage: "porsche_cayenne_electric_turbo_front.webp",
  heroAlt: "포르쉐 카이엔 일렉트릭 터보 전측면, 세이지 그린 색상, 실내 전시 모습",
  heroCaption: "포르쉐 매장에 전시된 카이엔 일렉트릭 터보. 프론트 범퍼의 'electric' 레터링이 순수전기 모델임을 알린다",
  tags: ["포르쉐", "카이엔일렉트릭", "카이엔터보일렉트릭", "전기SUV", "800V충전"],
  categories: ["import", "electric"],
  badge: "EV",
  badgeClass: "cat-ev",
  dataSource: "오토뷰",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "오토뷰", url: "https://www.autoview.co.kr/news/articleView.html?idxno=98025" },
    { name: "헤럴드경제", url: "https://biz.heraldcorp.com/article/10725069" },
    { name: "Porsche Newsroom", url: "https://newsroom.porsche.com/en_US/2026/products/porsche-the-new-cayenne-s-electric-41867.html" }
  ],
  body: `
<h2 id="sec1">1. 반세기 만에 엔진을 내려놓은 카이엔</h2>
<p><strong>포르쉐가 3세대 카이엔의 완전변경과 함께 브랜드 최초의 순수전기 카이엔인 '카이엔 일렉트릭'을 공개했다.</strong> 2002년 출시 이후 20여 년간 V6·V8 가솔린 엔진과 플러그인 하이브리드로 라인업을 이어온 카이엔이 처음으로 내연기관 없는 모델을 갖추게 된 것이다. 카이엔 일렉트릭은 폭스바겐 그룹의 PPE(Premium Platform Electric) 플랫폼을 기반으로 개발됐으며, 기존 가솔린 카이엔과는 완전히 다른 전용 전기차 설계를 적용했다.</p>
<p>포르쉐코리아는 카이엔 일렉트릭과 카이엔 쿠페 일렉트릭을 <strong>2026년 하반기 국내에 출시</strong>한다는 계획이다. 이미 미국, 말레이시아 등 일부 해외 시장에서는 인도가 시작됐으며, 국내에는 세단형 SUV인 카이엔 일렉트릭에 이어 쿠페형 모델도 순차 투입될 예정이다.</p>
<div class="article-img-wrap">
<img src="../images/porsche_cayenne_electric_front.webp" alt="포르쉐 카이엔 일렉트릭 전측면, 블루 색상, 야외 촬영" width="1600" height="829" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 카이엔 일렉트릭 기본형. 외관은 기존 가솔린 카이엔과 차별화된 매끈한 전면 디자인을 갖췄다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. 113kWh 배터리, 최대 642km 주행거리</h2>
<p><strong>카이엔 일렉트릭의 핵심은 113kWh(순수 용량 108kWh) 규모의 실리콘-그래파이트 음극 배터리다.</strong> WLTP 기준 카이엔 일렉트릭은 1회 충전으로 최대 642km를 달릴 수 있으며, 800V 고전압 아키텍처를 적용해 최대 390kW급 급속충전을 지원한다. 완속에서 급속까지 폭넓은 충전 인프라 대응이 가능하고, 10분 충전만으로 약 315km를 추가로 달릴 수 있는 수준이다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>카이엔 일렉트릭 라인업 주요 제원 (WLTP 기준)</caption>
<thead>
<tr><th>트림</th><th>최고출력</th><th>0-100km/h</th><th>최대 주행거리</th></tr>
</thead>
<tbody>
<tr><td>카이엔 일렉트릭</td><td>408마력(런치 컨트롤 시 442마력)</td><td>5초대</td><td>642km</td></tr>
<tr><td>카이엔 터보 일렉트릭</td><td>최고 1,156마력(런치 컨트롤 시)</td><td>2.5초</td><td>623km</td></tr>
</tbody>
</table>
</div>
<div class="info-box">
<p class="info-box-title">📍 참고로 알아두면 좋은 것</p>
<p>런치 컨트롤은 정지 상태에서 최대 출력을 순간적으로 끌어올려 최고 가속 성능을 내는 기능이다. 카이엔 터보 일렉트릭의 1,156마력은 이 기능을 사용했을 때의 순간 최대치이며, 상시 주행 출력은 이보다 낮다.</p>
</div>

<!--AD-->

<h2 id="sec3">3. 카이엔 터보, 포르쉐 역사상 가장 강력한 양산차</h2>
<p><strong>카이엔 터보 일렉트릭은 정지 상태에서 시속 100km까지 단 2.5초 만에 도달한다.</strong> 이는 현행 911 터보 S와 맞먹는 가속력으로, SUV 차체로는 이례적인 수치다. 포르쉐는 이 모델을 두고 "역사상 가장 강력한 양산 포르쉐"라고 소개했는데, 순간 최대 1,156마력은 내연기관 시절 카이엔 라인업 어떤 모델도 넘보지 못했던 출력이다.</p>
<p>기본형 카이엔 일렉트릭 역시 408마력(런치 컨트롤 시 442마력)으로 기존 가솔린 카이엔 대비 부족함이 없는 성능을 갖췄다. 두 모델 모두 전륜과 후륜에 각각 모터를 배치한 듀얼모터 사륜구동 방식을 쓴다.</p>
<div class="article-img-wrap">
<img src="../images/porsche_cayenne_electric_rear_charging.webp" alt="포르쉐 카이엔 일렉트릭 후측면, 그레이 색상, 급속충전 중인 모습" width="1600" height="1065" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 충전 중인 카이엔 일렉트릭 후측면. 리어 콤비네이션 램프가 가로로 이어지는 디자인이 적용됐다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec4">4. 국내 가격, 1억 4천만원대부터</h2>
<p><strong>국내 판매 가격은 부가세 포함 카이엔 일렉트릭 1억 4,230만원, 카이엔 터보 일렉트릭 1억 8,960만원부터로 책정됐다.</strong> 쿠페형인 카이엔 쿠페 일렉트릭은 1억 4,690만원, 카이엔 S 쿠페 일렉트릭은 1억 6,720만원, 카이엔 터보 쿠페 일렉트릭은 1억 9,100만원부터 시작한다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>카이엔 일렉트릭 국내 예상 가격(부가세 포함)</caption>
<thead>
<tr><th>모델</th><th>가격(원)</th></tr>
</thead>
<tbody>
<tr><td>카이엔 일렉트릭</td><td>1억 4,230만~</td></tr>
<tr><td>카이엔 터보 일렉트릭</td><td>1억 8,960만~</td></tr>
<tr><td>카이엔 쿠페 일렉트릭</td><td>1억 4,690만~</td></tr>
<tr><td>카이엔 S 쿠페 일렉트릭</td><td>1억 6,720만~</td></tr>
<tr><td>카이엔 터보 쿠페 일렉트릭</td><td>1억 9,100만~</td></tr>
</tbody>
</table>
</div>
<p>기존 가솔린·플러그인하이브리드 카이엔과 병행 판매될 예정이며, 국내 출시 시점과 초도 물량, 세부 트림 구성은 포르쉐코리아의 공식 발표를 통해 확정될 전망이다. 관련 소식은 포르쉐코리아 공식 홈페이지에서도 확인할 수 있다. <a href="https://www.porsche.com/korea/" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>

<h2 id="sec5">5. 경쟁 구도와 시장 전망</h2>
<p><strong>카이엔 일렉트릭은 아우디 Q8 e-트론, BMW iX, 메르세데스-벤츠 EQE SUV, 로터스 엘레트레 등 프리미엄 대형 전기 SUV들과 경쟁하게 된다.</strong> 특히 같은 폭스바겐 그룹 PPE 플랫폼을 공유하는 아우디 Q6 e-트론, 마칸 일렉트릭과도 기술적 연관성이 깊어, 그룹 내 800V 전동화 라인업의 최상위 지점을 차지하는 모델로 평가된다.</p>
<div class="checkpoint-box">
<p><strong>✅ 카이엔 일렉트릭, 이것만은 확인하세요</strong></p>
<p>· 국내 출시는 2026년 하반기 예정, 정확한 월별 일정은 미공개<br>· 배터리 113kWh, WLTP 기준 최대 642km 주행<br>· 800V 아키텍처로 최대 390kW 급속충전 지원<br>· 카이엔 터보는 런치 컨트롤 시 최고 1,156마력<br>· 기존 가솔린·PHEV 카이엔과 국내 병행 판매</p>
</div>
<div class="article-img-wrap">
<img src="../images/porsche_cayenne_electric_charging.webp" alt="포르쉐 카이엔 일렉트릭 전측면, 그레이 색상, 충전소 앞 주차된 모습" width="1600" height="1065" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 충전 케이블이 연결된 카이엔 일렉트릭. 프론트 범퍼 하단의 대형 에어커튼이 전기 SUV 특유의 공력 설계를 보여준다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>카이엔 일렉트릭은 포르쉐가 처음으로 내연기관을 배제하고 만든 카이엔이다. 113kWh 배터리와 800V 아키텍처로 실용성과 성능을 동시에 잡았고, 터보 모델은 순간 1,156마력이라는 포르쉐 양산차 역사상 최고 출력을 낸다. 국내 가격은 1억 4천만원대부터 시작하며, 올해 하반기 출시가 예고된 만큼 정식 발표와 세부 사양은 앞으로 순차적으로 공개될 것으로 보인다.</p>
</div>
`
};

const idgtx = {
  slug: "vw-id4-gtx-korea-launch-2026",
  headline: "\"그냥 ID.4가 아닙니다\"… 폭스바겐 고성능 전기 SUV, 9월 국내 상륙설",
  headlineShort: "폭스바겐 ID.4 GTX, 9월 국내 출시 전망",
  description: "폭스바겐의 고성능 전기 SUV ID.4 GTX가 이르면 2026년 9월 국내 출시를 준비 중인 것으로 알려졌다. 유럽 사양 기준 듀얼모터 220kW(299마력)를 내는 이 모델이 국내 전기 SUV 시장에 어떤 변화를 가져올지 살펴봤다.",
  subtitle: "국내에서 최대 보조금을 받는 수입 전기차로 자리잡은 ID.4가, 이번엔 고성능 버전 GTX로 라인업 확장을 준비하고 있다. 정확한 국내 사양은 아직 공식화되지 않았지만 업계에서는 9월 출시 가능성을 점치고 있다.",
  date: "2026-09-02",
  time: "09:40",
  sectionName: "수입차",
  sectionHref: "import.html",
  categoryLabel: "EV",
  categoryClass: "cat-ev",
  heroImage: "vw_id4_gtx_front.webp",
  heroAlt: "폭스바겐 ID.4 GTX 전측면, 레드 색상, 매장 전시 모습",
  heroCaption: "폭스바겐 매장에 전시된 ID.4 GTX. 측면 펜더의 'GTX' 뱃지가 고성능 버전임을 알린다",
  tags: ["폭스바겐", "ID4GTX", "전기SUV", "듀얼모터", "고성능전기차"],
  categories: ["import", "electric"],
  badge: "EV",
  badgeClass: "cat-ev",
  dataSource: "탑라이더",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "탑라이더", url: "https://www.top-rider.com/article/view/trd202601260006" },
    { name: "EV Specifications", url: "https://www.evspecifications.com/en/news/54a0446" },
    { name: "모터그래프", url: "https://www.motorgraph.com/news/articleView.html?idxno=30577" }
  ],
  body: `
<h2 id="sec1">1. ID.4 GTX, 국내 재출시 관측 배경</h2>
<p><strong>폭스바겐의 고성능 전기 SUV 'ID.4 GTX'가 국내 시장에 다시 등장할 수 있다는 관측이 나오고 있다.</strong> ID.4 GTX는 2021년 유럽에서 처음 공개된 뒤 2022년 9월 국내에도 5,490만원의 가격으로 정식 출시된 바 있다. 당시 1,300여 대의 초도 물량이 계약 3,500여 대를 기록하며 조기 완판됐던 모델이다. 이후 국내에서는 단종된 상태였는데, 업계에서는 2026년 9월경 새로운 GTX 물량이 다시 국내에 투입될 것으로 보고 있다.</p>
<p>다만 이는 아직 폭스바겐코리아의 공식 발표가 아닌 업계 전망 수준이라는 점은 짚어둘 필요가 있다. 정확한 트림 구성과 가격은 공식 발표를 통해 확정될 전망이다.</p>
<div class="article-img-wrap">
<img src="../images/vw_id4_gtx_front_white.webp" alt="폭스바겐 ID.4 GTX 전면 클로즈업, 화이트 색상, 실내 전시장" width="1600" height="911" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ ID.4 GTX 전면부. 좌우로 이어지는 라이트 바와 하단의 GTX 전용 범퍼 디자인이 특징이다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. 유럽 사양 기준 듀얼모터 220kW(299마력)</h2>
<p><strong>유럽에서 판매 중인 ID.4 GTX는 전륜과 후륜에 각각 모터를 얹은 듀얼모터 사륜구동 방식으로, 합산 최고출력 220kW(299마력)를 낸다.</strong> 일반 ID.4가 후륜구동 단일모터 위주로 구성된 것과 달리, GTX는 상시 사륜구동과 더 높은 출력으로 스포티한 주행 감각을 강조한 트림이다. 유럽 판매 가격은 5만 415유로(약 7,700만원)부터 시작한다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>ID.4 일반형과 GTX 비교(유럽 사양 기준)</caption>
<thead>
<tr><th>구분</th><th>구동방식</th><th>최고출력</th></tr>
</thead>
<tbody>
<tr><td>ID.4 (일반형)</td><td>후륜구동(단일모터)</td><td>트림별 상이</td></tr>
<tr><td>ID.4 GTX</td><td>사륜구동(듀얼모터)</td><td>220kW(299마력)</td></tr>
</tbody>
</table>
</div>
<div class="info-box">
<p class="info-box-title">📍 국내 사양은 아직 미확정</p>
<p>위 출력·가격은 유럽 판매 사양 기준이다. 국내 출시 시 배터리 용량, 출력, 정확한 가격은 유럽 사양과 다를 수 있으며 아직 공식 발표되지 않았다. 2022년 국내 판매됐던 1세대 GTX는 국내 인증 기준 1회 충전 주행거리 405km를 기록한 바 있다.</p>
</div>

<!--AD-->

<h2 id="sec3">3. 현재 국내 ID.4 라인업과 보조금 상황</h2>
<p><strong>현재 국내 판매 중인 2026년형 ID.4는 프로 라이트, 프로 트림으로 구성되며 가격은 5,299만원부터 6,041만원 사이다.</strong> 폭스바겐 ID.4는 2026년 국고보조금 최대 432만원을 받는 것으로 알려졌는데, 이는 수입 승용 전기차 가운데 최고 수준이다. 2025년 424만원 대비 10만원 늘어난 수치로, 지자체 보조금까지 더해지면 실구매가는 이보다 더 낮아질 수 있다.</p>
<p>GTX가 국내에 재출시된다면 기존 ID.4 라인업의 최상위 고성능 트림으로 자리잡을 가능성이 크며, 보조금 산정 기준이 되는 차량 가격과 배터리 효율에 따라 지원금 규모도 달라질 수 있다.</p>
<div class="article-img-wrap">
<img src="../images/vw_id4_gtx_rear.webp" alt="폭스바겐 ID.4 GTX 후측면, 레드 색상, 매장 실내" width="1600" height="900" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ ID.4 GTX 후측면. 리어 범퍼 하단에어 디퓨저와 GTX 전용 로고가 적용됐다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec4">4. 외관과 실내, GTX만의 차별점</h2>
<p><strong>ID.4 GTX는 일반형과 플랫폼을 공유하지만 전용 범퍼, 블랙 하이그로시 루프, 20인치 이상의 전용 알로이 휠 등으로 외관에서 확실한 차별화를 뒀다.</strong> 실내에는 레드 스티치가 들어간 시트와 전용 로고가 적용되며, 유럽 사양 기준 어댑티브 서스펜션(DCC)이 옵션으로 제공돼 일반형 대비 한층 다잡힌 주행 감각을 구현한다.</p>
<div class="checkpoint-box">
<p><strong>✅ ID.4 GTX 국내 출시, 이것만은 확인하세요</strong></p>
<p>· 국내 출시는 2026년 9월경으로 업계에서 전망 중(공식 발표 전)<br>· 유럽 사양 기준 듀얼모터 220kW(299마력), 상시 사륜구동<br>· 2022년 1세대 GTX는 5,490만원에 출시돼 조기 완판<br>· 2026년 ID.4는 국고보조금 최대 432만원, 수입 전기차 중 최고 수준<br>· 정확한 국내 트림·가격은 폭스바겐코리아 공식 발표 확인 필요</p>
</div>

<h2 id="sec5">5. 국내 전기 SUV 시장에서의 위치</h2>
<p><strong>ID.4 GTX가 국내에 재출시된다면 테슬라 모델 Y, 기아 EV6, 현대 아이오닉5 N 등과 경쟁할 것으로 예상된다.</strong> 특히 보조금 혜택을 받으면서도 사륜구동과 준수한 출력을 갖춘 수입 전기 SUV라는 점에서, 3천만원 후반부터 시작하는 일반형 ID.4와 함께 폭스바겐코리아의 전기차 판매를 이끄는 축이 될 가능성이 있다. 최신 소식은 폭스바겐코리아 공식 채널을 통해 확인할 수 있다. <a href="https://www.volkswagen.co.kr/" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>
<div class="article-img-wrap">
<img src="../images/vw_id4_gtx_badge.webp" alt="폭스바겐 ID.4 GTX 후면 클로즈업, 그레이 색상, GTX 배지" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ ID.4 후면에 새겨진 GTX 엠블럼. 일반형과 구분되는 고성능 트림 전용 배지다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>ID.4 GTX는 2022년 국내에서 조기 완판됐던 전례가 있는 폭스바겐의 고성능 전기 SUV다. 2026년 9월경 국내 재출시가 업계에서 거론되고 있지만 아직 공식 확정 사항은 아니다. 유럽 사양 기준으로는 듀얼모터 220kW(299마력)와 상시 사륜구동을 갖췄으며, 국내 출시 시 정확한 트림과 가격, 보조금 규모는 폭스바겐코리아의 공식 발표를 통해 확인해야 한다.</p>
</div>
`
};

const bmw7 = {
  slug: "bmw-7series-i7-facelift-2026",
  headline: "\"그릴은 더 커지고, 헤드램프는 작아졌다\"… BMW 7시리즈, 8년 만의 대대적 변신",
  headlineShort: "BMW 7시리즈·i7 페이스리프트 공개",
  description: "BMW가 7세대 7시리즈(G70)의 페이스리프트를 공개했다. 키드니 그릴 확대, 파노라믹 iDrive 인테리어, i7의 주행거리 확대 등이 핵심이다. 글로벌 출고는 2026년 7월부터 시작된다.",
  subtitle: "플래그십 세단 BMW 7시리즈가 부분변경을 거쳐 새로운 얼굴을 갖췄다. 순수전기 모델 i7도 함께 손봐졌으며, 실내에는 BMW의 차세대 인포테인먼트가 대거 투입됐다.",
  date: "2026-09-02",
  time: "09:50",
  sectionName: "수입차",
  sectionHref: "import.html",
  categoryLabel: "FACELIFT",
  categoryClass: "cat-gold",
  heroImage: "bmw_i7_front.webp",
  heroAlt: "BMW i7 전측면, 그레이 색상, 전시장 내부",
  heroCaption: "BMW 월드에 전시된 i7. 대형 키드니 그릴과 크롬 프레임이 플래그십다운 존재감을 드러낸다",
  tags: ["BMW7시리즈", "BMWi7", "페이스리프트", "플래그십세단", "전기세단"],
  categories: ["import"],
  badge: "FACELIFT",
  badgeClass: "cat-gold",
  dataSource: "탑라이더",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "탑라이더", url: "https://www.top-rider.com/article/view/trd202604230003" },
    { name: "오토뷰", url: "https://www.autoview.co.kr/ko-kr/articles/97839" },
    { name: "다나와 자동차", url: "https://auto.danawa.com/news/?Tab=A&p=&Work=detail&no=6001312" }
  ],
  body: `
<h2 id="sec1">1. 7년 만에 새 얼굴을 갖춘 플래그십</h2>
<p><strong>BMW가 7세대 7시리즈(코드명 G70)의 부분변경 모델 '더 뉴 7시리즈'를 공개했다.</strong> 2022년 완전변경 이후 처음 이뤄지는 대규모 손질로, 외관부터 실내 인포테인먼트까지 폭넓게 개선됐다. BMW코리아 역시 순차적으로 이 모델을 들여올 것으로 예상되며, 글로벌 기준 출고는 <strong>2026년 7월부터</strong> 시작된다.</p>
<p>이번 페이스리프트는 가솔린·디젤 마일드 하이브리드 모델은 물론, 플러그인하이브리드(PHEV), 그리고 순수전기 모델인 i7까지 전 라인업에 동시 적용된다는 점이 특징이다.</p>
<div class="article-img-wrap">
<img src="../images/bmw_i7_grille.webp" alt="BMW i7 정면 클로즈업, 대형 키드니 그릴, 'THE i7' 배지" width="1600" height="1067" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ i7 정면부. 커진 키드니 아이코닉 글로우와 소형화된 헤드램프 조합이 눈에 띈다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. 커진 키드니 그릴, 작아진 헤드램프</h2>
<p><strong>외관에서 가장 두드러진 변화는 한층 크고 새로워진 '키드니 아이코닉 글로우' 그릴이다.</strong> 반대로 헤드라이트는 이전보다 소형화됐으며, LED 시그니처 하단에는 세로 방향 광원이 새롭게 배치돼 야간 주행 시 인식성을 높였다. 전동화 모델인 i7에는 그릴 안쪽에 발광 기능이 더해져 순수전기 모델임을 강조하는 디자인 요소로 활용된다.</p>
<div class="info-box">
<p class="info-box-title">📍 참고로 알아두면 좋은 것</p>
<p>키드니 그릴은 BMW 고유의 트윈 그릴 디자인 요소다. 최근 몇 년간 BMW는 전동화 모델을 중심으로 그릴 크기를 키우고 발광 기능을 더하는 방향으로 디자인 정체성을 재정립해왔으며, 이번 7시리즈 페이스리프트에도 같은 흐름이 이어졌다.</p>
</div>

<!--AD-->

<h2 id="sec3">3. 파노라믹 iDrive와 8K 시어터 스크린</h2>
<p><strong>실내에서는 BMW 파노라믹 iDrive를 비롯해 신규 동반석 디스플레이, 8K 해상도의 2열 시어터 스크린이 새롭게 탑재된다.</strong> 클린 디자인 언어를 강조해 소재의 고급감과 모던함을 동시에 살렸다는 것이 BMW 측 설명이다. 운전자 보조 기능도 강화돼 레벨2 수준의 주행 보조와 AI 기반 주차공간 탐지, 자동주차 기능이 포함됐으며, 미국 시장부터는 아마존 알렉사 기반 음성인식도 지원된다.</p>
<div class="article-img-wrap">
<img src="../images/bmw_7series_interior.webp" alt="BMW 7시리즈 실내, 파노라믹 디스플레이와 스티어링 휠, 버건디 시트" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 7시리즈 실내. 운전석 계기판부터 중앙 디스플레이까지 이어지는 파노라믹 형태의 스크린이 특징이다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec4">4. 파워트레인 — 새 엔진과 더 길어진 i7 주행거리</h2>
<p><strong>내연기관 라인업은 기존 B58 엔진 대신 개선된 B58TÜ3 엔진으로 교체된다.</strong> 740i는 최고출력 400마력, 최대토크 55.3kgf·m를 발휘하며, 신규 트림인 735i는 최고출력 286마력으로 라인업 진입 모델 역할을 맡는다. 순수전기 모델 i7은 50 xDrive, 60 xDrive, 고성능 M70 xDrive 트림으로 구성되며, 이번 개선을 통해 WLTP 기준 최대 720km까지 주행거리가 늘어난 것으로 알려졌다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>더 뉴 7시리즈 파워트레인 구성</caption>
<thead>
<tr><th>트림</th><th>파워트레인</th><th>최고출력</th></tr>
</thead>
<tbody>
<tr><td>735i</td><td>가솔린 마일드 하이브리드</td><td>286마력</td></tr>
<tr><td>740i</td><td>가솔린 마일드 하이브리드(B58TÜ3)</td><td>400마력</td></tr>
<tr><td>i7 xDrive50 / 60</td><td>순수전기</td><td>트림별 상이(WLTP 최대 720km)</td></tr>
<tr><td>i7 M70 xDrive</td><td>순수전기 고성능</td><td>M 퍼포먼스 사양</td></tr>
</tbody>
</table>
</div>

<h2 id="sec5">5. 국내 출시 전망</h2>
<p><strong>BMW코리아의 국내 출시 일정은 아직 공식화되지 않았다.</strong> 다만 글로벌 출고가 2026년 7월부터 시작된 만큼, 통상적인 국내 도입 주기를 고려하면 연내 또는 2027년 상반기 중 국내 상륙이 유력하게 점쳐진다. 기존 7시리즈·i7이 국내 대형 세단 시장에서 벤츠 S클래스, EQS와 경쟁해온 만큼, 이번 페이스리프트 역시 같은 구도에서 판매 경쟁을 이어갈 전망이다.</p>
<div class="checkpoint-box">
<p><strong>✅ 더 뉴 7시리즈·i7, 이것만은 확인하세요</strong></p>
<p>· 글로벌 출고는 2026년 7월부터 시작<br>· 외관은 키드니 그릴 확대, 헤드램프 소형화가 핵심 변화<br>· 실내는 파노라믹 iDrive, 8K 2열 시어터 스크린 신규 적용<br>· i7은 WLTP 기준 최대 720km까지 주행거리 확대<br>· 국내 출시 일정은 미공개, 연내 상륙 가능성 거론</p>
</div>
<div class="article-img-wrap">
<img src="../images/bmw_i7_rear.webp" alt="BMW i7 후측면, 그레이 색상, 전시장 내부" width="1600" height="1126" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ i7 후측면. 얇고 가로로 이어지는 리어 콤비네이션 램프와 'i7' 레터링이 적용됐다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>더 뉴 7시리즈는 키드니 그릴 확대와 파노라믹 iDrive 실내를 앞세워 8년 만에 플래그십 세단의 얼굴을 새로 그렸다. 순수전기 i7도 함께 개선돼 주행거리가 늘었고, 새로운 B58TÜ3 엔진을 단 내연기관 모델도 라인업에 합류했다. 글로벌 출고는 2026년 7월부터 시작되며, 국내 출시 시점은 아직 공식화되지 않아 앞으로의 발표를 지켜볼 필요가 있다.</p>
</div>
`
};

fs.writeFileSync('scratchpad/specB.json', JSON.stringify([porsche, idgtx, bmw7], null, 2), 'utf8');
console.log('written scratchpad/specB.json');
