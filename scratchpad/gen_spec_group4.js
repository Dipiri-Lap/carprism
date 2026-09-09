const fs = require('fs');
const path = require('path');

const articles = [];

/* ============ 1. Genesis option delivery delay ============ */
articles.push({
  slug: "genesis-magma-paint-inspection-delay-2026",
  headline: "\"옵션 하나 더했을 뿐인데 두 달\"... 제네시스, 고가 트림일수록 늦게 온다",
  headlineShort: "제네시스 고급옵션, 출고 지연의 역설",
  description: "제네시스 SUV·세단 기본 사양은 계약 후 1개월이면 출고되지만, 무광 컬러나 고성능 마그마 트림 등 특화 옵션을 고르면 전용 도장·검수 공정이 추가되며 대기 기간이 최대 2개월 이상으로 늘어난다. 최고가 트림일수록 오히려 늦게 받는 역설적 상황에, 연내 인도를 노리는 소비자들의 옵션 선택 고민이 깊어지고 있다.",
  subtitle: "제네시스가 9월을 \"연내 신차 인도의 골든타임\"으로 안내하고 나섰지만, 정작 고가 옵션을 고를수록 출고는 더 늦어지는 역설이 확인됐다. 도장과 검수 공정이 추가되는 마그마·무광 컬러 사양이 대표적이다.",
  date: "2026-09-09",
  time: "10:30",
  sectionName: "뉴스",
  sectionHref: "news.html",
  categoryLabel: "이슈",
  categoryClass: "cat-genesis",
  heroImage: "genesis_gv60_magma_orange_front.webp",
  heroAlt: "제네시스 GV60 마그마 전측면, 마그마 오렌지 단색 외장",
  heroCaption: "도장 2주, 전용 검사 3주가 추가되는 제네시스 GV60 마그마. 유광 컬러 기준으로도 출고까지 2개월 이상 걸린다",
  tags: ["제네시스", "GV60마그마", "출고지연", "신차대기기간", "제네시스GV70"],
  categories: ["news"],
  badge: "이슈",
  badgeClass: "cat-genesis",
  dataSource: "오토트리뷴",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "오토트리뷴", url: "https://www.autotribune.co.kr/news/articleView.html?idxno=45325" },
    { name: "오토트리뷴", url: "https://www.autotribune.co.kr/news/articleView.html?idxno=45326" }
  ],
  body: `
<h2 id="sec1">1. "기본은 1개월"... 그런데 마그마는 왜 두 달이 넘을까</h2>
<p><strong>제네시스가 9월을 "연내 신차 인도의 골든타임"으로 내세우며 빠른 출고를 강조하고 나섰지만, 정작 소비자가 어떤 옵션을 고르느냐에 따라 대기 기간이 크게 갈리는 것으로 확인됐다.</strong> G80·GV80 등 볼륨 모델의 가솔린 기본 사양은 계약 후 1개월(3~4주)이면 출고가 가능하다. 특히 즉시 출고가 가능한 선배정 물량도 상당해, 이를 활용하면 1주일 이내 인도도 가능하다는 것이 딜러들의 공통된 설명이다.</p>
<p>문제는 여기서부터다. 무광 컬러, 2륜구동, 스포츠 트림, 그리고 브랜드 최초의 고성능 서브 브랜드 '마그마' 트림 등 조금이라도 특화된 옵션을 얹는 순간 전용 도장 라인과 별도 품질 검수 공정이 추가로 투입되며 출고일이 뒤로 밀리기 시작한다.</p>
<div class="article-img-wrap">
<img src="../images/genesis_gv60_magma_orange_front.webp" alt="제네시스 GV60 마그마 전측면, 마그마 오렌지 단색 외장" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 제네시스 브랜드 최초의 고성능 트림 GV60 마그마. 마그마 오렌지 색상은 전용 도장 공정을 거친다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. 차종·옵션별 대기 기간, 이만큼 차이 난다</h2>
<p><strong>실제로 차종과 트림별 출고 대기 기간을 비교해보면 격차가 뚜렷하다.</strong> 선배정 물량은 G80 약 3,000대, GV80 약 1,300대, GV70 약 1,600대 수준으로 파악됐다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>제네시스 차종·옵션별 출고 대기 기간(2026년 9월 기준)</caption>
<thead>
<tr><th>차종/트림</th><th>대기 기간</th><th>비고</th></tr>
</thead>
<tbody>
<tr><td>G80·GV80(GV80쿠페 포함) 기본 가솔린</td><td>1개월(3~4주)</td><td>선배정 물량 활용 시 1주 이내도 가능</td></tr>
<tr><td>GV70 가솔린·EV 기본 사양</td><td>1개월</td><td>선배정 물량 약 1,600대</td></tr>
<tr><td>GV70 무광 컬러·2WD·스포츠 트림</td><td>기본+2주 이상</td><td>전용 도장 라인, 파츠 장착 공정 추가</td></tr>
<tr><td>GV60 마그마(유광 컬러)</td><td>2개월 이상</td><td>도장 2주+전용 성능검사 3주 추가</td></tr>
<tr><td>G90 블랙 에디션</td><td>기본 대비 지연</td><td>다크 틴트 크롬 등 전용 부품 수급·검수 추가</td></tr>
</tbody>
</table>
</div>
<div class="article-img-wrap">
<img src="../images/genesis_gv70_ceres_blue_matte.webp" alt="제네시스 GV70 세레스 블루 무광 색상, 측면" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 무광(매트) 컬러를 고른 제네시스 GV70. 무광 도장은 전용 건조 공정이 필요해 기본 사양보다 최소 2주가 더 걸린다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<!--AD-->

<h2 id="sec3">3. 왜 옵션 하나에 몇 주씩 늘어나나</h2>
<p><strong>지연의 핵심은 도장과 검수 공정에 있다.</strong> 무광 컬러는 유광 도장과는 전혀 다른 도료와 건조 조건을 필요로 해, 전용 도장 부스와 별도의 건조 시간이 추가로 소요된다. GV60 마그마처럼 고성능 서브 브랜드 모델은 여기에 더해 일반 모델에는 없는 전용 성능 검사 단계까지 거쳐야 한다. 업계 관계자는 "개인 맞춤형 특화 사양이 추가될수록 공정이 세분화되어 대기 기간이 늘어난다"고 설명했다.</p>
<p>G90 블랙 에디션 역시 다크 틴트 크롬 외장, 전용 휠과 내장재가 적용되면서 전용 부품 수급과 품질 검수 단계에서 생산 공정이 추가돼 기본 모델 대비 크게 지연되는 것으로 나타났다.</p>
<div class="article-img-wrap">
<img src="../images/genesis_g90_black_vikblack.webp" alt="제네시스 G90 블랙 에디션, 빅 블랙 색상, 정측면" width="1280" height="960" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 다크 틴트 크롬과 전용 내장재가 적용된 제네시스 G90 블랙 에디션. 전용 부품 수급 탓에 기본 모델보다 출고가 늦어진다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<div class="info-box">
<p class="info-box-title">📍 '선배정 물량'이란</p>
<p>선배정 물량은 제조사가 특정 사양을 미리 예측해 생산해 둔 뒤, 계약 시점에 재고를 바로 배정하는 방식을 말한다. G80·GV80·GV70처럼 대중적인 기본 사양은 선배정 물량이 두텁게 마련돼 있어 1주일 이내 출고도 가능하지만, 마그마나 블랙 에디션처럼 소비자 취향이 갈리는 특화 사양은 통상 주문 후 생산(BTO) 방식으로 진행되기 때문에 대기 기간이 길어질 수밖에 없다.</p>
</div>

<h2 id="sec4">4. 9월은 "연내 인도와 이월을 가르는 골든타임"</h2>
<p><strong>제네시스 안팎에서는 9월을 연내 신차 인도가 가능한 사실상 마지막 기회로 보고 있다.</strong> 지금 계약해도 옵션 조합에 따라 최소 1개월에서 최대 2개월 이상이 걸리는 만큼, 특화 사양을 원하는 소비자가 9월을 넘겨 계약하면 연내 인도가 사실상 불가능해지고 해를 넘겨 이월될 가능성이 커진다는 것이다. 실제로 GV80은 9월 중순 2027년형 출시를 앞두고 있어 생산 라인 재편에 따른 추가 변수도 있다.</p>

<h2 id="sec5">5. 옵션 조합, 계약 전 반드시 계산해야 한다</h2>
<p><strong>결국 소비자 입장에서는 "얼마나 빨리 받고 싶은가"와 "어떤 옵션을 원하는가" 사이에서 선택이 필요하다.</strong> 연내 인도가 최우선이라면 유광 컬러와 기본 트림 위주의 실속형 계약이 유리하고, 무광 컬러나 마그마·블랙 에디션 같은 특화 사양을 포기할 수 없다면 2개월 이상의 대기를 감수해야 한다. 딜러들은 "옵션 조합에 따른 세심한 납기 계산이 필수적"이라고 입을 모은다. 관련 소식은 오토트리뷴에서 확인할 수 있다. <a href="https://www.autotribune.co.kr/news/articleView.html?idxno=45325" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>
<div class="checkpoint-box">
<p><strong>✅ 제네시스 계약 전, 이것만은 확인하세요</strong></p>
<p>· G80·GV80·GV70 기본 사양은 1개월, 선배정 물량 활용 시 1주 이내 출고도 가능<br>· 무광 컬러·2WD·스포츠 트림은 기본 대비 최소 2주 추가<br>· GV60 마그마는 도장 2주+검사 3주로 2개월 이상 소요<br>· G90 블랙 에디션은 전용 부품 수급으로 별도 지연<br>· 연내 인도를 원한다면 9월 계약이 사실상 마지막 기회</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>제네시스의 출고 지연 현상은 아이러니하게도 "더 비싸고 특별한 옵션을 고를수록 더 오래 기다려야 한다"는 역설을 보여준다. 기본 사양은 1개월이면 충분하지만, 마그마나 무광 컬러, 블랙 에디션처럼 개인 맞춤형 요소가 들어갈수록 도장과 검수 공정이 늘어나며 대기 기간이 2개월 이상으로 불어난다. 연내 인도를 원하는 소비자라면 9월 계약 시점부터 옵션 조합별 예상 납기를 꼼꼼히 따져보는 것이 좋다.</p>
</div>
`
});

/* ============ 2. Global EV sales ranking ============ */
articles.push({
  slug: "global-ev-sales-ranking-2026-hyundai-8th",
  headline: "\"1위는 역시 중국\"... 현대차그룹, 세계 전기차 순위 한 계단 밀렸다",
  headlineShort: "현대차그룹 전기차 순위 8위로 하락, 중국 6곳 톱10",
  description: "SNE리서치가 2026년 1~7월 글로벌 전기차(BEV+PHEV) 인도량을 집계한 결과, 전 세계 인도량은 1,180만대로 전년 대비 6.3% 증가했다. 현대차그룹은 44만2천대(+24.2%)를 인도하며 점유율을 3.7%까지 끌어올렸지만, 중국 체리자동차에 2만6천대 차이로 밀리며 순위는 지난해 7위에서 8위로 한 계단 내려앉았다. 상위 10개 그룹 중 6곳이 중국 업체로 채워지며 중국계 브랜드의 강세가 두드러졌다.",
  subtitle: "세계 전기차 시장이 올해도 두 자릿수에 육박하는 성장세를 이어가는 가운데, 순위표의 색깔은 점점 더 중국계로 물들고 있다. 현대차그룹은 시장 평균을 훌쩍 뛰어넘는 성장률을 기록하고도 순위가 밀리는 이변을 겪었다.",
  date: "2026-09-09",
  time: "10:40",
  sectionName: "전기차",
  sectionHref: "electric.html",
  categoryLabel: "시장동향",
  categoryClass: "cat-ev",
  heroImage: "hyundai_ioniq5_gravity_gold.webp",
  heroAlt: "현대 아이오닉5 그래비티 골드 무광 색상, 정측면",
  heroCaption: "현대차그룹은 2026년 1~7월 44만2천대의 전기차를 인도하며 24.2% 성장했지만, 순위는 8위로 한 계단 내려앉았다",
  tags: ["전기차판매순위", "현대차그룹", "SNE리서치", "BYD", "중국전기차"],
  categories: ["electric"],
  badge: "시장동향",
  badgeClass: "cat-ev",
  dataSource: "지피코리아",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "지피코리아", url: "https://www.gpkorea.com/news/articleView.html?idxno=146534" }
  ],
  body: `
<h2 id="sec1">1. 1,180만대... 전기차 시장은 또 성장했다</h2>
<p><strong>글로벌 시장조사업체 SNE리서치가 9월 8일 발표한 자료에 따르면, 2026년 1~7월 전 세계 전기차(BEV+PHEV) 인도량은 1,180만 대로 전년 동기 대비 6.3% 증가했다.</strong> 완성차 그룹별 순위표를 들여다보면 상위권 지형이 빠르게 바뀌고 있는 것이 눈에 띈다. 1위는 여전히 중국 BYD가 지켰지만, 인도량 자체는 181만6천대로 전년 대비 17.9% 줄며 성장세가 한풀 꺾였다. 반면 2위 지리(지리그룹)는 117만2천대를 기록하며 맹추격에 나섰고, 3위 테슬라는 94만3천대(+12.8%)로 뒤를 이었다.</p>

<h2 id="sec2">2. 글로벌 전기차 그룹 순위 TOP 10</h2>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>2026년 1~7월 글로벌 전기차(BEV+PHEV) 그룹별 인도량(SNE리서치)</caption>
<thead>
<tr><th>순위</th><th>그룹</th><th>인도량</th><th>전년비</th></tr>
</thead>
<tbody>
<tr><td>1위</td><td>BYD(중국)</td><td>181만 6,000대</td><td>-17.9%</td></tr>
<tr><td>2위</td><td>지리(중국)</td><td>117만 2,000대</td><td>-</td></tr>
<tr><td>3위</td><td>테슬라(미국)</td><td>94만 3,000대</td><td>+12.8%</td></tr>
<tr><td>4위</td><td>폭스바겐그룹(독일)</td><td>-</td><td>-</td></tr>
<tr><td>5위</td><td>SAIC(중국)</td><td>-</td><td>-</td></tr>
<tr><td>7위</td><td>체리자동차(중국)</td><td>46만 8,000대</td><td>+34.2%</td></tr>
<tr><td>8위</td><td>현대차그룹(한국)</td><td>44만 2,000대</td><td>+24.2%</td></tr>
<tr><td>9위</td><td>립모터(중국)</td><td>41만 8,000대</td><td>+67.1%</td></tr>
<tr><td>10위</td><td>창안자동차(중국)</td><td>-</td><td>-</td></tr>
</tbody>
</table>
</div>
<p>* 4·5·6·10위 그룹의 세부 인도량은 SNE리서치 원자료 기준 비공개, 순위만 확인 가능</p>

<!--AD-->

<h2 id="sec3">3. 24.2% 성장하고도 밀린 현대차그룹, 왜?</h2>
<p><strong>현대차그룹은 1~7월 44만2천대를 인도해 전년 동기 대비 24.2% 증가했고, 점유율도 3.2%에서 3.7%로 끌어올렸다.</strong> 시장 평균 성장률(6.3%)의 네 배 가까운 성장세다. 그럼에도 순위는 지난해 7위에서 올해 8위로 한 계단 내려앉았는데, 원인은 중국 체리자동차의 폭발적인 성장이다. 체리는 46만8천대(+34.2%)를 인도하며 현대차그룹을 2만6천대 차이로 앞질렀다. 성장률 자체는 현대차그룹도 높은 편이지만, 체리의 성장 속도를 따라잡기에는 역부족이었던 셈이다.</p>
<div class="article-img-wrap">
<img src="../images/genesis_gv60_uyuni_white.webp" alt="제네시스 GV60 우유니 화이트 색상, 정측면" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 현대차그룹의 전기차 인도량에는 현대차·기아뿐 아니라 제네시스 GV60 등 고급 브랜드 EV도 포함된다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<div class="info-box">
<p class="info-box-title">📍 인도량(Delivery) 집계 기준</p>
<p>SNE리서치를 비롯한 시장조사업체들은 완성차 업체의 '판매(Sales)'가 아닌 '인도(Delivery)' 대수를 기준으로 순위를 집계하는 경우가 많다. 공장 출하량이 아니라 실제 소비자에게 전달된 대수를 기준으로 하기 때문에, 물류·통관 일정에 따라 월별 편차가 발생할 수 있다는 점을 참고할 필요가 있다.</p>
</div>

<h2 id="sec4">4. 톱10 중 6곳이 중국... 흔들리는 시장 지형</h2>
<p><strong>이번 순위에서 가장 눈에 띄는 대목은 상위 10개 그룹 중 6개가 중국 업체로 채워졌다는 점이다.</strong> BYD·지리·SAIC·창안·체리·립모터가 모두 이름을 올렸다. 배터리 공급망부터 완성차 생산까지 수직계열화를 갖춘 중국 업체들이 가격 경쟁력을 앞세워 자국 시장은 물론 해외 시장까지 빠르게 잠식하고 있다는 분석이다. 특히 립모터는 41만8천대로 전년 대비 67.1% 급증하며 톱10 중 가장 높은 성장률을 기록했다.</p>
<div class="article-img-wrap">
<img src="../images/byd_seal_2023_shanghai.webp" alt="BYD 씰 전측면, 상하이 촬영" width="1280" height="960" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ BYD의 중형 전기 세단 씰(Seal). BYD는 올해도 글로벌 전기차 그룹 순위 1위를 지켰다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec5">5. 성장 둔화 속 유럽 급등, 북미는 뒷걸음질</h2>
<p><strong>지역별로 보면 명암이 뚜렷하다.</strong> 세계 최대 시장인 중국은 636만6천대(-8.2%)로 다소 주춤했지만 여전히 전체의 54.0%를 차지하는 절대 강자다. 반면 유럽은 296만6천대(+29.2%)로 가파르게 성장했고, 중국을 제외한 아시아 지역도 111만4천대(+77.0%)로 폭발적인 증가세를 보였다. 관세 리스크와 보조금 축소 여파가 겹친 북미는 79만대(-22.7%)로 역성장했다.</p>
<div class="article-img-wrap">
<img src="../images/kia_ev6_gtline_white.webp" alt="기아 EV6 GT-라인 스노우 화이트 펄, 전측면" width="1280" height="960" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 기아 EV6. 현대차그룹은 아이오닉·EV·GV 등 세 브랜드에 걸친 전동화 라인업으로 글로벌 순위 상위권을 유지하고 있다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>보다 자세한 순위와 데이터는 지피코리아 기사에서 확인할 수 있다. <a href="https://www.gpkorea.com/news/articleView.html?idxno=146534" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>
<div class="checkpoint-box">
<p><strong>✅ 2026년 상반기 글로벌 전기차 순위, 이것만은 확인하세요</strong></p>
<p>· 1~7월 전 세계 전기차 인도량 1,180만대(+6.3%), SNE리서치 집계<br>· BYD 1위(181만6천대) 유지하나 전년비 -17.9%로 성장세 둔화<br>· 현대차그룹 44만2천대(+24.2%)로 성장했지만 순위는 7위→8위로 하락<br>· 체리자동차에 2만6천대 차이로 밀림, 상위 10곳 중 6곳이 중국 업체<br>· 유럽 +29.2%로 급성장, 북미는 -22.7%로 역성장</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>2026년 상반기 글로벌 전기차 시장은 여전히 성장세를 이어갔지만, 그 성장의 무게중심은 갈수록 중국 쪽으로 쏠리고 있다. 현대차그룹은 시장 평균을 훌쩍 뛰어넘는 24.2% 성장률을 기록하고도 체리자동차에 밀려 순위가 한 계단 내려앉았다는 점은 역설적이다. 상위 10개 그룹 중 6곳이 중국 업체로 채워진 지금, 현대차그룹이 성장률을 넘어 순위 자체를 지켜낼 수 있을지가 하반기 관전 포인트로 떠오르고 있다.</p>
</div>
`
});

/* ============ 3. Small-battery EV regret trend ============ */
articles.push({
  slug: "ev-small-battery-regret-trend-2026",
  headline: "\"400만원 아꼈다가 뒤통수\"... 소용량 배터리 전기차, 왜 후회로 남나",
  headlineShort: "소용량 배터리 전기차 싸다고 샀다가 후회하는 이유",
  description: "소용량 배터리를 탑재한 전기차는 구매가를 400만~500만원 낮출 수 있지만, 장기 보유 시 배터리 열화 속도가 대용량 모델보다 최대 2배 빠르고 중고 판매가도 크게 떨어지는 것으로 나타났다. 실사용 불편과 총소유비용(TCO) 손해까지 고려하면, 눈앞의 가격표만 보고 소용량 배터리를 택했다가 뒤늦게 후회하는 사례가 늘고 있다.",
  subtitle: "전기차 구매 상담에서 빠지지 않는 질문, \"배터리는 큰 게 좋을까 작은 게 좋을까.\" 초기 구매가를 아끼려 소용량 배터리를 택한 소비자들 사이에서 \"그때는 몰랐다\"는 후회가 나오는 이유를 짚어봤다.",
  date: "2026-09-09",
  time: "10:50",
  sectionName: "전기차",
  sectionHref: "electric.html",
  categoryLabel: "구매가이드",
  categoryClass: "cat-ev",
  heroImage: "hyundai_casper_electric_silver.webp",
  heroAlt: "현대 캐스퍼 일렉트릭 실버 색상, 전측면",
  heroCaption: "소용량 배터리를 탑재해 상대적으로 저렴한 가격에 출시된 현대 캐스퍼 일렉트릭. 초기 구매가는 낮지만 장기 보유 시 고려할 점이 많다",
  tags: ["전기차구매가이드", "소용량배터리", "배터리열화", "전기차중고차", "EV트렌드"],
  categories: ["electric"],
  badge: "구매가이드",
  badgeClass: "cat-ev",
  dataSource: "오토헤럴드",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "오토헤럴드", url: "http://www.autoherald.co.kr/news/articleView.html?idxno=61527" }
  ],
  body: `
<h2 id="sec1">1. "400만원 아꼈다"... 소용량 배터리가 매력적이었던 이유</h2>
<p><strong>전기차 구매를 고민하는 소비자들에게 소용량 배터리 트림은 꽤 매력적인 선택지로 다가온다.</strong> 같은 차종이라도 배터리 용량을 낮추면 차량 가격을 400만~500만원가량 낮출 수 있기 때문이다. 보조금 문턱을 넘기 위해, 혹은 단순히 초기 부담을 줄이기 위해 소용량 배터리를 택하는 소비자가 적지 않다. 문제는 이 선택이 몇 년 뒤 예상치 못한 대가로 돌아올 수 있다는 점이다.</p>
<p>도심 단거리 출퇴근 용도로만 차를 쓴다면 큰 문제가 없을 수 있지만, 장거리 주행이 잦거나 오래 탈 계획이라면 이야기가 달라진다. 실제 데이터로 확인된 소용량 배터리의 약점을 짚어봤다.</p>

<h2 id="sec2">2. 배터리가 작을수록 더 혹사당하는 이유</h2>
<p><strong>소용량 배터리는 같은 거리를 주행하는 동안 대용량 배터리보다 훨씬 더 많은 충방전 사이클을 소화해야 한다.</strong> 80kWh급 대용량 배터리로 15만km를 주행하면 완충-완방 사이클이 약 350~400회 발생하는 반면, 40kWh급 소용량 배터리는 같은 거리에서 750~800회 이상의 사이클을 겪는다. 배터리 셀이 물리적으로 피로해지는 속도가 2배 이상 빠르다는 뜻이다.</p>
<p>고부하 스트레스도 문제다. 동일한 100kW급 모터 출력을 낼 때 80kWh 팩은 1.25C 수준으로 방전하지만, 40kWh 팩은 2.5C에 달하는 고부하 방전을 감당해야 한다. 이 과정에서 셀 내부 발열과 저항이 급증하고, 음극 표면 손상(리튬 석출)과 전해액 분해가 더 빠르게 진행된다는 것이 배터리 진단 업계의 설명이다.</p>

<!--AD-->

<h2 id="sec3">3. 실측 데이터로 확인된 격차 — 닛산 리프 vs 아이오닉5</h2>
<p><strong>글로벌 배터리 진단 기업 아빌루(AVILOO)가 50만 건 이상의 데이터를 분석한 결과는 이 격차를 숫자로 보여준다.</strong> 40kWh 배터리를 탑재한 닛산 리프(ZE1)는 누적 주행 5만km 시점부터 배터리 잔존수명(SoH)이 91.1%로 떨어지기 시작했고, 15만km에는 86.3%까지 하락했다. 신차 당시 200km대 중반이던 실주행거리도 180km대로 눈에 띄게 줄었다.</p>
<p>반면 72.6kWh 대용량 배터리와 수랭식 열관리 시스템을 갖춘 현대 아이오닉5는 15만km 주행 후에도 92.8%의 SoH를 유지했다. 같은 거리를 달렸는데도 배터리 건강 상태에서 6%p 이상 차이가 벌어진 셈이다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>소용량 vs 대용량 배터리 전기차 비교(15만km 주행 기준)</caption>
<thead>
<tr><th>구분</th><th>소용량(40kWh급, 닛산 리프)</th><th>대용량(72.6kWh급, 아이오닉5)</th></tr>
</thead>
<tbody>
<tr><td>완충-완방 사이클</td><td>750~800회 이상</td><td>350~400회</td></tr>
<tr><td>동일 출력 시 방전 부하</td><td>약 2.5C(고부하)</td><td>약 1.25C</td></tr>
<tr><td>냉각 방식</td><td>공랭식 등 단순 냉각 구조</td><td>액체 냉각(수랭식)</td></tr>
<tr><td>15만km 후 SoH</td><td>86.3%</td><td>92.8%</td></tr>
<tr><td>구매 시 절감액</td><td>약 400만~500만원</td><td>-</td></tr>
</tbody>
</table>
</div>
<div class="article-img-wrap">
<img src="../images/hyundai_ioniq5_atlas_white.webp" alt="현대 아이오닉5 아틀라스 화이트 무광 색상, 정측면" width="1280" height="960" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 72.6kWh 대용량 배터리와 수랭식 열관리를 갖춘 현대 아이오닉5는 15만km 주행 후에도 92.8%의 SoH를 유지했다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<div class="info-box">
<p class="info-box-title">📍 SoH(State of Health, 배터리 잔존수명)란</p>
<p>SoH는 배터리가 신품 대비 얼마나 성능을 유지하고 있는지를 백분율로 나타낸 지표다. SoH 100%는 신품 상태를, SoH가 낮아질수록 배터리의 실제 사용 가능 용량과 출력이 줄어든다는 뜻이다. 배터리관리시스템(BMS)은 SoH가 일정 수준 이하로 떨어지면 급속충전 속도를 강제로 제한하는 등 배터리 보호 모드에 들어가기도 한다.</p>
</div>

<h2 id="sec4">4. 충전 횟수 증가, 그리고 중고차 가치 폭락</h2>
<p><strong>배터리 용량이 작으면 한 번 충전으로 갈 수 있는 거리가 짧아 충전 횟수 자체가 늘어나고, 이는 다시 추가적인 배터리 노화로 이어지는 악순환을 만든다.</strong> 배터리 잔존용량이 70~80% 이하로 떨어지면 급가속 시 눈에 띄는 전압 강하가 발생하고, BMS가 급속충전 속도를 강제로 제한하는 '수명 종료(EOL)' 단계에 가까워진다. 겨울철에는 이런 증상이 더욱 두드러져, 안내된 주행가능거리와 실제 주행거리의 괴리를 체감하는 운전자가 많다.</p>
<p>더 뼈아픈 대목은 중고차 시장이다. 배터리는 중고 전기차 잔존가치의 절반 이상을 결정짓는 핵심 고가 부품이다. 구매 당시 소용량 배터리로 아낀 400만~500만원은, 5년 이상 장기 보유하거나 중고로 되팔 때 배터리 열화에 따른 감가상각 폭탄으로 되돌아올 수 있다는 것이 업계의 지적이다.</p>
<div class="article-img-wrap">
<img src="../images/nissan_leaf_white_front.webp" alt="닛산 리프 화이트 색상, 전측면" width="1280" height="820" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 40kWh 소용량 배터리를 탑재한 닛산 리프(ZE1). 실측 데이터에서 대용량 배터리 모델보다 빠른 열화 속도가 확인됐다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<div class="article-img-wrap">
<img src="../images/ev_charging_station_gwangju_restarea.webp" alt="경기광주휴게소 전기차 충전소 전경" width="1280" height="1707" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 소용량 배터리 전기차는 주행가능거리가 짧아 충전소를 찾는 빈도 자체가 늘어난다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec5">5. 후회하지 않으려면... 구매 전 체크포인트</h2>
<p><strong>결국 관건은 가격표가 아니라 '나의 운행 패턴'이다.</strong> 도심 단거리 출퇴근 위주로만 차량을 쓰고 짧은 보유 기간 후 처분할 계획이라면 소용량 배터리도 합리적인 선택이 될 수 있다. 반대로 장거리 주행이 잦거나 5년 이상 오래 탈 계획이라면, 초기 구매가가 다소 높더라도 대용량·수랭식 배터리를 택하는 편이 총소유비용(TCO) 관점에서 유리하다는 것이 전문가들의 공통된 조언이다. 관련 내용은 오토헤럴드 기사에서 확인할 수 있다. <a href="http://www.autoherald.co.kr/news/articleView.html?idxno=61527" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>
<div class="checkpoint-box">
<p><strong>✅ 소용량 배터리 전기차, 구매 전 이것만은 확인하세요</strong></p>
<p>· 소용량 배터리는 동일 거리 주행 시 충방전 사이클이 2배 이상 많아 열화가 빠름<br>· 40kWh급 리프는 15만km 시점 SoH 86.3%, 72.6kWh급 아이오닉5는 92.8%<br>· 냉각 방식(공랭 vs 수랭)이 장기 내구성을 크게 좌우<br>· 도심 단거리·단기 보유라면 소용량도 합리적, 장거리·장기 보유라면 대용량 권장<br>· 중고 판매 계획이 있다면 배터리 용량이 잔존가치에 미치는 영향을 반드시 검토</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>소용량 배터리 전기차는 눈앞의 가격표만 보면 합리적인 선택처럼 보이지만, 실제로는 더 많은 충방전 사이클과 고부하 스트레스를 견뎌야 해 열화 속도가 대용량 모델보다 최대 2배 이상 빠르다. 닛산 리프와 아이오닉5의 실측 SoH 비교는 이 차이를 명확한 숫자로 보여준다. 400만~500만원을 아끼려다 중고차 시세에서 그 이상을 잃을 수 있는 만큼, 자신의 운행 패턴과 보유 계획을 먼저 따져보는 것이 후회 없는 전기차 구매의 첫걸음이다.</p>
</div>
`
});

const outPath = path.join(__dirname, 'spec_group4.json');
fs.writeFileSync(outPath, JSON.stringify(articles, null, 2), 'utf8');
console.log('written', outPath, articles.length, 'articles');
