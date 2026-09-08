const fs = require('fs');
const path = require('path');

const article1 = {
  slug: "mercedes-amg-c-class-ev-spy-2026",
  headline: "\"리어윙까지 달았다\"… 전기 AMG C클래스, BMW 첫 전기 M3와 맞대결 예고",
  headlineShort: "전기 AMG C클래스, 리어윙 장착 포착",
  description: "메르세데스-AMG의 순수전기 C클래스 프로토타입이 팝업식 리어 스포일러를 단 채 포착됐다. 778마력 안팎으로 추정되는 이 모델은 2027년 출시돼 BMW의 첫 전기 M3와 정면 대결을 벌일 전망이다.",
  subtitle: "메르세데스-AMG가 준비 중인 순수전기 고성능 C클래스가 최근 스파이샷에 새로운 공력 장치를 단 모습으로 포착됐다. 야사(YASA) 모터 기반의 트라이모터 구성이 유력한 가운데, BMW 역시 첫 전기 M3를 준비하고 있어 두 브랜드의 전동화 대결이 임박했다는 평가다.",
  date: "2026-09-08",
  time: "09:30",
  sectionName: "수입차",
  sectionHref: "import.html",
  categoryLabel: "EV",
  categoryClass: "cat-ev",
  heroImage: "mercedes_amg_c63_w206_front.webp",
  heroAlt: "메르세데스-AMG C63 S E 퍼포먼스(W206) 전측면, 블랙 색상, 매장 전시 모습",
  heroCaption: "매장에 전시된 현행 메르세데스-AMG C63 S E 퍼포먼스. 순수전기 C클래스는 이 차의 후속 고성능 포지션을 이어받을 전망이다",
  tags: ["메르세데스AMG", "전기C클래스", "AMGC63", "BMWM3", "전기고성능세단"],
  categories: ["import", "electric"],
  badge: "EV",
  badgeClass: "cat-ev",
  dataSource: "Carscoops",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "Carscoops", url: "https://www.carscoops.com/2026/09/mercedes-amg-class-ev-scoop/" },
    { name: "Mercedes-AMG 공식 홈페이지", url: "https://www.mercedes-amg.com/" },
    { name: "BMW M 공식 홈페이지", url: "https://www.bmw.com/en/bmw-m.html" }
  ],
  body: `
<h2 id="sec1">1. 프로토타입에 등장한 팝업식 리어 스포일러</h2>
<p><strong>메르세데스-AMG가 개발 중인 순수전기 고성능 C클래스의 최신 프로토타입이 새로운 리어 스포일러를 단 채 포착됐다.</strong> 해외 매체 카스쿱스(Carscoops)가 공개한 스파이샷에 따르면, 이 프로토타입은 트렁크 리드 뒤쪽에 팝업식으로 솟아오르는 리어윙을 장착하고 있었다. 단순한 디자인 요소가 아니라 고속 주행 시 후륜 접지력을 높이기 위한 능동형 공기역학 장치로 추정된다.</p>
<p>전기 AMG C클래스는 위장막을 두른 상태로 여러 차례 목격돼 왔지만, 이번처럼 리어 스포일러가 작동하는 모습이 포착된 것은 처음이다. 차체 하단에는 여전히 두꺼운 위장 패널이 둘러져 있어 정확한 범퍼 형상과 디퓨저 디자인은 아직 베일에 싸여 있다.</p>
<div class="article-img-wrap">
<img src="../images/mercedes_amg_c63_w206_front.webp" alt="메르세데스-AMG C63 S E 퍼포먼스 전측면, 블랙 색상, 실내 전시장" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 현행 AMG C63 S E 퍼포먼스 전측면. 순수전기 C클래스는 이와는 완전히 다른 전용 전기차 플랫폼을 사용할 것으로 보인다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. 예상 출력 778마력, 트라이모터 구성 유력</h2>
<p><strong>업계에서는 전기 AMG C클래스의 최고출력이 약 778마력(789PS, 580kW) 수준일 것으로 내다보고 있다.</strong> 이는 야사(YASA)의 액시얼 플럭스 모터를 앞뒤로 나눠 배치하는 삼중 모터(트라이모터) 구성을 통해 달성될 가능성이 거론된다. 야사는 메르세데스-AMG의 모기업인 메르세데스-벤츠 그룹이 지분을 보유한 영국의 고성능 전기모터 전문 업체로, 이미 AMG의 다른 고성능 전동화 모델에도 관련 기술이 적용된 바 있다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>메르세데스-벤츠 C클래스 전동화 라인업 예상 포지셔닝</caption>
<thead>
<tr><th>모델</th><th>예상 최고출력</th><th>포지션</th></tr>
</thead>
<tbody>
<tr><td>메르세데스-벤츠 C400 (EV)</td><td>482마력</td><td>기본형 전기 C클래스</td></tr>
<tr><td>메르세데스-AMG 전기 C클래스</td><td>약 778마력(추정)</td><td>고성능 AMG 버전</td></tr>
<tr><td>메르세데스-AMG CLA 45 EV</td><td>671마력</td><td>준중형 고성능 비교 모델</td></tr>
</tbody>
</table>
</div>
<div class="info-box">
<p class="info-box-title">📍 참고로 알아두면 좋은 것</p>
<p>위 수치는 아직 메르세데스-AMG가 공식 발표한 사양이 아니라, 스파이샷과 파워트레인 동향을 토대로 한 해외 매체의 추정치다. 실제 양산 사양과는 차이가 있을 수 있다.</p>
</div>

<!--AD-->

<h2 id="sec3">3. 배터리와 충전 성능, C400보다 낮은 용량 예상</h2>
<p><strong>전기 AMG C클래스의 배터리 용량은 기본형인 C400 EV의 94kWh보다 작을 것으로 예상된다.</strong> 이는 고성능 모델 특유의 무게 절감 전략과 관련이 깊은데, 배터리 용량을 다소 줄이는 대신 출력과 응답성을 극대화하는 방향으로 설계될 가능성이 크다. C400 EV는 최대 330kW급 직류 급속충전을 지원하는데, AMG 버전 역시 이와 비슷하거나 더 빠른 충전 성능을 갖출 것으로 예상되지만, 배터리 용량이 작아지는 만큼 1회 충전 주행거리는 C400보다 짧아질 전망이다.</p>
<div class="article-img-wrap">
<img src="../images/mercedes_amg_c63_w206_rear.webp" alt="메르세데스-AMG C63 S E 퍼포먼스 후측면, 급속충전 중인 모습" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 충전 중인 현행 AMG C63 S E 퍼포먼스. 전기 AMG C클래스 역시 고속 충전 성능을 갖출 것으로 보이지만 정확한 수치는 공개되지 않았다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec4">4. BMW 첫 전기 M3와의 정면 대결</h2>
<p><strong>전기 AMG C클래스의 가장 유력한 경쟁자는 BMW가 개발 중인 브랜드 최초의 순수전기 M3다.</strong> BMW는 차세대 M3에 최고출력 1,000마력에 달하는 것으로 알려진 순수전기 파워트레인을 준비하고 있으며, 두 모델 모두 2027년을 전후해 시장에 등장할 것으로 예상된다. 내연기관 시절부터 이어져 온 AMG C63과 BMW M3의 라이벌 구도가 전동화 시대에도 그대로 이어지는 셈이다.</p>
<p>다만 두 모델의 출력 격차가 실제 양산 단계에서 어떻게 좁혀질지는 아직 미지수다. BMW 첫 전기 M3에 대한 자세한 소식은 BMW M 공식 홈페이지에서도 확인할 수 있다. <a href="https://www.bmw.com/en/bmw-m.html" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>
<div class="article-img-wrap">
<img src="../images/bmw_m3_g80_front_2026.webp" alt="BMW M3 컴페티션(G80) 후측면, 그린 색상, 야외 촬영" width="1600" height="763" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 현행 내연기관 BMW M3 컴페티션(G80). BMW는 이 모델의 후속으로 브랜드 최초의 순수전기 M3를 준비하고 있다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec5">5. 실내는 어떻게 바뀔까</h2>
<p><strong>전기 AMG C클래스의 실내는 현행 C63 S E 퍼포먼스의 하이퍼스크린 기반 레이아웃을 계승하되, 순수전기 모델에 맞춘 그래픽과 소프트웨어가 새롭게 적용될 가능성이 크다.</strong> 메르세데스-벤츠는 최근 출시하는 신형 모델마다 파노라믹 형태의 디스플레이와 AMG 전용 주행 모드 인터페이스를 강화해왔는데, 전동화 C클래스 역시 이러한 흐름을 따를 것으로 예상된다.</p>
<div class="checkpoint-box">
<p><strong>✅ 전기 AMG C클래스, 이것만은 확인하세요</strong></p>
<p>· 최근 프로토타입에서 팝업식 리어 스포일러 최초 포착<br>· 예상 최고출력 약 778마력, 야사 트라이모터 구성 유력<br>· 배터리 용량은 C400 EV(94kWh)보다 작을 것으로 예상<br>· 2027년 출시 예정, BMW 첫 전기 M3와 정면 경쟁<br>· 아직 공식 사양 미발표, 스파이샷 기반 추정치 위주</p>
</div>
<div class="article-img-wrap">
<img src="../images/mercedes_amg_c63_w206_interior.webp" alt="메르세데스-AMG C63 실내, 하이퍼스크린과 스티어링 휠" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 현행 AMG C63의 실내. 하이퍼스크린과 AMG 전용 스티어링 휠이 적용됐다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>전기 AMG C클래스는 팝업식 리어 스포일러를 단 프로토타입이 포착되며 개발 막바지 단계에 접어들었음을 시사했다. 예상 출력은 778마력 안팎으로, BMW가 준비 중인 첫 전기 M3와 2027년경 정면으로 맞붙을 전망이다. 다만 배터리 용량, 정확한 출력, 국내 출시 여부 등 세부 사항은 아직 공식화되지 않아 향후 발표를 지켜볼 필요가 있다.</p>
</div>
`
};

const article2 = {
  slug: "tatadaewoo-level4-autonomous-truck-2026",
  headline: "\"군산-전주-대전 노선에서 실제로 화물을 실어 날랐다\"… 자율주행 트럭, 양산 로드맵 나왔다",
  headlineShort: "타타대우, 레벨4 자율주행 트럭 양산 로드맵 발표",
  description: "타타대우모빌리티가 자율주행 소프트웨어 기업 라이드플럭스와 손잡고 레벨4 완전자율주행 트럭 양산을 위한 로드맵을 구체화했다. 이미 지난 7월부터 군산-전주-대전 노선에서 국내 최초로 자율주행트럭 유상 화물운송을 수행 중이다.",
  subtitle: "국내 상용차 업계가 자율주행 기술 상용화에 속도를 내고 있다. 타타대우모빌리티는 레벨2+ 주행보조 시스템을 시작으로 완전 무인 레벨4 트럭 양산까지 단계적으로 나아가는 로드맵을 세웠으며, 이미 실제 도로에서 유상 화물운송을 수행하며 기술을 검증하고 있다.",
  date: "2026-09-08",
  time: "09:40",
  sectionName: "국산차",
  sectionHref: "domestic.html",
  categoryLabel: "이슈",
  categoryClass: "cat-blue",
  heroImage: "tatadaewoo_maxen_truck.webp",
  heroAlt: "타타대우 맥쎈(MAXEN) 트럭 전측면, 레드 색상, 도로 주차 모습",
  heroCaption: "타타대우모빌리티의 대형트럭 맥쎈(MAXEN). 레벨4 자율주행 기술은 이 차급의 플랫폼을 기반으로 개발되고 있다",
  tags: ["타타대우모빌리티", "자율주행트럭", "레벨4자율주행", "라이드플럭스", "맥쎈"],
  categories: ["domestic", "news"],
  badge: "TECH",
  badgeClass: "cat-blue",
  dataSource: "오토트리뷴",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "오토트리뷴", url: "https://www.autotribune.co.kr/news/articleView.html?idxno=45390" },
    { name: "타타대우모빌리티 공식 홈페이지", url: "https://www.tatadaewoo.com/" },
    { name: "라이드플럭스 공식 홈페이지", url: "https://www.ridefluxexchanged.com/" }
  ],
  body: `
<h2 id="sec1">1. 군산 본사에서 맺은 자율주행 업무협약</h2>
<p><strong>타타대우모빌리티와 자율주행 인공지능 소프트웨어 기업 라이드플럭스가 2026년 9월 3일 군산 본사에서 업무협약을 체결했다.</strong> 이번 협약은 상용트럭 전용 레벨2+ 주행보조 시스템 개발을 시작으로, 궁극적으로는 운전자 없이도 주행이 가능한 레벨4 완전자율주행 트럭 양산까지 단계적으로 나아가는 것을 목표로 한다.</p>
<p>협약에 따라 타타대우모빌리티는 대형트럭 '맥쎈(MAXEN)'과 중형트럭 '구쎈(KUXEN)' 플랫폼을 비롯한 차량 하드웨어와 제어 인터페이스를 제공하고, 라이드플럭스는 고속도로 주행을 중심으로 한 자율주행 소프트웨어 개발을 담당한다.</p>
<div class="article-img-wrap">
<img src="../images/tatadaewoo_maxen_truck.webp" alt="타타대우 맥쎈 트럭 전측면 클로즈업, 레드 색상" width="1600" height="1274" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 타타대우모빌리티의 대형트럭 맥쎈. 자율주행 로드맵의 1단계인 레벨2+ 주행보조 시스템은 이 플랫폼을 기반으로 개발된다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. 이미 시작된 국내 최초 자율주행트럭 유상 화물운송</h2>
<p><strong>이번 협약이 눈길을 끄는 이유는 이미 실제 도로에서 검증이 진행되고 있기 때문이다.</strong> 타타대우모빌리티와 라이드플럭스는 2026년 7월부터 물류기업 한진과 협력해 군산-전주-대전 구간 고속도로·일반도로에서 자율주행트럭을 이용한 국내 최초의 유상 화물운송을 수행하고 있다. 단순 시범 주행이 아니라 실제 화물을 싣고 요금을 받는 상업 운송이라는 점에서, 국내 자율주행 상용차 상용화의 이정표로 평가된다.</p>
<div class="info-box">
<p class="info-box-title">📍 참고로 알아두면 좋은 것</p>
<p>레벨2+는 차선유지, 앞차 추종, 차선변경 보조 등 고속도로 위주의 부분 자율주행 기능을 뜻하며 운전자의 상시 개입이 필요하다. 반면 레벨4는 특정 조건(ODD, 운행설계영역) 안에서 운전자 개입 없이 차량이 스스로 주행을 완결하는 완전자율주행 단계로, 이번 로드맵의 최종 목표다.</p>
</div>

<!--AD-->

<h2 id="sec3">3. 시범운행부터 유상운송까지, 축적된 실적</h2>
<p><strong>이번 화물운송은 하루아침에 이뤄진 것이 아니다.</strong> 타타대우모빌리티와 라이드플럭스는 2025년부터 서울-충청권을 잇는 고속도로와 일반도로에서 자율주행트럭 시범운행을 진행하며 데이터를 축적해왔다. 이 기간 동안 확보한 주행 데이터와 안전성 검증 결과를 바탕으로, 2026년 7월부터는 실제 화물을 실은 유상 운송 단계로 넘어갔다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>타타대우모빌리티·라이드플럭스 자율주행 로드맵</caption>
<thead>
<tr><th>단계</th><th>시기</th><th>내용</th></tr>
</thead>
<tbody>
<tr><td>1단계</td><td>2025년</td><td>서울-충청권 고속도로·일반도로 시범운행</td></tr>
<tr><td>2단계</td><td>2026년 7월~</td><td>한진과 협력, 군산-전주-대전 노선 유상 화물운송(국내 최초)</td></tr>
<tr><td>3단계</td><td>2026년 9월~</td><td>레벨2+ 주행보조 시스템 공동 개발 착수</td></tr>
<tr><td>4단계</td><td>추후 로드맵</td><td>단계적 기술 고도화 후 레벨4 완전자율주행 트럭 양산 목표</td></tr>
</tbody>
</table>
</div>
<div class="article-img-wrap">
<img src="../images/tatadaewoo_dexen_truck.webp" alt="타타대우 덱센(DEXEN) 트럭 전측면, 화이트 색상, 냉동탑차 사양" width="1600" height="1343" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 타타대우모빌리티의 중형 트럭 라인업 중 하나인 덱센(DEXEN). 자율주행 기술은 대형·중형 트럭 플랫폼에 순차 적용될 예정이다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec4">4. 글로벌 상용차 시장 진출의 발판</h2>
<p><strong>타타대우모빌리티는 이번 자율주행 기술 개발을 국내 시장에 국한하지 않고, 모기업인 타타모터스와 연계해 글로벌 상용차 시장 진출의 기반으로 삼겠다는 전략이다.</strong> 타타모터스는 인도를 비롯해 아시아, 아프리카 등 신흥 시장에서 상용차 판매 비중이 높은 만큼, 국내에서 검증된 자율주행 기술을 해외 플랫폼에 이식할 경우 상용차 부문의 경쟁력을 한 단계 끌어올릴 수 있을 것으로 기대된다.</p>
<p>관련 소식은 타타대우모빌리티 공식 홈페이지에서 확인할 수 있다. <a href="https://www.tatadaewoo.com/" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>
<div class="article-img-wrap">
<img src="../images/tatadaewoo_tractor_gwangyang.webp" alt="타타대우 트럭 트랙터, 컨테이너 섀시 견인, 광양운전면허시험장" width="1600" height="1200" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 컨테이너 섀시를 견인 중인 타타대우 트럭 트랙터. 자율주행 검증에는 이 같은 대형 화물 견인 시나리오도 포함되는 것으로 알려졌다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec5">5. 국내 물류 산업에 미칠 영향</h2>
<p><strong>자율주행 화물트럭 상용화는 만성적인 화물차 운전자 부족과 장거리 운행에 따른 피로 운전 문제를 해소할 대안으로 주목받고 있다.</strong> 특히 고속도로 구간을 중심으로 한 레벨2+ 주행보조 시스템이 먼저 상용화되면, 운전자의 피로도를 줄이면서도 안전성을 높이는 효과가 기대된다. 이후 레벨4 완전자율주행이 실현되면 운전자 없이도 심야·새벽 시간대 화물운송이 가능해져 물류 효율이 크게 개선될 전망이다.</p>
<div class="checkpoint-box">
<p><strong>✅ 타타대우 자율주행 트럭, 이것만은 확인하세요</strong></p>
<p>· 2026년 9월 3일, 타타대우모빌리티-라이드플럭스 업무협약 체결<br>· 2026년 7월부터 한진과 협력해 군산-전주-대전 노선 유상 화물운송 중(국내 최초)<br>· 맥쎈·구쎈 플랫폼 기반 레벨2+ 주행보조 시스템 우선 개발<br>· 최종 목표는 완전 무인 레벨4 트럭 양산<br>· 타타모터스와 연계한 글로벌 상용차 시장 진출도 병행 추진</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>타타대우모빌리티와 라이드플럭스의 이번 협약은 단순한 기술 개발 선언이 아니라, 이미 실제 도로에서 화물을 실어 나른 실적을 바탕으로 한 구체적인 양산 로드맵이라는 점에서 의미가 크다. 레벨2+ 주행보조 시스템을 거쳐 완전 무인 레벨4 트럭 양산까지 나아가겠다는 목표 아래, 국내 물류 산업과 글로벌 상용차 시장 모두에서 변화를 이끌어낼 수 있을지 주목된다.</p>
</div>
`
};

const article3 = {
  slug: "lexus-lbx-morizo-rr-extreme-spied-2026",
  headline: "\"카본 루프에 카본 범퍼까지\"… 가장 익스트림한 렉서스, GR 코롤라를 더 닮아간다",
  headlineShort: "렉서스 LBX 모리조 RR 익스트림, 카본 파츠로 무장",
  description: "렉서스의 가장 극단적인 소형 크로스오버 'LBX 모리조 RR'의 더욱 강화된 버전이 카본 파이버 루프와 범퍼를 두른 프로토타입으로 포착됐다. 토요타 GR 코롤라와 부품을 공유하며 경량화에 집중한 것으로 보인다.",
  subtitle: "2024년 출시된 렉서스 LBX 모리조 RR이 한층 더 익스트림한 버전으로 진화하고 있다는 소식이 전해졌다. 카본 파이버 루프와 범퍼 등 경량화 부품이 대거 적용될 것으로 보이며, 고성능 해치백 토요타 GR 코롤라와의 부품 공유 폭도 넓어질 전망이다.",
  date: "2026-09-08",
  time: "09:50",
  sectionName: "수입차",
  sectionHref: "import.html",
  categoryLabel: "SPY SHOT",
  categoryClass: "cat-gold",
  heroImage: "lexus_lbx_front_red.webp",
  heroAlt: "렉서스 LBX 전측면, 레드 색상, 실내 전시 모습",
  heroCaption: "매장에 전시된 렉서스 LBX. 모리조 RR 익스트림 버전은 이 소형 크로스오버를 기반으로 한 렉서스의 가장 극단적인 고성능 모델이 될 전망이다",
  tags: ["렉서스LBX", "모리조RR", "GR코롤라", "카본파이버", "고성능크로스오버"],
  categories: ["import"],
  badge: "SPY SHOT",
  badgeClass: "cat-gold",
  dataSource: "Carscoops",
  imageCredit: "Wikimedia Commons",
  sources: [
    { name: "Carscoops", url: "https://www.carscoops.com/2026/09/lexus-lbx-morizo-rr-extreme-spied/" },
    { name: "렉서스 공식 홈페이지", url: "https://www.lexus.com/" },
    { name: "토요타 가주레이싱 공식 홈페이지", url: "https://gazooracing.com/" }
  ],
  body: `
<h2 id="sec1">1. 위장막 속에 숨겨진 카본 파이버 루프</h2>
<p><strong>렉서스가 2024년 출시한 고성능 소형 크로스오버 'LBX 모리조 RR'의 한층 더 극단적인 버전을 개발 중이라는 소식이 전해졌다.</strong> 해외 매체 카스쿱스가 공개한 스파이샷에 따르면, 최신 프로토타입은 검은색과 흰색이 뒤섞인 독특한 위장 도색을 두르고 있는데, 이는 차체 패널 아래 카본 파이버 루프가 숨겨져 있음을 암시하는 전형적인 위장 패턴이다.</p>
<p>루프뿐 아니라 번호판 주변에서도 카본 파이버 소재로 추정되는 범퍼 하단부가 노출된 모습이 포착됐다. 새롭게 적용될 것으로 보이는 리어 스포일러 역시 카본 파이버로 제작될 가능성이 거론된다.</p>
<div class="article-img-wrap">
<img src="../images/lexus_lbx_front_red.webp" alt="렉서스 LBX 전측면 클로즈업, 레드 색상, 매장 전시" width="1600" height="1100" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 현행 렉서스 LBX 전측면. 익스트림 버전은 카본 파이버 루프와 범퍼 등으로 한층 강화된 경량화 사양을 갖출 것으로 보인다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec2">2. 경량화에 집중한 개발 방향</h2>
<p><strong>이번 프로토타입에서 드러난 변화의 공통점은 '경량화'다.</strong> 루프, 범퍼, 스포일러까지 차체 곳곳에 카본 파이버 소재를 적용하는 것은 출력을 무리하게 끌어올리기보다 무게를 덜어내 민첩성을 높이는 전통적인 고성능 튜닝 방식에 가깝다. 이는 렉서스가 LBX 모리조 RR을 '작지만 예리한' 고성능 모델로 완성하려는 방향성과 맞닿아 있다.</p>
<div class="info-box">
<p class="info-box-title">📍 참고로 알아두면 좋은 것</p>
<p>'모리조(Morizo)'는 토요타 아키오 회장이 레이싱 드라이버로 활동할 때 사용하는 별명이다. 토요타·렉서스는 모리조가 직접 개발과 테스트에 참여한 고성능 모델에 이 이름을 붙이는데, GR 야리스 모리조 에디션, GR 코롤라 모리조 에디션에 이어 LBX 모리조 RR까지 이어지고 있다.</p>
</div>

<!--AD-->

<h2 id="sec3">3. GR 코롤라와 더 많은 것을 공유하게 될까</h2>
<p><strong>카스쿱스는 이번 보도에서 "두 모델이 미래에 더 많은 공통점을 가질 것으로 보인다"고 언급하며, 카본 루프가 이미 상급 트림 GR 코롤라에 쓰이는 소재라는 점을 짚었다.</strong> LBX 모리조 RR은 애초에 GR 코롤라와 부품을 상당 부분 공유하는 것으로 알려져 있는데, 이번 익스트림 버전에서는 그 공유 폭이 한층 넓어질 가능성이 있다는 해석이다.</p>
<div class="article-img-wrap">
<img src="../images/toyota_gr_corolla_circuit_2026.webp" alt="토요타 GR 코롤라 서킷 에디션 전측면, 하늘색, 주택가 도로" width="1600" height="1110" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 토요타 GR 코롤라 서킷 에디션. LBX 모리조 RR 익스트림 버전은 이 차와 카본 파이버 부품을 포함한 공통 요소를 더 많이 나눠 가질 것으로 보인다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<h2 id="sec4">4. 기존 모리조 RR의 파워트레인은?</h2>
<p><strong>기존 LBX 모리조 RR은 터보 1.6L 3기통 엔진을 얹어 300마력(224kW, 304PS), 최대토크 400Nm(295lb-ft)를 낸다.</strong> 변속기는 8단 자동 또는 6단 수동 중 선택할 수 있으며, 상시 사륜구동을 갖춰 정지 상태에서 시속 100km까지 5.2초 만에 도달한다. 익스트림 버전이 이 파워트레인을 그대로 유지할지, 아니면 GR 코롤라 상급 트림 수준으로 출력을 더 끌어올릴지는 아직 공식 확인되지 않았다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>렉서스 LBX 모리조 RR 기존 사양</caption>
<thead>
<tr><th>항목</th><th>사양</th></tr>
</thead>
<tbody>
<tr><td>엔진</td><td>터보 1.6L 직렬 3기통</td></tr>
<tr><td>최고출력</td><td>300마력(224kW)</td></tr>
<tr><td>최대토크</td><td>400Nm</td></tr>
<tr><td>변속기</td><td>8단 자동 / 6단 수동</td></tr>
<tr><td>구동방식</td><td>상시 4WD</td></tr>
<tr><td>0-100km/h</td><td>5.2초</td></tr>
</tbody>
</table>
</div>
<p>렉서스의 고성능 모델 관련 소식은 렉서스 공식 홈페이지에서 확인할 수 있다. <a href="https://www.lexus.com/" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>

<h2 id="sec5">5. 출시 시기와 전망</h2>
<p><strong>구체적인 출시 시기는 아직 명시되지 않았지만, 위장막을 두른 주행 테스트가 포착된 만큼 개발이 상당 부분 진행된 단계로 풀이된다.</strong> LBX 모리조 RR 익스트림 버전이 실제로 양산된다면, 소형 크로스오버 세그먼트에서 카본 파이버 소재를 이 정도로 적극 활용하는 사례로는 이례적이라는 평가가 나온다. 렉서스가 준비해온 고성능 서브 브랜드 전략의 정점이 될 가능성도 거론된다.</p>
<div class="checkpoint-box">
<p><strong>✅ LBX 모리조 RR 익스트림, 이것만은 확인하세요</strong></p>
<p>· 위장 프로토타입에서 카본 파이버 루프·범퍼 흔적 최초 포착<br>· 경량화 중심 개발, GR 코롤라와의 부품 공유 폭 확대 가능성<br>· 기존 모리조 RR은 300마력 터보 1.6L 3기통, 0-100km/h 5.2초<br>· 익스트림 버전의 정확한 파워트레인·출력은 미공개<br>· 구체적 출시 시기는 아직 발표되지 않음</p>
</div>
<div class="article-img-wrap">
<img src="../images/lexus_lbx_interior.webp" alt="렉서스 LBX 실내, 스티어링 휠과 인포테인먼트 디스플레이" width="1600" height="1067" itemprop="image" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 렉서스 LBX 실내. 모리조 RR 익스트림 버전은 경량화를 위해 실내 마감재에도 변화를 줄 가능성이 있다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>렉서스 LBX 모리조 RR의 익스트림 버전은 카본 파이버 루프와 범퍼를 앞세운 경량화 전략으로 개발되고 있는 것으로 보인다. GR 코롤라와의 부품 공유 폭이 넓어질 것이라는 관측도 나오는 만큼, 소형 크로스오버 세그먼트에서 가장 극단적인 고성능 모델로 완성될 가능성이 크다. 다만 정확한 파워트레인 사양과 출시 시기는 아직 공식화되지 않아 추가 정보를 기다려야 한다.</p>
</div>
`
};

const out = [article1, article2, article3];
fs.writeFileSync(path.join(__dirname, 'spec_group_B.json'), JSON.stringify(out, null, 2), 'utf8');
console.log('written', out.length, 'articles');
