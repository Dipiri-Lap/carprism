const fs = require('fs');
const path = require('path');

const articles = [];

/* ============ 1. Tesla Service Center + BMS Issue ============ */
articles.push({
  slug: "tesla-service-center-bms-issue-2026",
  headline: "\"926일 걸렸다\"… AS센터는 14곳뿐, 테슬라 BMS 오류의 그림자",
  headlineShort: "테슬라 서비스센터 14곳뿐... BMS 오류 4,637건 도마 위",
  description: "국내 테슬라 전기차의 서비스센터가 전국 14곳에 불과한 가운데, 배터리관리시스템(BMS) 오류로 인한 수리가 최근 5년간 4,637건에 달한다는 사실이 국정감사 자료로 드러났다. 평균 수리기간은 23.4일이지만 926일이 걸린 사례도 확인돼, 정비 인프라 부족과 맞물려 소비자 불안이 커지고 있다.",
  subtitle: "국내 등록 대수가 빠르게 늘고 있는 테슬라지만, 정작 사고나 고장이 났을 때 기댈 곳은 마땅치 않다는 지적이 나온다. 서비스센터는 전국 14곳뿐이고, 배터리관리시스템(BMS) 오류 수리 건수는 5년간 4,637건에 달하는 것으로 나타났다.",
  date: "2026-09-09",
  time: "09:00",
  sectionName: "뉴스",
  sectionHref: "news.html",
  categoryLabel: "이슈",
  categoryClass: "cat-red",
  heroImage: "tesla_modely_juniper_rear.webp",
  heroAlt: "테슬라 모델 Y 후측면, 실내 전시장에서 촬영된 모습",
  heroCaption: "국내 매장에 전시된 테슬라 모델 Y. 등록 대수는 꾸준히 늘고 있지만 사고·고장 시 이용할 서비스센터는 여전히 부족하다는 지적이 나온다",
  tags: ["테슬라", "AS센터", "BMS오류", "전기차정비", "국정감사"],
  categories: ["news"],
  badge: "이슈",
  badgeClass: "cat-red",
  dataSource: "지피코리아",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "지피코리아", url: "https://www.gpkorea.com/news/articleView.html?idxno=146529" },
    { name: "투데이신문", url: "https://www.ntoday.co.kr/news/articleView.html?idxno=120049" },
    { name: "네이트뉴스", url: "https://news.nate.com/view/20250930n35274" }
  ],
  body: `
<h2 id="sec1">1. 전국 14곳뿐인 서비스센터… 사고 나면 어디로?</h2>
<p><strong>테슬라코리아가 국내에 운영 중인 직영 서비스센터는 전국 14곳에 불과한 것으로 나타났다.</strong> 대전·울산·충북·충남·전북·전남·경북·경남 등 8개 시도에는 아예 서비스센터가 한 곳도 없다. 이는 국내에서 80곳 안팎의 서비스망을 갖춘 BMW·메르세데스-벤츠 등 수입 프리미엄 브랜드와 비교하면 크게 부족한 수준이다.</p>
<p>더 심각한 것은 사고차량을 수리할 수 있는 거점이다. 분당·노원·원주·창원 등 일부 센터에서는 배터리·구동장치 같은 고전압 부품 수리가 아예 불가능하며, 판금·도장이 가능한 직영센터는 동탄·용인 단 2곳뿐이다. 공인 바디샵 12곳을 더해도 전국에서 사고 수리가 가능한 거점은 14곳 남짓에 머문다. 수도권의 한 바디샵 관계자는 "하루 평균 20건가량의 사고차 문의가 들어오지만 실제 입고되는 차량은 서너 대에 그친다"고 전했다.</p>
<div class="article-img-wrap">
<img src="../images/tesla_supercharger_station.webp" alt="미국의 테슬라 슈퍼차저 충전소 전경, 흰 벽 앞에 충전기 4대가 늘어선 모습" width="1280" height="640" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 미국의 한 테슬라 슈퍼차저 충전소. 충전 인프라는 전 세계적으로 빠르게 확충되고 있지만, 정비·사고수리 네트워크는 이에 크게 못 미친다는 평가다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. BMS 오류 5년간 4,637건… 926일 걸린 사례도</h2>
<p><strong>국회 국토교통위원회 박용갑 의원(더불어민주당)이 테슬라코리아로부터 제출받은 자료에 따르면, 2020년 8월부터 2025년 9월까지 약 5년 1개월간 배터리관리시스템(BMS) 관련 수리 건수는 총 4,637건에 달했다.</strong> 평균 수리 기간은 23.4일이었지만, 3~6개월이 걸린 사례가 124건, 6개월~1년이 걸린 사례도 3건 있었다. 가장 극단적인 사례는 2018년 10월 생산된 모델 X로, 2020년 3월 오류가 발생한 뒤 무려 2024년 10월에야 수리가 완료돼 926일이 소요됐다.</p>
<p>BMS 오류가 재발한 차량도 적지 않았다. 같은 차량에서 오류가 2회 발생해 재수리한 사례가 245대, 3회는 19대, 4회 이상도 1대 확인됐다. 박용갑 의원은 "테슬라 전기차 정비망은 턱없이 부족해 많은 국민이 불편을 겪고 있다"고 지적했다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>테슬라 BMS 수리 소요기간 분포(2020.08~2025.09, 총 4,637건)</caption>
<thead>
<tr><th>수리 소요기간</th><th>건수</th><th>비중</th></tr>
</thead>
<tbody>
<tr><td>7일 미만</td><td>1,138건</td><td>24.5%</td></tr>
<tr><td>7~14일</td><td>1,103건</td><td>23.8%</td></tr>
<tr><td>15~29일</td><td>1,114건</td><td>24.0%</td></tr>
<tr><td>1~3개월</td><td>1,054건</td><td>22.7%</td></tr>
<tr><td>3~6개월</td><td>124건</td><td>2.7%</td></tr>
<tr><td>6개월 이상</td><td>4건</td><td>0.1% 미만</td></tr>
</tbody>
</table>
</div>

<!--AD-->

<h2 id="sec3">3. BMS 오류, 왜 이렇게 오래 걸리나</h2>
<p><strong>BMS(Battery Management System)는 전기차 배터리의 전압·온도·충전 상태를 실시간으로 감시하고 제어하는 핵심 전장 시스템이다.</strong> 이상이 감지되면 안전을 위해 배터리를 보호 모드로 전환하는데, 이 과정에서 충전량이 50% 미만으로 제한되거나 아예 충전이 불가능해지는 경우가 많다. 문제는 이를 진단하고 고치는 데 필요한 진단 장비와 부품, 숙련 인력이 소수의 직영센터에 집중돼 있다는 점이다. 정비업계 관계자들은 부품 수급 지연을 반복 지목하고 있으며, 특정 부품 하나가 없어 수개월씩 대기하는 사례도 드물지 않다는 것이 업계의 공통된 설명이다.</p>
<div class="article-img-wrap">
<img src="../images/tesla_modely_juniper_interior.webp" alt="테슬라 모델 Y 실내, 스티어링 휠과 가로형 중앙 디스플레이가 보이는 모습" width="1280" height="720" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 테슬라 모델 Y 실내. BMS에 이상이 감지되면 중앙 디스플레이에 충전 제한 경고가 표시되고, 심한 경우 충전 자체가 어려워진다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec4">4. 정부는 "리콜 아닌 정비"… 배터리 보증기간도 열세</h2>
<p><strong>더 큰 논란은 이런 오류가 '리콜' 대상이 아닌 단순 정비로 처리되고 있다는 점이다.</strong> BMS 오류가 특정 배치나 부품에서 반복적으로 발생하고 있음에도, 정부와 제조사 모두 이를 개별 차량의 정비 사안으로 분류하면서 차주들의 불안감은 쉽게 가라앉지 않고 있다. 국회에도 관련 청원이 올라오는 등 소비자 목소리는 계속 커지는 분위기다.</p>
<p>배터리 보증기간에서도 테슬라는 상대적으로 불리하다. 모델 3·모델 Y RWD 기준 테슬라의 배터리 보증기간은 8년 또는 16만km인 반면, 현대차·기아는 전기차 고전압 배터리를 10년 또는 20만km까지 보증한다. 관련 통계는 국회 국토교통위원회 자료로 공개돼 있으며, 자세한 내용은 원문 기사에서 확인할 수 있다. <a href="https://www.gpkorea.com/news/articleView.html?idxno=146529" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>
<div class="article-img-wrap">
<img src="../images/tesla_model_y_korea_price_page.webp" alt="테슬라코리아 공식 홈페이지의 모델 Y 가격 안내 페이지 스크린샷" width="800" height="500" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 테슬라코리아 공식 홈페이지의 모델 Y 가격 페이지. 8년/16만km인 배터리 보증기간은 현대차·기아의 10년/20만km에 못 미친다 <span class="cap-credit">ⓒ 테슬라코리아</span></p>
</div>

<h2 id="sec5">5. 판매는 느는데 인프라는 제자리… 남은 과제</h2>
<p><strong>아이러니한 점은 테슬라의 국내 판매가 오히려 늘고 있다는 사실이다.</strong> 모델 Y는 최근 국내 월간 신규 등록 대수 1위를 차지할 만큼 대중적인 인기를 얻고 있는데, 이런 판매 증가 속도를 서비스 인프라 확충이 따라가지 못하고 있다는 게 문제의 핵심이다. 등록 대수가 늘어날수록 서비스센터 1곳이 감당해야 할 차량 수도 함께 늘어나는 구조이기 때문에, 지금 같은 속도라면 대기 시간과 수리 지연 문제는 오히려 악화될 가능성이 크다는 우려도 나온다.</p>
<div class="info-box">
<p class="info-box-title">📍 BMS(배터리관리시스템)란</p>
<p>BMS는 전기차 배터리 팩 내부의 각 셀의 전압·전류·온도를 실시간으로 측정하고, 과충전·과방전·과열을 방지하도록 제어하는 시스템이다. 내연기관차의 엔진제어장치(ECU)에 해당하는 전기차의 핵심 두뇌 중 하나로, BMS에 오류가 생기면 배터리 자체가 멀쩡하더라도 안전을 위해 충전이나 주행 성능이 제한될 수 있다.</p>
</div>
<div class="checkpoint-box">
<p><strong>✅ 테슬라 AS센터·BMS 오류, 이것만은 확인하세요</strong></p>
<p>· 국내 테슬라 서비스센터는 전국 14곳, 8개 시도는 서비스센터가 전무<br>· 사고차 판금·도장 가능한 직영센터는 단 2곳, 공인 바디샵 포함해도 14곳 안팎<br>· 2020.08~2025.09 BMS 수리 건수 4,637건, 평균 23.4일·최장 926일 소요<br>· 같은 차량에서 BMS 오류가 재발한 사례도 265대(2회 이상)<br>· 정부는 이를 리콜이 아닌 단순 정비로 분류, 배터리 보증기간도 현대차·기아보다 짧음(8년/16만km)</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>테슬라의 국내 판매량이 늘어나는 속도에 비해 서비스센터와 사고 수리 인프라 확충은 뚜렷이 뒤처져 있다. 5년간 4,637건에 달하는 BMS 수리 건수와 926일이라는 극단적인 지연 사례는, 전기차 대중화 이면에 정비 인프라라는 숙제가 여전히 남아있음을 보여준다. 정부가 BMS 오류를 리콜이 아닌 단순 정비로 처리하는 상황에서, 소비자 불안을 해소하려면 서비스망 확충과 함께 보다 투명한 원인 규명이 필요하다는 지적이 나온다.</p>
</div>
`
});

/* ============ 2. Tesla Model Y IIHS Top Safety Pick+ ============ */
articles.push({
  slug: "tesla-model-y-us-top-safety-rating-2026",
  headline: "\"충돌시험 전 항목 굿(Good)\"… 테슬라 모델 Y, 美 안전등급 최고점 받았다",
  headlineShort: "테슬라 모델 Y, IIHS 최고 안전등급 획득... 국내 판매 1위 굳히기",
  description: "미국 고속도로안전보험협회(IIHS)가 2026~2027년형 테슬라 모델 Y에 최고 등급인 '탑 세이프티 픽 플러스'를 수여했다. 스몰 오버랩·측면 충돌 등 강화된 전 항목에서 '굿(Good)' 판정을 받았으며, 국내에서도 지난 8월 9,638대가 판매되며 전체 차종 판매 1위에 올랐다.",
  subtitle: "미국 도로안전보험협회(IIHS)가 새롭게 강화한 기준으로 진행한 충돌시험에서, 2026~2027년형 테슬라 모델 Y가 최고 등급인 '탑 세이프티 픽 플러스'를 받았다. 국내에서도 판매 1위를 달리는 모델인 만큼, 이번 안전 인증이 갖는 의미가 작지 않다.",
  date: "2026-09-09",
  time: "09:10",
  sectionName: "전기차",
  sectionHref: "electric.html",
  categoryLabel: "안전",
  categoryClass: "cat-ev",
  heroImage: "tesla_modely_juniper_front.webp",
  heroAlt: "테슬라 모델 Y 전측면, 실내 전시장에서 촬영된 모습",
  heroCaption: "IIHS 탑 세이프티 픽 플러스를 획득한 테슬라 모델 Y. 스몰 오버랩·측면 충돌 등 전 항목에서 최고 등급인 '굿(Good)' 판정을 받았다",
  tags: ["테슬라", "모델Y", "IIHS", "안전등급", "전기차안전"],
  categories: ["electric"],
  badge: "안전",
  badgeClass: "cat-ev",
  dataSource: "오토트리뷴",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "오토트리뷴", url: "https://www.autotribune.co.kr/news/articleView.html?idxno=45399" },
    { name: "IIHS", url: "https://www.iihs.org/news/detail/two-additional-models-garner-top-safety-pick-awards" },
    { name: "Motor1", url: "https://www.motor1.com/news/807119/kia-telluride-tesla-model-y/" }
  ],
  body: `
<h2 id="sec1">1. IIHS '탑 세이프티 픽 플러스'란</h2>
<p><strong>미국 고속도로안전보험협회(IIHS)가 2027년형 테슬라 모델 Y에 최고 등급인 '탑 세이프티 픽 플러스(Top Safety Pick+)'를 수여했다.</strong> IIHS는 미국 보험업계가 공동 출자해 운영하는 비영리 안전연구기관으로, 정부의 법정 충돌시험과는 별도로 훨씬 까다로운 자체 기준을 적용하는 것으로 유명하다. 탑 세이프티 픽 플러스는 IIHS가 부여하는 최상위 등급으로, 충돌 안전성뿐 아니라 전방충돌방지·헤드램프 등 예방 안전 기술까지 모두 일정 수준 이상을 충족해야 받을 수 있다. 이번 발표는 2026년 9월 3일 이뤄졌다.</p>
<div class="article-img-wrap">
<img src="../images/tesla_modely_juniper_rear.webp" alt="테슬라 모델 Y 후측면, 실내 전시장에서 촬영된 모습" width="1280" height="853" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 모델 Y 후측면. 충돌 시 승객실 안전 구역을 온전히 유지하는 능력에서도 최고 점수를 받았다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. 스몰오버랩부터 측면충돌까지, 전 항목 '굿(Good)'</h2>
<p><strong>2026~2027년형 모델 Y는 차량 전면 일부만 겹치게 충돌시키는 스몰 오버랩 테스트, 실제 도로 충돌 환경을 반영한 중간 오버랩 전면 충돌시험, 그리고 최근 강화된 기준이 적용된 측면 충돌시험까지 모든 항목에서 '굿(Good)' 판정을 받았다.</strong> 특히 측면 충돌시험은 IIHS가 실제 도로에서 발생하는 대형 SUV·픽업트럭과의 충돌을 더 정확히 반영하기 위해 최근 시험 강도를 높인 항목이어서, 이 부분에서 최고 등급을 받았다는 점이 의미가 크다는 평가다. 승객실 구조 역시 충돌 하중을 받는 상황에서도 안전 구역을 거의 그대로 유지해, 탑승객과 뒷좌석 승객 보호 능력이 최상위 수준임을 입증했다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>2026~2027년형 테슬라 모델 Y, IIHS 항목별 평가 결과</caption>
<thead>
<tr><th>평가 항목</th><th>결과</th></tr>
</thead>
<tbody>
<tr><td>스몰 오버랩 전면 충돌</td><td>Good(우수)</td></tr>
<tr><td>중간 오버랩 전면 충돌</td><td>Good(우수)</td></tr>
<tr><td>측면 충돌(강화 기준)</td><td>Good(우수)</td></tr>
<tr><td>전방충돌방지 2.0(차량·보행자 감지)</td><td>Good(우수)</td></tr>
<tr><td>헤드램프</td><td>Good(우수)</td></tr>
<tr><td>안전벨트 리마인더</td><td>Marginal(보통)</td></tr>
</tbody>
</table>
</div>

<!--AD-->

<h2 id="sec3">3. 유일한 옥에 티, 안전벨트 리마인더 'Marginal'</h2>
<p><strong>모델 Y가 유일하게 최고점을 받지 못한 항목은 안전벨트 미착용 경고, 이른바 '리마인더' 기능이다.</strong> 이 항목에서 모델 Y는 '보통(Marginal)' 등급을 받았는데, 다만 이는 탑 세이프티 픽 플러스 등급을 받기 위한 필수 요건은 아니어서 최종 등급 산정에는 영향을 주지 않았다. 나머지 모든 충돌 안전·예방 안전 항목에서 최고점을 받은 만큼, 이번 인증은 모델 Y의 전반적인 안전 성능이 업계 최상위권임을 보여준다는 것이 IIHS 측 설명이다.</p>
<div class="info-box">
<p class="info-box-title">📍 전방충돌방지 시스템이란</p>
<p>전방충돌방지 시스템(AEB, Automatic Emergency Braking)은 전방의 차량이나 보행자를 센서·카메라로 감지해 충돌 위험이 있을 때 자동으로 제동을 거는 기술이다. IIHS는 이를 차량 간(vehicle-to-vehicle) 시험과 보행자(pedestrian) 시험으로 나눠 평가하는데, 모델 Y는 테슬라의 카메라 기반 비전 시스템만으로 다양한 접근 속도에서 충돌을 회피해 두 항목 모두 최고점을 받았다.</p>
</div>

<h2 id="sec4">4. 함께 수상한 기아 텔루라이드… 국산·수입 안전 경쟁 치열</h2>
<p><strong>같은 발표에서 기아의 대형 SUV 텔루라이드도 나란히 탑 세이프티 픽 플러스를 받으면서, 국산·수입을 가리지 않고 안전 인증 경쟁이 치열해지는 모습이다.</strong> IIHS가 해마다 시험 기준을 강화하는 추세를 감안하면, 신규 모델뿐 아니라 기존 볼륨 모델들도 꾸준히 재시험을 통과해야 최고 등급을 유지할 수 있다. 모델 Y와 텔루라이드처럼 각자의 체급에서 대중적 인기를 얻은 모델이 나란히 최고 등급을 받았다는 점은, 소비자 입장에서도 안전성과 판매량이 반드시 트레이드오프 관계는 아니라는 점을 보여주는 사례로 꼽힌다.</p>
<div class="article-img-wrap">
<img src="../images/kia_telluride_2027_front.webp" alt="기아 텔루라이드 2세대 전측면, 화이트 색상, 주차장에서 촬영된 모습" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 함께 탑 세이프티 픽 플러스를 받은 기아 텔루라이드. 같은 발표에서 두 차종이 나란히 최고 등급에 이름을 올렸다 <span class="cap-credit">ⓒ 기아</span></p>
</div>

<h2 id="sec5">5. 국내 판매 1위 굳히는 모델 Y</h2>
<p><strong>안전 인증 소식은 국내 판매 흐름과도 맞물려 주목받고 있다.</strong> 지난 8월 국내에서 모델 Y는 9,638대가 신규 등록돼, 2위인 기아 쏘렌토(6,397대)를 큰 격차로 따돌리고 전체 차종 판매 1위를 차지했다. 안전 인증과 판매 실적이 동시에 좋은 흐름을 보이면서, 모델 Y는 당분간 국내 준중형 SUV 시장에서 강세를 이어갈 것이라는 전망이 나온다. 관련 시험 결과와 세부 항목은 IIHS 공식 홈페이지에서 확인할 수 있다. <a href="https://www.iihs.org/news/detail/two-additional-models-garner-top-safety-pick-awards" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>
<div class="article-img-wrap">
<img src="../images/tesla_modely_juniper_interior.webp" alt="테슬라 모델 Y 실내, 스티어링 휠과 가로형 중앙 디스플레이가 보이는 모습" width="1280" height="720" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 모델 Y 실내. 이번 평가에서 유일하게 '보통(Marginal)' 등급을 받은 항목은 안전벨트 미착용 경고(리마인더)였다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<div class="checkpoint-box">
<p><strong>✅ 모델 Y IIHS 안전등급, 이것만은 확인하세요</strong></p>
<p>· 2026년 9월 3일 IIHS가 2026~2027년형 모델 Y에 탑 세이프티 픽 플러스 수여<br>· 스몰오버랩·중간오버랩·측면충돌·전방충돌방지·헤드램프 전 항목 'Good'<br>· 유일하게 안전벨트 리마인더만 'Marginal', 최고 등급 산정 필수 요건은 아님<br>· 같은 발표에서 기아 텔루라이드도 함께 최고 등급 획득<br>· 국내에서는 8월 9,638대 판매로 전체 차종 판매 1위</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>테슬라 모델 Y는 강화된 IIHS 기준의 충돌시험 전 항목에서 최고 등급을 받으며 안전성을 다시 한번 입증했다. 유일한 옥에 티인 안전벨트 리마인더도 최종 등급에는 영향이 없어, 종합적으로는 업계 최상위권 안전 성능을 갖췄다는 평가다. 마침 국내 판매에서도 전체 차종 1위를 차지하고 있는 만큼, 이번 안전 인증은 모델 Y의 대중적 인기에 힘을 더하는 요소로 작용할 전망이다.</p>
</div>
`
});

/* ============ 3. Kia K-series US trademark re-registration ============ */
articles.push({
  slug: "kia-us-nameplate-registration-k-series-2026",
  headline: "\"신차 5종 온다?\"… 기아, 美서 K2·K3·K6·K7·K8 상표 재출원한 진짜 이유",
  headlineShort: "기아 K2~K8 美 상표 재출원, 신차 예고 아닌 상표 갱신",
  description: "기아가 미국 특허상표청(USPTO)에 K2·K3·K6·K7·K8 등 5개 상표를 재출원한 사실이 알려지며 신차 출시설이 나왔지만, 실상은 2020년 등록분의 6년 주기 상표 유지 절차에 가까운 것으로 파악됐다. K6는 아직 실제 양산된 적 없는 이름이라는 점도 확인됐다.",
  subtitle: "기아가 미국에서 K2·K3·K6·K7·K8이라는 5개 상표를 한꺼번에 재출원하면서, 온라인에서는 신차 5종이 쏟아지는 것 아니냐는 추측이 돌았다. 하지만 취재 결과 이는 2020년 등록된 상표의 6년 주기 유지 절차에 가까운 것으로 나타났다.",
  date: "2026-09-09",
  time: "09:20",
  sectionName: "뉴스",
  sectionHref: "news.html",
  categoryLabel: "이슈",
  categoryClass: "cat-blue",
  heroImage: "kia_k8_2027_front.webp",
  heroAlt: "2027년형 기아 K8 전측면, 밝은 색상, 실내 전시장에서 촬영된 모습",
  heroCaption: "2027년형 기아 K8. 국내외에서 이미 판매 중인 K8은 이번 미국 상표 재출원 대상 다섯 개 이름 중 하나다",
  tags: ["기아", "K시리즈", "USPTO", "상표출원", "기아신차"],
  categories: ["news"],
  badge: "이슈",
  badgeClass: "cat-blue",
  dataSource: "지피코리아",
  imageCredit: "기아",
  sources: [
    { name: "지피코리아", url: "https://www.gpkorea.com/news/articleView.html?idxno=146414" },
    { name: "Autoblog", url: "https://www.autoblog.com/news/kias-5-new-u-s-trademark-filings-dont-mean-5-new-models" },
    { name: "CarBuzz", url: "https://carbuzz.com/kia-trademark-5-new-names-september-2026/" }
  ],
  body: `
<h2 id="sec1">1. 미국서 한꺼번에 재출원된 K2·K3·K6·K7·K8</h2>
<p><strong>기아가 미국 특허상표청(USPTO)에 K2, K3, K6, K7, K8 등 다섯 개 상표를 한꺼번에 재출원한 사실이 외신 보도로 알려졌다.</strong> 2026년 9월 5일(현지시각) 외신들이 이 소식을 전하면서, 온라인 커뮤니티와 자동차 매체들 사이에서는 "기아가 미국에 신차 5종을 한꺼번에 투입하려는 것 아니냐"는 추측이 빠르게 번졌다. 다섯 개 이름이 동시에 재등장했다는 사실만 보면 충분히 나올 법한 해석이었다.</p>
<div class="article-img-wrap">
<img src="../images/kia_k4_gt_line_front.webp" alt="미국형 기아 K4 GT-Line 전측면, 화이트 색상, 야외 주차장에서 촬영된 모습" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 미국형 기아 K4 GT-Line. 국내 자매 모델은 한때 K3로 불렸으나 현재는 K4라는 이름으로 판매되고 있다 <span class="cap-credit">ⓒ Autosdeprimera, Wikimedia Commons (CC BY 3.0)</span></p>
</div>

<h2 id="sec2">2. 왜 하필 지금? "6년 주기 상표 유지 절차"</h2>
<p><strong>그러나 실제 내막은 신차 발표와는 거리가 있었다.</strong> 미국에서 상표권을 계속 유지하려면 등록 후 일정 주기마다 "실제 사용 사실을 입증하거나 관련 서류를 제출"해야 하는데, 기아가 보유한 K2·K3·K8 상표는 2020년 9월 1일에 등록됐고 이번 재출원은 등록 6주년 시점인 2026년 9월 2일, 즉 바로 다음 날 이뤄졌다. K6·K7 역시 2020년 9월 29일 등록분으로 같은 유지 주기 패턴을 따른다. 결국 이번 재출원은 신차 계획 발표가 아니라, 이미 보유한 상표권을 잃지 않기 위한 행정 절차 성격이 짙다는 것이 외신들의 공통된 분석이다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>기아 K-시리즈 재출원 5개 상표 현황</caption>
<thead>
<tr><th>상표명</th><th>현재 상태</th></tr>
</thead>
<tbody>
<tr><td>K2</td><td>해외 시장 운영(미국 미출시)</td></tr>
<tr><td>K3</td><td>국내에서는 K4로 대체, 해외 일부 국가 사용</td></tr>
<tr><td>K6</td><td>실제 양산된 적 없는 이름(상표만 보유)</td></tr>
<tr><td>K7</td><td>해외 시장 운영(국내는 K8로 대체)</td></tr>
<tr><td>K8</td><td>국내외에서 현재 판매 중</td></tr>
</tbody>
</table>
</div>

<!--AD-->

<h2 id="sec3">3. K6는 실체 없는 이름… 아직 양산된 적 없다</h2>
<p><strong>이번 재출원 명단에서 특히 눈에 띄는 이름은 K6다.</strong> K2·K3·K7·K8은 모두 한 번쯤 실제 생산 모델에 붙었던 이름이지만, K6는 지금까지 어떤 시장에서도 실제 양산 차량에 쓰인 적이 없는 '상표만 존재하는 이름'이다. 즉 이번 재출원은 K6라는 이름이 언젠가 쓰일 가능성을 열어두기 위한 조치일 뿐, 임박한 신차 계획을 뜻하는 것은 아니라는 게 업계 중론이다.</p>
<div class="info-box">
<p class="info-box-title">📍 상표 유지 재출원이란</p>
<p>미국에서는 상표를 등록했다고 영구히 권리가 보장되지 않는다. 등록 후 5~6년 주기로 해당 상표가 실제 상업적으로 사용되고 있음을 증명하거나, 사용할 의사가 있다는 서류를 제출해야 상표권이 유지된다. 이 절차를 놓치면 상표권이 소멸돼 다른 업체가 선점할 수도 있다. 완성차 업체들이 미출시 국가에서도 자사 브랜드명을 선제적으로 등록·유지하는 것은 이 때문이다.</p>
</div>

<h2 id="sec4">4. 미국 시장의 현재 라인업 — K5, K4는 이미 있다</h2>
<p><strong>현재 기아가 미국에 정식 출시한 알파벳-숫자 조합 세단은 K5(옵티마의 후속)와 K4(포르테의 후속) 두 종뿐이다.</strong> 이번에 재출원된 K2·K3·K6·K7·K8은 모두 해외 시장에서 운영되거나(K2·K7), 국내에서 다른 이름으로 대체됐거나(K3→K4, K7→K8), 아예 양산된 적이 없는(K6) 이름들이다. 미국 시장에 이 이름들이 실제로 투입되려면 상표 확보와는 별개로 별도의 상품화·인증 절차가 필요하기 때문에, 상표 재출원만으로 출시를 단정하기는 어렵다는 것이 전문가들의 시각이다.</p>
<div class="article-img-wrap">
<img src="../images/kia_k5_gt_driving_2026.webp" alt="기아 K5 GT, 도로를 주행하는 실버 색상 세단" width="1280" height="720" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 美 시장에서 이미 정식 판매 중인 기아 K5. 이번 재출원 대상은 아니지만, 기아의 K-시리즈 세단 전략을 보여주는 참고 사례다 <span class="cap-credit">ⓒ 기아</span></p>
</div>

<h2 id="sec5">5. 진짜 관전 포인트는 2027년 — K4·K9 갱신 시점</h2>
<p><strong>업계에서는 이번 일보다 오히려 2027년의 움직임을 주시해야 한다는 의견이 나온다.</strong> K4와 K9의 미국 상표 갱신 시점이 2027년으로 예정돼 있는데, 이때 기아가 어떤 방식으로 상표를 관리하는지가 향후 실제 신차 전략을 가늠할 더 유의미한 신호가 될 수 있다는 것이다. 즉 이번 K2·K3·K6·K7·K8 재출원은 "현재로서는 출시를 의미한다고 보기 어렵다"는 게 외신들의 대체적인 평가지만, 기아가 다양한 체급의 세단 이름을 계속 확보해두고 있다는 사실 자체는 향후 라인업 확장 가능성을 완전히 배제하지 않는다는 해석도 함께 나온다.</p>
<div class="article-img-wrap">
<img src="../images/kia_k9_b.webp" alt="중국 도로에서 촬영된 기아 K9(K900) 전측면, 블랙 색상, 신호 대기 중인 모습" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 해외 도로에서 포착된 기아 K9(현지명 K900). K9의 미국 상표 갱신 시점은 2027년으로, 이번 재출원보다 더 주목할 만한 다음 이벤트로 꼽힌다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<div class="checkpoint-box">
<p><strong>✅ 기아 K2~K8 상표 재출원, 이것만은 확인하세요</strong></p>
<p>· 2026년 9월 2일 K2·K3·K6·K7·K8 등 5개 상표를 USPTO에 재출원<br>· 2020년 9월 등록분의 6년 주기 상표 유지 절차로, 신차 발표와는 무관<br>· K6는 지금까지 어떤 시장에서도 실제 양산된 적 없는 이름<br>· 현재 미국 정식 판매 중인 K-시리즈 세단은 K5·K4 두 종뿐<br>· 다음 관전 포인트는 2027년 K4·K9 상표 갱신 시점</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>기아의 K2·K3·K6·K7·K8 상표 재출원은 신차 5종의 예고편이 아니라, 이미 보유한 상표권을 지키기 위한 6년 주기 행정 절차에 가까운 것으로 파악됐다. 다만 완성차 업체가 미출시 시장에서도 브랜드명을 선제적으로 확보해두는 것은 흔한 전략인 만큼, 장기적으로 K-시리즈 세단 라인업이 확장될 가능성 자체를 완전히 닫아둔 것은 아니다. 2027년 예정된 K4·K9 상표 갱신 시점에서 기아가 어떤 선택을 하는지가 다음 관전 포인트로 꼽힌다.</p>
</div>
`
});

const outPath = path.join(__dirname, 'spec_group1.json');
fs.writeFileSync(outPath, JSON.stringify(articles, null, 2), 'utf8');
console.log('written', outPath, articles.length, 'articles');
