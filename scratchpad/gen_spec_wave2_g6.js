const fs = require('fs');
const path = require('path');

const articles = [];

/* ============ 1. 수입차 톱10 절반 중국산 ============ */
articles.push({
  slug: "import-car-top10-half-chinese-brands-2026",
  headline: "수입차 톱10 절반이 중국산…\"소프트웨어 자율주행이 관건\"",
  headlineShort: "수입차 톱10 모델 절반이 중국산, 테슬라·BYD가 절반 삼켰다",
  description: "2026년 8월 국내 수입차 판매 상위 모델 가운데 절반이 중국에서 생산된 것으로 나타났다. 테슬라 모델Y·모델3의 상하이 공장 생산분과 BYD의 돌핀·씨라이언7·씨라이언6 DM-i가 줄줄이 상위권에 올랐다. 업계에서는 기존 레거시 브랜드가 소프트웨어와 자율주행 경쟁력으로 승부를 봐야 하는 국면이라는 진단이 나온다.",
  subtitle: "\"중국이 단순 제조를 담당하는 상황\"이라는 말이 나올 정도로, 국내 수입차 시장에서 중국산의 존재감이 커졌다. 2026년 8월 판매 상위 모델 절반이 중국에서 생산된 차량으로 채워지면서, 레거시 브랜드의 대응 방식에 관심이 쏠린다.",
  date: "2026-09-10",
  time: "11:30",
  sectionName: "수입차",
  sectionHref: "import.html",
  categoryLabel: "시장동향",
  categoryClass: "cat-blue",
  heroImage: "tesla_modely_juniper_front.webp",
  heroAlt: "테슬라 모델Y 전측면, 그레이 색상, 전시장 내부",
  heroCaption: "8월 국내 수입차 모델별 판매 1위를 차지한 테슬라 모델Y. 상하이 기가팩토리에서 생산돼 '중국산'으로 분류된다",
  tags: ["수입차판매", "테슬라모델Y", "BYD", "중국산자동차", "소프트웨어자율주행"],
  categories: ["import"],
  badge: "시장동향",
  badgeClass: "cat-blue",
  dataSource: "지피코리아",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "지피코리아", url: "https://www.gpkorea.com/news/articleView.html?idxno=146478" },
    { name: "이투데이", url: "https://www.etoday.co.kr/news/view/2621423" },
    { name: "오토스파이넷", url: "https://www.autospy.net/news/16303" }
  ],
  body: `
<h2 id="sec1">1. 8월 수입차 판매, 테슬라 독주 속 중국 브랜드 약진</h2>
<p><strong>2026년 8월 국내 수입차 시장은 테슬라의 7개월 연속 1위 행진 속에 중국 브랜드 BYD의 약진이 두드러졌다.</strong> 브랜드별 판매량을 보면 테슬라가 10,400대로 압도적 1위를 지켰고, BMW 6,180대, 메르세데스-벤츠 4,037대가 뒤를 이었다. 4위는 3,002대를 기록한 BYD로, 전통의 수입차 강자인 도요타(1,015대)보다도 세 배 가까운 판매고를 올렸다. 테슬라와 BYD 두 브랜드의 판매량을 합치면 전체 수입차 시장의 약 45%에 달한다.</p>
<div class="article-img-wrap">
<img src="../images/byd_sealion7_rwd_front.webp" alt="BYD 씨라이언7 전측면, 실버 색상, 야외 전시 행사장" width="1600" height="1067" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ BYD 씨라이언7. 8월 국내 판매 819대를 기록하며 수입차 모델별 판매 상위권에 이름을 올렸다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. 모델별 톱5 중 절반이 중국산</h2>
<p><strong>모델 단위로 보면 상위권에서 중국산 비중은 더욱 두드러진다.</strong> 1위는 9,638대가 팔린 테슬라 모델Y였는데, 이 물량은 중국 상하이 기가팩토리에서 생산된 차량이다. 2위 BYD 돌핀(1,202대), 3위 BYD 씨라이언7(819대)에 이어, 4위 테슬라 모델3(693대) 역시 상하이 생산분이다. 5위는 BYD 씨라이언6 DM-i(500대)가 차지했다. 상위 5개 모델 가운데 사실상 전부가 중국에서 만들어진 차량인 셈이다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>2026년 8월 국내 수입차 모델별 판매 상위 5종</caption>
<thead>
<tr><th>순위</th><th>모델</th><th>판매대수</th><th>생산국</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>테슬라 모델Y</td><td>9,638대</td><td>중국(상하이)</td></tr>
<tr><td>2</td><td>BYD 돌핀</td><td>1,202대</td><td>중국</td></tr>
<tr><td>3</td><td>BYD 씨라이언7</td><td>819대</td><td>중국</td></tr>
<tr><td>4</td><td>테슬라 모델3</td><td>693대</td><td>중국(상하이)</td></tr>
<tr><td>5</td><td>BYD 씨라이언6 DM-i</td><td>500대</td><td>중국</td></tr>
</tbody>
</table>
</div>
<div class="info-box">
<p class="info-box-title">📍 상반기 중국산 수입차 41.2%까지 확대</p>
<p>올해 상반기 국내에 들어온 중국산 수입차는 79,444대로, 전년 동기 대비 127.8% 늘었다. 이는 전체 수입차 등록 대수의 41.2%에 해당하는 규모다. 테슬라 상하이 생산분과 BYD 물량이 늘어나면서, 국내 수입차 제조국 통계에서 중국이 차지하는 비중은 매 분기 빠르게 커지는 추세다.</p>
</div>

<!--AD-->

<h2 id="sec3">3. 왜 중국산이 강세인가 - 가격과 공급망</h2>
<p><strong>업계에서는 중국산 차량의 약진 배경으로 가격 경쟁력과 배터리 공급망을 꼽는다.</strong> 기사에서 구체적인 가격 수치가 제시되지는 않았지만, 관련 전문가는 "중국이 단순 제조를 담당하는 상황"이라고 짚었다. 테슬라가 상하이 기가팩토리를 아시아·유럽 시장 공급 거점으로 활용하는 것과 마찬가지로, BYD 역시 자국 내 배터리·부품 수직계열화를 기반으로 상대적으로 낮은 원가 구조를 국내 시장에 그대로 들여오고 있다는 분석이다. 8월 국내 전기차 등록은 15,183대였는데, 이 가운데 절반이 넘는 50.9%를 테슬라가 차지했다는 점도 전동화 전환과 중국산 확대가 맞물려 있음을 보여준다.</p>
<div class="article-img-wrap">
<img src="../images/byd_dolphin_lineup_rear.webp" alt="BYD 돌핀 후측면, 청록색, 독일 딜러 전시장에서 충전 중인 모습" width="1600" height="1080" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ BYD 돌핀. 8월 국내 판매 1,202대로 수입차 모델별 판매 2위에 올랐다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec4">4. 레거시 브랜드의 과제 - 소프트웨어와 자율주행</h2>
<p><strong>업계는 "기존 레거시 브랜드들은 자율주행과 소프트웨어로 앞서가야 하는 시기"라고 지적한다.</strong> 가격과 생산 단가에서 중국 브랜드를 단기간에 따라잡기 어려운 만큼, BMW·벤츠 등 기존 프리미엄 브랜드들은 결국 차량 소프트웨어 완성도와 운전자 보조·자율주행 기능의 격차로 승부를 볼 수밖에 없다는 진단이다. 실제로 BMW·벤츠 등은 최근 신차마다 대화형 인공지능 비서, 오버더에어(OTA) 업데이트, 고속도로 자율주행 기능을 앞세운 소프트웨어 중심 전략을 강조하는 추세다.</p>
<div class="checkpoint-box">
<p><strong>✅ 8월 수입차 판매, 이것만은 확인하세요</strong></p>
<p>· 브랜드별 1위 테슬라(10,400대), 2위 BMW(6,180대), 3위 벤츠(4,037대), 4위 BYD(3,002대)<br>· 모델별 톱5 중 4개가 중국 생산(모델Y·모델3·BYD 돌핀·씨라이언7·씨라이언6 DM-i)<br>· 상반기 중국산 수입차 79,444대, 전년비 127.8%↑, 전체 수입차의 41.2%<br>· 테슬라+BYD 합산 점유율 약 45%, 8월 전기차 등록 중 테슬라 50.9%<br>· 업계 진단은 "레거시 브랜드는 소프트웨어·자율주행으로 승부해야 하는 시기"</p>
</div>

<h2 id="sec5">5. 남은 변수 - 관세와 국산 브랜드의 대응</h2>
<p><strong>중국산 수입차의 성장세가 계속될지는 몇 가지 변수에 달려 있다.</strong> 미국을 중심으로 한 관세 정책 변화, 국내 정부의 중국산 전기차 보조금 기준 조정 여부, 그리고 현대차·기아 등 국내 브랜드의 가격·소프트웨어 대응 전략이 향후 시장 구도를 가를 핵심 변수로 꼽힌다. 관련 수치는 지피코리아 기사에서 확인할 수 있다. <a href="https://www.gpkorea.com/news/articleView.html?idxno=146478" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>
<div class="article-img-wrap">
<img src="../images/byd_seal_2023_shanghai.webp" alt="BYD 씰 전측면, 화이트 색상, 상하이 도로 위 주행 모습" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ BYD 씰이 중국 상하이 도로를 달리는 모습. BYD는 자국 내 배터리·부품 수직계열화를 앞세워 국내 시장에서도 가격 경쟁력을 유지하고 있다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>2026년 8월 국내 수입차 시장은 테슬라의 독주와 BYD의 약진 속에 중국산 차량이 판매 상위권을 사실상 장악하는 모습을 보였다. 모델별 톱5 중 4개가 중국에서 생산된 차량이었고, 상반기 중국산 수입차 비중은 41.2%까지 늘었다. 가격과 공급망에서 우위를 점한 중국 브랜드에 맞서, 기존 레거시 브랜드들은 결국 소프트웨어 완성도와 자율주행 경쟁력이라는 남은 승부처에서 격차를 벌려야 하는 상황에 놓였다.</p>
</div>
`
});

/* ============ 2. 부가티 리막, 마테 리막 친정 강화 ============ */
articles.push({
  slug: "bugatti-rimac-mate-rimac-independence-2026",
  headline: "포르쉐 그늘에서 벗어난 부가티 리막, '전기차 천재' 마테 리막 친정 강화",
  headlineShort: "포르쉐, 부가티 리막 지분 전량 매각… 마테 리막 경영권 강화",
  description: "포르쉐가 2026년 9월 9일 부가티 리막과 리막 그룹 지분을 미국 HOF캐피탈 컨소시엄에 전량 매각하며 5년 만에 손을 뗐다. 이로써 부가티는 폭스바겐그룹 산하에서 벗어나, '전기차 천재'로 불리는 마테 리막이 직접 부가티 자동차 사장을 겸임하며 경영권을 강화하게 됐다.",
  subtitle: "2021년 부가티와 리막이 합병해 출범한 부가티 리막이, 출범 5년 만에 대주주였던 포르쉐를 떠나보냈다. 포르쉐가 보유하던 지분 전량이 미국계 투자 컨소시엄으로 넘어가면서, 창업자 마테 리막이 부가티 경영 전면에 직접 나서게 됐다.",
  date: "2026-09-10",
  time: "11:40",
  sectionName: "수입차",
  sectionHref: "import.html",
  categoryLabel: "산업",
  categoryClass: "cat-gold",
  heroImage: "bugatti_tourbillon_front34.webp",
  heroAlt: "부가티 뚜르비옹 전측면, 하늘색 색상, 굿우드 페스티벌 오브 스피드 전시",
  heroCaption: "부가티의 차세대 플래그십 뚜르비옹. V16 기반 플러그인하이브리드로, 완전 전동화를 추구한 포르쉐와 전략 차이를 보여준 모델이기도 하다",
  tags: ["부가티리막", "마테리막", "포르쉐지분매각", "HOF캐피탈", "리막그룹"],
  categories: ["import"],
  badge: "산업",
  badgeClass: "cat-gold",
  dataSource: "오토헤럴드",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "오토헤럴드", url: "http://www.autoherald.co.kr/news/articleView.html?idxno=61574" },
    { name: "Porsche Newsroom", url: "https://newsroom.porsche.com/en/2026/company/porsche-bugatti-rimac-stakes-42221.html" },
    { name: "CNBC", url: "https://www.cnbc.com/2026/04/24/porsche-bugatti-bluefive-hof-capital-european-supercar-automakers.html" }
  ],
  body: `
<h2 id="sec1">1. 포르쉐, 부가티 리막 지분 전량 매각 완료</h2>
<p><strong>포르쉐가 2026년 9월 9일 부가티 리막과 리막 그룹에 보유하고 있던 지분을 모두 미국 HOF캐피탈 주도 컨소시엄에 매각하는 거래를 완료했다고 발표했다.</strong> 규제 당국의 승인을 거쳐 마무리된 이번 거래로 포르쉐는 부가티 리막 지분 45%와 리막 그룹 지분 20.6%를 모두 넘겼다. 거래 규모는 약 10억 유로(약 1조 6,000억 원)로, 이 가운데 2억 5,000만 유로는 포르쉐 그룹의 연금 재원 확충에 투입될 예정이다.</p>
<p>매각 계약 자체는 지난 4월 24일 체결됐고, 5개월가량의 절차를 거쳐 이번에 최종 완료됐다. 이번 지분 매각으로 포르쉐의 2026년 연간 자동차 부문 순현금흐름 마진 전망치도 기존 3~5%에서 5.5~7.5%로 상향 조정됐다.</p>
<div class="article-img-wrap">
<img src="../images/bugatti_veyron_164_front.webp" alt="부가티 베이론 16.4 전측면, 블랙 색상, 딜러십 앞 주차된 모습" width="1280" height="800" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 부가티의 상징과도 같은 베이론 16.4. 부가티는 이번 지분 매각으로 폭스바겐그룹 산하 시절을 공식적으로 마감했다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. 2021년 합작 출범부터 이번 매각까지</h2>
<p><strong>부가티 리막은 2021년, 포르쉐가 보유하던 부가티 지분과 크로아티아 전기 하이퍼카 업체 리막이 합쳐지며 출범했다.</strong> 당시 지분 구조는 리막 그룹이 55%, 포르쉐가 45%를 보유하는 형태였고, 포르쉐는 이와 별개로 모회사 격인 리막 그룹 자체 지분도 20.6% 들고 있었다. 부가티라는 100년 넘은 프랑스 럭셔리 브랜드와, 전기 하이퍼카 네베라로 이름을 알린 신생 스타트업 리막의 결합이라는 점에서 당시 업계의 관심을 모은 조합이었다.</p>
<div class="article-img-wrap">
<img src="../images/rimac_nevera_front34.webp" alt="리막 네베라 전측면, 화이트+네이비 색상, 굿우드 페스티벌 오브 스피드 전시" width="1600" height="877" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 리막의 순수전기 하이퍼카 네베라. 마테 리막이 이끈 리막 오토모빌리의 기술력을 상징하는 모델로, 2021년 부가티와의 합작 출범 배경이 됐다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>부가티 리막 지분 구조 변화</caption>
<thead>
<tr><th>구분</th><th>2021년 출범 당시</th><th>2026년 9월 이후</th></tr>
</thead>
<tbody>
<tr><td>부가티 리막 지분</td><td>리막그룹 55% / 포르쉐 45%</td><td>리막그룹 확대, 포르쉐 지분 소멸</td></tr>
<tr><td>리막 그룹 지분(포르쉐 보유분)</td><td>20.6%</td><td>HOF캐피탈 컨소시엄에 매각</td></tr>
<tr><td>부가티 자동차 대표</td><td>크리스토프 피오숑 사장</td><td>마테 리막 사장 겸임</td></tr>
<tr><td>거래 규모</td><td>-</td><td>약 10억 유로(약 1조 6,000억 원)</td></tr>
</tbody>
</table>
</div>

<!--AD-->

<h2 id="sec3">3. 왜 결별했나 - 폭스바겐그룹의 사정과 전략 차이</h2>
<p><strong>이번 매각의 배경에는 폭스바겐그룹 전반의 재무 상황과, 포르쉐·부가티 두 브랜드 사이의 전략적 방향 차이가 함께 작용했다.</strong> 폭스바겐그룹은 미국발 관세 리스크와 중국 시장 수요 둔화로 수익성이 눌리면서, 비핵심 자산을 정리해야 하는 압박을 받아왔다. 포르쉐 역시 전동화 투자에 대한 회수가 예상보다 더뎌지면서 자산 재조정에 나선 상태였다.</p>
<p>전략 측면에서도 두 브랜드는 다른 길을 걸었다. 포르쉐는 대량 양산 체제와 전동화 규제 대응에 무게를 둔 반면, 부가티는 V16 엔진 기반 플러그인하이브리드 하이퍼카 뚜르비옹을 밀어붙이며 완전 전동화와는 거리를 둔 독자 노선을 유지해왔다. 이 같은 방향 차이가 결국 지분 정리로 이어졌다는 것이 업계의 해석이다.</p>
<div class="info-box">
<p class="info-box-title">📍 참고로 알아두면 좋은 것</p>
<p>부가티는 2021년 포르쉐·리막 합작 이후에도 프랑스 몰샤임 공장에서 별도 생산 체제를 유지해왔다. 뚜르비옹은 V16 엔진에 3개의 전기모터를 결합한 플러그인하이브리드 하이퍼카로, 순수전기 하이퍼카였던 리막 네베라와는 파워트레인 철학 자체가 다르다. 이 차이가 그룹 내에서 두 브랜드의 정체성을 계속 구분 짓는 요인으로 작용해왔다.</p>
</div>

<h2 id="sec4">4. 마테 리막, 부가티 사장 겸임으로 경영권 강화</h2>
<p><strong>이번 지배구조 개편의 핵심은 창업자 마테 리막의 영향력 확대다.</strong> 그동안 부가티 자동차를 이끌어온 크리스토프 피오숑 사장이 물러나고, 마테 리막이 부가티 리막 최고경영자(CEO) 직함에 더해 부가티 자동차 사장직까지 직접 겸임하게 됐다. 리막 테크놀로지 최고운영책임자(COO)를 지낸 마르코 브르클랴치치는 부가티 리막의 새 COO로 합류한다.</p>
<p>마테 리막은 1988년생의 크로아티아 출신 발명가·기업가로, 2009년 자신의 첫 전기 레이싱카를 개발한 것을 시작으로 리막 오토모빌리를 창업했다. 이후 전기 하이퍼카 네베라로 세계적 주목을 받으며 '전기차 천재'라는 별칭을 얻었고, 2021년 부가티와의 합작 출범 당시부터 10개년 비전을 제시해온 인물이다. 이번 개편으로 그는 이 비전을 가속화하겠다는 방침을 밝혔다.</p>
<div class="article-img-wrap">
<img src="../images/mate_rimac_portrait.webp" alt="마테 리막이 마이크를 들고 발언하는 모습, 검정 재킷과 도트무늬 셔츠 차림" width="1280" height="1727" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 부가티 리막 CEO 마테 리막. 이번 지분 개편으로 부가티 자동차 사장직까지 겸임하며 경영권을 강화했다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec5">5. HOF캐피탈은 누구, 앞으로의 방향은</h2>
<p><strong>부가티 리막의 새 주인이 된 HOF캐피탈은 뉴욕에 본사를 둔 벤처캐피털로, 운용자산 규모가 약 120억 달러(약 16조 원)에 달한다.</strong> 이번 컨소시엄에서는 블루파이브캐피탈이 최대 출자자로 참여했고, 미국·유럽의 여러 기관투자자가 함께했다. HOF캐피탈은 부가티를 "첨단 복합 기술과 초호화 명품 가치가 결합된 프리미엄 테크 플랫폼"으로 평가하며, 향후 기업공개(IPO)나 기술 라이선스 사업을 통한 가치 창출을 목표로 하고 있다고 밝혔다.</p>
<p>마테 리막은 프랑스 몰샤임의 신규 생산시설 '라 메뉘팍튀르'를 본격 가동하고, V16 하이브리드 하이퍼카 뚜르비옹의 양산 체제를 갖추는 데 주력할 방침이다. 관련 소식은 부가티 뉴스룸에서 확인할 수 있다. <a href="https://newsroom.bugatti.com/press-releases/porsche-sells-stakes-in-bugatti-rimac-to-hof-capital-consortium-en" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>
<div class="checkpoint-box">
<p><strong>✅ 부가티 리막 지배구조 개편, 이것만은 확인하세요</strong></p>
<p>· 포르쉐, 부가티 리막 지분 45%·리막 그룹 지분 20.6% 전량 매각(2026년 9월 9일 완료)<br>· 매각 상대는 미국 HOF캐피탈 주도 컨소시엄(최대 출자자 블루파이브캐피탈), 거래 규모 약 1조 6,000억 원<br>· 크리스토프 피오숑 부가티 사장 퇴임, 마테 리막이 사장직 직접 겸임<br>· 배경은 폭스바겐그룹 비핵심자산 정리 압박 + 포르쉐·부가티 전략 방향 차이(완전전동화 vs V16 PHEV)<br>· 향후 몰샤임 신공장 '라 메뉘팍튀르' 가동, 뚜르비옹 양산·IPO 가능성 거론</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>부가티 리막의 이번 지배구조 개편은 단순한 지분 거래를 넘어, 완전 전동화를 지향한 포르쉐와 V16 하이브리드 독자 노선을 고집한 부가티 사이의 5년 묵은 방향 차이가 마침표를 찍은 사건으로 읽힌다. 크리스토프 피오숑의 퇴임과 마테 리막의 사장 겸임은 부가티가 폭스바겐그룹의 그늘에서 벗어나 창업자 중심 경영 체제로 재편됐음을 보여준다. HOF캐피탈이라는 새로운 자본 파트너를 맞은 부가티가 몰샤임 신공장 가동과 뚜르비옹 양산이라는 다음 단계를 어떻게 풀어갈지 주목된다.</p>
</div>
`
});

/* ============ 3. 포르쉐 플래그십 슈퍼카 ============ */
articles.push({
  slug: "porsche-flagship-supercar-ice-revival-2026",
  headline: "포르쉐, 13년 만 새 플래그십 슈퍼카 개발 '미션 X 대신 내연기관 급부상'",
  headlineShort: "포르쉐 새 플래그십 슈퍼카, 전기 대신 내연기관으로 방향 튼다",
  description: "포르쉐가 2013년 918 스파이더 이후 13년 만에 새로운 플래그십 슈퍼카 개발을 검토하고 있다. 당초 순수전기 하이퍼카 '미션 X'가 후속작으로 기대를 모았지만, 최근 포르쉐가 전동화 투자 속도를 조정하면서 아우디 누볼라리·람보르기니 테메라리오 기술을 공유하는 내연기관 기반 미드십 슈퍼카로 무게중심이 옮겨가는 모습이다.",
  subtitle: "맥라렌 W1, 페라리 F80과 경쟁할 차세대 플래그십으로 기대를 모았던 포르쉐 미션 X. 그러나 최근 포르쉐그룹 내부에서는 순수전기 대신 내연기관·하이브리드 기반의 새 슈퍼카 개발론이 힘을 얻고 있다.",
  date: "2026-09-10",
  time: "11:50",
  sectionName: "수입차",
  sectionHref: "import.html",
  categoryLabel: "산업",
  categoryClass: "cat-gold",
  heroImage: "porsche_918_spyder_front34.webp",
  heroAlt: "포르쉐 918 스파이더 전측면, 그레이 색상, 야외 주차된 모습",
  heroCaption: "2013년 출시된 포르쉐 918 스파이더. 포르쉐의 마지막 플래그십 하이퍼카로, 13년째 후속 모델 없이 자리를 지키고 있다",
  tags: ["포르쉐", "포르쉐미션X", "918스파이더", "아우디누볼라리", "람보르기니테메라리오"],
  categories: ["import"],
  badge: "산업",
  badgeClass: "cat-gold",
  dataSource: "오토헤럴드",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "오토헤럴드", url: "http://www.autoherald.co.kr/news/articleView.html?idxno=61562" },
    { name: "Carscoops", url: "https://www.carscoops.com/2026/09/porsche-supercar-plans/" },
    { name: "Motor1", url: "https://www.motor1.com/news/806540/porsche-hypercar-audi-nuvolari-based/" }
  ],
  body: `
<h2 id="sec1">1. 918 스파이더 이후 13년, 플래그십 슈퍼카 재추진</h2>
<p><strong>포르쉐가 2013년 918 스파이더를 마지막으로 13년째 비어 있는 브랜드 최상위 플래그십 슈퍼카 자리를 다시 채우기 위한 검토에 들어갔다.</strong> 미하엘 라이터스 포르쉐 최고경영자(CEO)는 최근 "현재 제품군에 지나치게 많은 파생 모델이 존재하고, 차종 사이에도 상당한 영역 중복이 있다"고 지적하며 전체 라인업 단순화를 추진하고 있다고 밝혔다. 플래그십 슈퍼카 프로젝트도 이 같은 라인업 재정비 작업의 연장선에서 논의되고 있는 것으로 전해진다.</p>
<div class="article-img-wrap">
<img src="../images/porsche_911_carrera_gts.webp" alt="포르쉐 911 카레라 GTS 전측면, 그레이 색상, 918 스파이더가 배경에 전시된 모습" width="1280" height="918" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 포르쉐 911 카레라 GTS. 새 플래그십 슈퍼카 논의와 별개로 911은 브랜드 핵심 모델로 유지되며 완전 전기차로 전환되지 않을 전망이다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. 미션 X, 순수전기 하이퍼카에서 방향 전환</h2>
<p><strong>당초 918 스파이더의 후속작으로 가장 유력했던 것은 2023년 IAA 뮌헨에서 공개된 순수전기 하이퍼카 콘셉트 '미션 X'였다.</strong> 미션 X는 900V 전기 아키텍처를 기반으로, 뉘르부르크링 노르트슐라이페에서 가장 빠른 양산차를 목표로 개발됐다. 무게 대비 출력비는 현행 911 GT3 RS를 웃도는 수준을 지향했고, 맥라렌 W1·페라리 F80 등 경쟁 하이퍼카들과 맞붙을 차세대 전동화 플래그십으로 기대를 모았다.</p>
<p>그러나 최근 포르쉐가 전기차 투자 속도를 조정하고, 상대적으로 수익성이 높은 내연기관·하이브리드 스포츠카에 무게를 두는 방향으로 전략을 선회하면서 미션 X의 양산 가능성은 낮아진 것으로 알려졌다.</p>
<div class="article-img-wrap">
<img src="../images/porsche_mission_x_iaa.webp" alt="포르쉐 미션 X 콘셉트카, 실버 색상, IAA 모빌리티 전시장에 전시된 모습" width="1600" height="1067" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 2023년 IAA 뮌헨에서 공개된 포르쉐 미션 X 콘셉트. 순수전기 하이퍼카로 기획됐지만 최근 양산 가능성이 낮아졌다는 평가가 나온다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<!--AD-->

<h2 id="sec3">3. 왜 전기에서 내연기관으로 - 수익성과 속도조절</h2>
<p><strong>포르쉐의 방향 전환은 전동화 전환 속도 조절이라는 업계 전반의 흐름과 맞닿아 있다.</strong> 완전히 새로운 전기 전용 플랫폼을 처음부터 개발하는 것보다, 검증된 내연기관·하이브리드 기술을 활용한 소량 생산 플래그십이 투자 대비 수익성 측면에서 유리하다는 판단이 작용한 것으로 풀이된다. 포르쉐 감독이사회는 여름 휴가 이후 이 프로젝트의 추진 여부를 최종 결정할 예정인 것으로 전해졌다.</p>
<div class="info-box">
<p class="info-box-title">📍 참고로 알아두면 좋은 것</p>
<p>포르쉐 918 스파이더는 4.6L V8 엔진에 두 개의 전기모터를 결합한 플러그인하이브리드 하이퍼카로, 2013년부터 2015년까지 총 918대 한정 생산됐다. 당시 페라리 라페라리, 맥라렌 P1과 함께 '홀리 트리니티'로 불리며 슈퍼카 업계에 하이브리드 시대를 연 모델로 평가받는다. 이후 13년간 포르쉐는 이 자리를 대체할 후속 플래그십을 내놓지 못했다.</p>
</div>

<h2 id="sec4">4. 아우디 누볼라리·람보르기니 테메라리오 - 플랫폼 공유 전략</h2>
<p><strong>새로운 전략의 핵심은 완전히 새로운 플랫폼 개발 대신, 폭스바겐그룹 내 기술 공유를 확대하는 방식이다.</strong> 포르쉐는 아우디의 한정판 슈퍼카 누볼라리와 람보르기니 테메라리오의 기술 기반을 활용한 미드십 슈퍼카 개발을 검토 중인 것으로 알려졌다. 람보르기니 테메라리오는 트윈터보 V8 엔진에 플러그인하이브리드 시스템을 결합한 모델로, 기존 V10 우라칸의 후속으로 2025년 출시됐다. 아우디는 올해 6월 이 테메라리오의 기술을 바탕으로 한 초한정판 누볼라리를 공개했는데, 트윈터보 4.0L V8과 3개의 액시얼 플럭스 전기모터를 결합해 합산 987마력을 낸다. 전 세계 생산량은 단 499대로 한정된다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>플랫폼 공유 후보 - 람보르기니 테메라리오 vs 아우디 누볼라리</caption>
<thead>
<tr><th>구분</th><th>람보르기니 테메라리오</th><th>아우디 누볼라리</th></tr>
</thead>
<tbody>
<tr><td>출시</td><td>2025년(우라칸 후속)</td><td>2026년 6월 공개, 499대 한정</td></tr>
<tr><td>파워트레인</td><td>트윈터보 4.0L V8 PHEV</td><td>트윈터보 4.0L V8 + 전기모터 3개</td></tr>
<tr><td>합산 출력</td><td>테메라리오 기반 수치</td><td>987마력</td></tr>
<tr><td>포르쉐와의 관계</td><td>미드십 슈퍼카 기술 기반 후보</td><td>플랫폼 공유 유력 후보</td></tr>
</tbody>
</table>
</div>
<p>이미 검증된 슈퍼카 플랫폼을 활용하면 개발 비용과 시간을 크게 단축할 수 있다는 점에서, 전통적으로 독자 플랫폼을 고집해온 포르쉐로서도 매력적인 선택지라는 평가다. 관련 소식은 오토헤럴드 기사에서 확인할 수 있다. <a href="http://www.autoherald.co.kr/news/articleView.html?idxno=61562" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>
<div class="article-img-wrap">
<img src="../images/lamborghini_temerario_front34.webp" alt="람보르기니 테메라리오 전측면, 연두색, 딜러 전시장 내부" width="1600" height="1067" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 람보르기니 테메라리오. 포르쉐 새 플래그십 슈퍼카가 이 차량과 아우디 누볼라리의 기술 기반을 공유할 가능성이 거론된다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec5">5. 전동화 속도조절 트렌드와 911의 자리</h2>
<p><strong>포르쉐의 이번 방향 전환은 최근 슈퍼카·하이퍼카 업계 전반에서 나타나는 전동화 속도조절 흐름과도 궤를 같이한다.</strong> 완전 전기 하이퍼카를 표방했던 브랜드들이 배터리 무게·주행거리·충전 인프라의 한계를 재확인하면서, 내연기관과 전기모터를 결합한 하이브리드 방식으로 회귀하는 사례가 늘고 있다. 포르쉐 역시 브랜드의 핵심 모델인 911을 완전 전기차로 전환하지 않고 내연기관·하이브리드 기반으로 유지하겠다는 방침을 재확인한 바 있어, 이번 플래그십 슈퍼카 논의도 이 같은 큰 흐름의 연장선으로 볼 수 있다.</p>
<div class="checkpoint-box">
<p><strong>✅ 포르쉐 새 플래그십 슈퍼카, 이것만은 확인하세요</strong></p>
<p>· 2013년 918 스파이더 이후 13년 만의 신규 플래그십 슈퍼카 검토<br>· 2023년 공개된 순수전기 하이퍼카 '미션 X' 양산 가능성은 낮아진 상태<br>· 아우디 누볼라리·람보르기니 테메라리오 기술 기반 미드십 슈퍼카로 방향 전환 검토<br>· 포르쉐 감독이사회, 여름 휴가 이후 프로젝트 추진 여부 최종 결정 예정<br>· 911은 브랜드 핵심 모델로 유지, 완전 전기차 전환 계획 없음</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>포르쉐의 새 플래그십 슈퍼카 프로젝트는 13년 만의 후속 하이퍼카라는 기대와 함께, 순수전기에서 내연기관·하이브리드로 방향을 되돌리는 상징적 사례로 주목받고 있다. 아우디 누볼라리·람보르기니 테메라리오와의 플랫폼 공유를 통해 개발 비용과 시간을 줄이려는 전략은, 완전 전동화 속도를 조절하고 있는 최근 슈퍼카 업계 전반의 흐름과도 맞닿아 있다. 감독이사회의 최종 결정이 나오기까지는 시간이 남았지만, 918 스파이더의 후계자가 전기 대신 엔진 소리를 내며 등장할 가능성이 한층 높아진 모습이다.</p>
</div>
`
});

const outPath = path.join(__dirname, 'spec_wave2_g6.json');
fs.writeFileSync(outPath, JSON.stringify(articles, null, 2), 'utf8');
console.log('written', outPath, articles.length, 'articles');
