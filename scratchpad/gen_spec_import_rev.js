const fs = require('fs');
const path = require('path');

const AD = '<!--AD-->';

// ============ 1) BYD 씰 세단 ============
const bydSealBody = `
<p>BYD코리아가 2026년 2월 중형 전기 세단 '씰(SEAL)'의 후륜구동(RWD) 트림을 국내에 출시했다. 그동안 국내에 상륙한 BYD 전기차는 씨라이언6(플러그인 하이브리드)와 씨라이언7(SUV)까지, 모두 SUV 혹은 크로스오버 형태였다. 씰은 BYD코리아가 처음 선보이는 정통 4도어 스포츠 세단으로, 테슬라 모델3를 정면으로 겨냥한 모델이라는 평가가 나온다. 실제 시승기와 가격표를 취합해 정리했다.</p>

<aside class="key-points">
  <h2 class="kp-title">📌 핵심 요약</h2>
  <ul>
    <li><strong>가격</strong>: RWD 3,990만 원 / 플러스 4,190만 원 / 다이내믹 AWD 4,690만 원 (세제혜택 적용, 보조금 미반영)</li>
    <li><strong>배터리</strong>: 82.56kWh 블레이드 LFP 배터리 전 트림 공유</li>
    <li><strong>주행거리</strong>: 복합 407km, 저온 371km (RWD 기준)</li>
    <li><strong>다이내믹 AWD</strong>: 전후 듀얼모터 390kW(530마력), 제로백 3.8초</li>
    <li><strong>차급 포지션</strong>: 씨라이언6·7과 달리 <strong>SUV가 아닌 정통 세단</strong> — 테슬라 모델3 경쟁 모델</li>
  </ul>
</aside>

${AD}

<h2 id="lineup">1. 씨라이언과 다른 길 — 왜 세단인가</h2>
<div class="article-img-wrap">
  <img src="../images/byd_seal_rwd_studio.webp" alt="BYD 씰 세단 스튜디오 사진, 측면 실루엣" loading="lazy">
  <p class="article-img-caption">▲ BYD 씰의 로우 세단 실루엣. 씨라이언 시리즈의 SUV 차체와는 완전히 다른 포지션이다 <span class="cap-credit">ⓒ BYD코리아</span></p>
</div>
<p>BYD코리아는 씨라이언6·7으로 국내 중형 SUV·PHEV 시장에 안착한 뒤, 세 번째 카드로 세단인 씰을 꺼냈다. 씨라이언 시리즈가 기아 쏘렌토·스포티지급 SUV 수요층을 겨냥했다면, 씰은 낮고 매끈한 세단 차체로 <strong>준중형~중형 스포츠 세단</strong> 구매층, 특히 테슬라 모델3 구매를 저울질하던 소비자를 정조준한다. 'Ocean-X' 아키텍처를 기반으로 한 전용 전기차 플랫폼에 82.56kWh 블레이드 LFP 배터리를 얹었는데, 이는 씨라이언7과 동일한 용량대다. 다만 차체가 낮고 공기저항계수가 작아 같은 배터리로도 세단 특유의 효율을 노릴 수 있다는 게 BYD 측 설명이다.</p>

<h2 id="price">2. 트림별 가격 — 3,990만 원부터, AWD는 4,690만 원</h2>
<p>씰은 출시 당시 후륜구동(RWD) 단일 트림으로 3,990만 원에 시작했다. 이후 상위 사양을 더한 '플러스' 트림이 4,190만 원에, 전후 듀얼모터를 얹은 최상위 '다이내믹 AWD'가 4,690만 원에 추가되며 현재 3개 트림 체제로 운영된다. 친환경차 세제혜택을 적용한 가격이며, 국고·지방 보조금을 더하면 실구매가는 두 트림 모두 3,000만 원대까지 내려간다는 것이 딜러망의 설명이다.</p>

<div class="spec-table-wrap">
  <table class="spec-table align-left">
    <caption>BYD 씰 트림별 가격 및 제원</caption>
    <thead>
      <tr><th>트림</th><th>가격</th><th>모터 구성</th><th>시스템 출력</th><th>제로백</th></tr>
    </thead>
    <tbody>
      <tr><td>RWD</td><td class="spec-highlight">3,990만 원</td><td>후륜 싱글모터</td><td>230kW(약 313마력)</td><td>5.9초</td></tr>
      <tr><td>플러스</td><td>4,190만 원</td><td>후륜 싱글모터</td><td>230kW(약 313마력)</td><td>5.9초</td></tr>
      <tr><td>다이내믹 AWD</td><td class="spec-highlight">4,690만 원</td><td>전후 듀얼모터</td><td class="spec-highlight">390kW(약 530마력)</td><td class="spec-highlight">3.8초</td></tr>
    </tbody>
  </table>
</div>

<p>세 트림 모두 82.56kWh 블레이드 LFP 배터리를 공유하며, 인증 복합 주행거리는 407km, 저온 환경에서는 371km 수준이다. 다이내믹 AWD는 전륜 160kW·후륜 230kW 모터를 조합해 합산 390kW(약 530마력)를 내며, 정지 상태에서 시속 100km까지 3.8초에 도달한다. 배터리 용량은 같은데 출력이 크게 오른 만큼 AWD 트림의 실주행 전비는 RWD 대비 다소 낮을 수 있다는 점은 감안할 필요가 있다.</p>

<div class="article-img-wrap">
  <img src="../images/byd_seal_2023_shanghai.webp" alt="BYD 씰 실차, 모터쇼 전시 모습" loading="lazy">
  <p class="article-img-caption">▲ 모터쇼에 전시된 BYD 씰. 국내 3개 트림 모두 이 기본 차체를 공유한다 <span class="cap-credit">ⓒ BYD</span></p>
</div>

${AD}

<h2 id="drive">3. 시승 소감 — "주행·정숙·가격 3박자"</h2>
<div class="article-img-wrap">
  <img src="../images/byd_seal_sedan_rear.webp" alt="BYD 씰 세단 후면, 트랙 주행 모습" loading="lazy">
  <p class="article-img-caption">▲ BYD 씰(유럽 사양) 후면. 유럽에서는 서킷 시승 행사로 다이내믹 AWD의 가속 성능을 홍보했다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>국내 매체 시승기들은 공통적으로 '주행·정숙·가격'을 씰의 세 가지 강점으로 꼽는다. 헤럴드경제는 씰을 두고 "바다를 닮은 부드러운 승차감"이라고 표현했고, 디지털데일리는 "4050 실속파들이 선택한 이유"라는 제목으로 씰의 가성비를 조명했다. 아주경제·후속 시승기에서는 정지 상태에서 시속 100km까지 5.9초에 도달하는 RWD 기준 가속력을 두고 "전기차 특유의 정숙한 주행에 빠른 가속력이 장점으로 다가왔다"는 평가가 이어졌다.</p>
<p>스티어링 휠의 버튼으로 가로형 15.6인치 인포테인먼트 디스플레이를 세로로 회전시킬 수 있는 기능도 시승기마다 반복적으로 언급되는 요소다. 내비게이션 화면을 세로로 길게 볼 수 있어 목적지 탐색이 한결 수월하다는 평가다. 운전석에는 경주용 차량을 연상시키는 퀼팅 시트가 적용돼 몸을 안정적으로 잡아주면서도 쿠션감이 적절하다는 반응이 많았다.</p>

<h2 id="interior">4. 실내 마감 — 씨라이언과 이어지는 완성도</h2>
<div class="article-img-wrap">
  <img src="../images/byd_seal_sedan_interior.webp" alt="BYD 씰 세단 실내, 스티어링 휠과 회전형 디스플레이" loading="lazy">
  <p class="article-img-caption">▲ BYD 씰 실내. 회전형 15.6인치 인포테인먼트와 퀼팅 시트가 특징이다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>씨라이언7 시승기에서 반복됐던 "과거 중국차 이미지에서 벗어난 마감"이라는 평가는 씰에서도 이어진다. 조립 품질과 내장재 질감에서 뚜렷한 결함을 지적하는 시승기는 찾기 어렵고, 스티어링 휠·시트 등 운전자가 직접 손이 닿는 부위의 마감이 가격대 대비 준수하다는 반응이 공통적이다. BYD코리아는 아울러 전국 34개 전시장과 20개 서비스센터, 누적 1만 5,000대 이상의 국내 운행 상용차 실적을 앞세워 애프터서비스 우려를 정면 돌파하겠다는 전략을 펴고 있다.</p>
<p><a href="https://www.bydauto.kr/brand/news-view/30" target="_blank" rel="noopener" class="inline-link-btn">BYD코리아 씰 AWD 가격 공지 확인</a></p>

<div class="info-box">
  <p><strong>씨라이언6·7 대비 씰의 차이</strong></p>
  <p>씨라이언6(PHEV, 3,750만 원)와 씨라이언7(전기 SUV, 4,490만~4,690만 원)은 모두 SUV 차체다. 씰은 이들과 달리 세단 차체를 택해 <strong>공기저항계수가 낮고 전비 효율이 좋다</strong>는 점, 그리고 <strong>테슬라 모델3와 동급 세단 시장에서 직접 경쟁</strong>한다는 점이 가장 큰 차이다. 가격은 씨라이언7보다 오히려 500만 원가량 낮은 3,990만 원부터 시작한다.</p>
</div>

${AD}

<h2 id="verdict">5. 종합 — 모델3 대안이 될 수 있을까</h2>
<p>씰의 가장 직접적인 경쟁자는 테슬라 모델3다. 국내 모델3 후륜구동 트림이 5,000만 원대에서 시작하는 것과 비교하면, 씰 RWD(3,990만 원)는 1,000만 원 이상 저렴하면서도 비슷한 체급의 배터리와 편의 사양을 갖췄다. 물론 테슬라 슈퍼차저 네트워크나 브랜드 잔존가치 면에서는 아직 격차가 있다는 지적도 나온다. 그러나 시승기들이 공통적으로 짚는 지점은 "가격 차이만큼의 상품성 격차는 이제 크지 않다"는 것이다. 씨라이언6·7으로 SUV 시장에서 존재감을 넓힌 BYD코리아가, 씰을 통해 국내 전기 세단 시장에서도 유의미한 점유율을 확보할 수 있을지 주목된다.</p>

<div class="checkpoint-box">
  <p><strong>체크포인트</strong></p>
  <ul>
    <li>씰은 씨라이언6·7과 달리 <strong>정통 4도어 세단</strong>이며, 테슬라 모델3와 직접 경쟁하는 포지션이다.</li>
    <li>가격은 <strong>RWD 3,990만 원 / 플러스 4,190만 원 / 다이내믹 AWD 4,690만 원</strong> 3개 트림.</li>
    <li>전 트림 82.56kWh 블레이드 LFP 배터리 공유, 복합 주행거리 <strong>407km</strong>.</li>
    <li>다이내믹 AWD는 390kW(530마력)로 <strong>제로백 3.8초</strong>의 고성능 세단이다.</li>
    <li>시승기들은 "주행·정숙·가격 3박자"를 공통 강점으로 꼽는다.</li>
  </ul>
</div>
`.trim();

// ============ 2) 폴스타2 ============
const polestar2Body = `
<p>먼저 분명히 해둘 사실이 있다. <strong>폴스타2는 2026년 2월을 기점으로 국내 신차 판매가 사실상 종료됐다.</strong> 함종성 폴스타코리아 대표가 차세대 폴스타2 출시 전까지 재판매 계획이 없다고 밝히면서다. 지난해 11월부터 판매량이 사실상 '0'을 기록했고, 올해부터는 전기차 국고 보조금 대상에서도 빠졌다. 그런데도 이 차를 지금 다시 짚어보는 이유가 있다. 국내 중고 시장에서 폴스타2 시세가 강세를 보이는 현상 뒤에는, 신차였을 때 이 차가 갖췄던 상품성이 자리하고 있기 때문이다. 이번 리뷰는 중고 시세가 아니라, <strong>폴스타2라는 차 자체가 무엇을 잘했는가</strong>에 집중한다.</p>

<aside class="key-points">
  <h2 class="kp-title">📌 핵심 요약</h2>
  <ul>
    <li><strong>국내 상황</strong>: 2026년 2월 재판매 계획 없음 발표로 사실상 단종 — 차세대 모델(2027년 초 공개 예정)까지 공백</li>
    <li><strong>과거 국내 판매가</strong>: 롱레인지 싱글모터 5,490만 원 / 듀얼모터 5,790만 원 / 300대 한정 스탠다드 4,390만 원(69kWh)</li>
    <li><strong>2026년형(해외) 업데이트</strong>: 스탠다드 배터리 69→70kWh(CATL) 전환, WLTP 주행거리 546→554km</li>
    <li><strong>디자인</strong>: 스칸디나비아 미니멀리즘, 군더더기 없는 실내 마감</li>
    <li><strong>차세대 폴스타2</strong>: 2027년 초 공개 예정, 크로스오버 느낌을 덜어낸 정통 세단으로 변경</li>
  </ul>
</aside>

${AD}

<h2 id="korea-status">1. 국내 상황 — 왜 지금은 살 수 없는가</h2>
<div class="article-img-wrap">
  <img src="../images/polestar2_facelift_9470.webp" alt="폴스타2 페이스리프트 모델, 측면" loading="lazy">
  <p class="article-img-caption">▲ 폴스타2 페이스리프트 모델. 국내에는 이미 재고 소진용 한정판 판매를 끝으로 신차 공급이 끊겼다 <span class="cap-credit">ⓒ Polestar</span></p>
</div>
<p>폴스타2의 국내 단종은 갑작스러운 결정이 아니었다. 지난해 11월부터 판매량이 사실상 제로에 수렴했고, 올해 들어서는 전기차 국고 보조금 대상에서도 제외됐다. 재고 소진을 위한 마지막 시도로 69kWh 배터리를 탑재한 스탠다드 모델을 300대 한정판으로 4,390만 원에 판매한 바 있다. 이전 정규 라인업 가격은 롱레인지 싱글모터 5,490만 원, 듀얼모터 5,790만 원이었다. 결국 2026년 2월 함종성 폴스타코리아 대표가 차세대 모델 출시 전까지 재판매 계획이 없다고 못 박으며 국내 신차 판매는 사실상 멈췄다. 차세대 폴스타2는 2027년 초 공개 예정이며, 기존의 크로스오버 느낌을 걷어내고 본격적인 세단 스타일로 바뀐다고 알려졌다.</p>

<div class="article-img-wrap">
  <img src="../images/polestar2_2026my_rear.webp" alt="폴스타2 2026년형 후면" loading="lazy">
  <p class="article-img-caption">▲ 폴스타2 후면. 국내에는 이미 재고 소진용 한정판 판매를 끝으로 신차 공급이 끊겼다 <span class="cap-credit">ⓒ Polestar</span></p>
</div>

<div class="info-box">
  <p><strong>중고 시세가 강세인 이유</strong></p>
  <p>신차 공급이 끊긴 상태에서도 중고 매물 시세가 견조한 것은 이례적이다. <a href="used-ev-market-polestar-rise-2026.html" class="inline-link-btn">중고 전기차 시장 폴스타2 강세 기사에서 확인 가능</a> — 이 현상의 배경에는 아래에서 다룰 신차 시절의 상품성이 있다.</p>
</div>

${AD}

<h2 id="design">2. 디자인 — 절제된 스칸디나비아 미니멀리즘</h2>
<div class="article-img-wrap">
  <img src="../images/polestar2_2026my_interior.webp" alt="폴스타2 2026년형 실내, 미니멀 대시보드" loading="lazy">
  <p class="article-img-caption">▲ 폴스타2 실내. 버튼 수를 최소화하고 소재 자체의 질감으로 고급감을 낸 것이 특징이다 <span class="cap-credit">ⓒ Polestar</span></p>
</div>
<p>폴스타2를 설명할 때 가장 먼저 나오는 단어는 '절제'다. 볼보에서 독립한 브랜드답게 스칸디나비아 특유의 미니멀 디자인 언어를 실내외에 일관되게 적용했다. 크롬 장식이나 화려한 라인 대신 면과 비례로 존재감을 만드는 방식이다. 실내는 물리 버튼 수를 최소화하고, 소재 자체의 질감(우드 데코, 리사이클 텍스타일 등)으로 고급감을 표현한다. 2026년형에는 새로운 인포테인먼트 프로세서가 적용돼 반응 속도와 OTA 업데이트 속도가 개선됐고, 최대 1,350와트 출력의 바워스&윌킨스(Bowers & Wilkins) 14스피커 오디오 시스템도 옵션으로 추가됐다. 20인치 퍼포먼스 휠에는 새로운 5스포크 디자인이 적용됐고, 'Dune'이라는 모래빛 신규 외장 색상도 더해졌다.</p>

<h2 id="efficiency">3. 실주행 전비와 배터리 — 조용한 업데이트, 확실한 개선</h2>
<div class="article-img-wrap">
  <img src="../images/polestar2_2026my_charging.webp" alt="폴스타2 2026년형 충전 모습" loading="lazy">
  <p class="article-img-caption">▲ 폴스타2 충전 모습. 2026년형은 스탠다드 트림의 배터리 공급사를 LG에서 CATL로 바꾸며 용량을 늘렸다 <span class="cap-credit">ⓒ Polestar</span></p>
</div>

<div class="spec-table-wrap">
  <table class="spec-table align-left">
    <caption>폴스타2 2026년형 트림별 배터리·주행거리 (WLTP, 해외 사양 기준)</caption>
    <thead>
      <tr><th>트림</th><th>배터리</th><th>모터 출력</th><th>WLTP 주행거리</th></tr>
    </thead>
    <tbody>
      <tr><td>스탠다드 레인지 싱글모터</td><td>70kWh (CATL)</td><td>단일모터</td><td class="spec-highlight">554km</td></tr>
      <tr><td>롱레인지 싱글모터</td><td>82kWh</td><td>단일모터</td><td>635km 안팎</td></tr>
      <tr><td>롱레인지 듀얼모터</td><td>82kWh</td><td>전 200kW · 후 110kW</td><td>-</td></tr>
    </tbody>
  </table>
</div>

<p>2026년형의 핵심 변화는 겉으로 잘 드러나지 않는다. 스탠다드 레인지 싱글모터 트림의 배터리가 기존 LG에너지솔루션 69kWh에서 CATL 70kWh로 바뀌며, WLTP 기준 주행거리가 546km에서 554km로 소폭 늘었다. 큰 폭의 변화는 아니지만, 폴스타가 배터리 공급망을 다변화하면서도 기본기를 꾸준히 다듬고 있다는 신호로 해석할 수 있다. 롱레인지 듀얼모터는 전륜 200kW·후륜 110kW 모터 조합으로 82kWh 배터리를 공유한다.</p>

${AD}

<h2 id="verdict">4. 종합 — 단종된 지금도 유효한 상품성</h2>
<p>폴스타2가 국내에서 신차로 살 수 없는 차가 됐다는 사실과, 이 차가 상품성 좋은 전기차였다는 사실은 별개다. 절제된 디자인, 꾸준히 개선되는 소프트웨어·배터리, 볼보 계열 특유의 안전 설계까지 — 이 조합이 국내 중고 시장에서 여전히 수요를 만들어내는 이유다. 다만 신차 A/S 네트워크가 축소되고 있는 점, 그리고 차세대 모델이 2027년 초에나 공개될 예정이라는 점은 지금 폴스타2를 고려하는 소비자가 감안해야 할 현실이다.</p>

<div class="checkpoint-box">
  <p><strong>체크포인트</strong></p>
  <ul>
    <li>폴스타2는 <strong>2026년 2월부로 국내 신차 판매가 사실상 종료</strong>됐다. 차세대 모델은 2027년 초 공개 예정.</li>
    <li>과거 국내 판매가는 롱레인지 싱글모터 5,490만 원, 듀얼모터 5,790만 원 수준이었다.</li>
    <li>2026년형(해외)은 스탠다드 트림 배터리를 70kWh(CATL)로 늘려 WLTP 554km를 확보했다.</li>
    <li>절제된 스칸디나비아 디자인과 꾸준한 소프트웨어 개선이 <strong>단종 이후에도 중고 수요를 지탱</strong>하는 배경이다.</li>
  </ul>
</div>
`.trim();

// ============ 3) 닛산 리프 ============
const nissanLeafBody = `
<p>먼저 밝혀둘 사실이 있다. <strong>닛산 리프는 현재 국내에서 판매되지 않는다.</strong> 2014년 12월 국내에 정식 출시됐지만, 2020년 닛산이 한국 시장 철수를 선언하면서 판매가 그대로 종료됐다. 이후 6년이 지난 지금도 공식 재출시 계획은 발표되지 않았다. 다만 최근 3세대 리프가 글로벌 시장에서 완전히 새로운 모습으로 돌아오면서, 한국닛산 재진출설이 자동차 커뮤니티를 중심으로 돌고 있는 것도 사실이다. 이 리뷰는 국내에 없는 차라는 전제 위에서, 리프가 전기차 역사에서 갖는 의미와 3세대의 해외 평가를 정리한다.</p>

<aside class="key-points">
  <h2 class="kp-title">📌 핵심 요약</h2>
  <ul>
    <li><strong>국내 상황</strong>: 2020년 닛산 한국 철수로 판매 중단, 2026년 현재도 미판매 — 재진출은 '소문' 단계, 공식 발표 없음</li>
    <li><strong>역사적 의의</strong>: 2009년 공개, 2010년 12월 양산 개시 — 세계 최초의 대중형 양산 전기차</li>
    <li><strong>누적 판매</strong>: 2019년 세계 최초로 40만 대 판매 돌파, 2020년 기준 누적 생산 50만 대 초과</li>
    <li><strong>3세대(2026년형)</strong>: 해치백에서 쿠페형 크로스오버로 완전 변경, 스탠다드 52kWh·익스텐디드 75kWh 2종 배터리</li>
    <li><strong>해외 평가</strong>: "실험적인 파격을 벗고 전기차 주류에 정착했다"는 평가 다수</li>
  </ul>
</aside>

${AD}

<h2 id="korea">1. 왜 한국에는 리프가 없나</h2>
<div class="article-img-wrap">
  <img src="../images/nissan_leaf_2011_zeo_front.webp" alt="2011년형 초기 닛산 리프, 해치백 형태" loading="lazy">
  <p class="article-img-caption">▲ 2011년형 1세대 닛산 리프. 국내에는 이 차의 페이스리프트 격인 2세대가 2014년 처음 상륙했다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>리프는 2014년 12월 23일 국내에 정식 출시됐다. 하지만 판매는 오래가지 못했다. 2020년 4월 이후 재고 소진을 이유로 판매가 일시 중단됐고, 이 시점을 전후해 닛산이 한국 시장 철수 결정을 내리면서 그대로 판매가 종료됐다. 노 재팬 불매 운동의 여파와 한국닛산의 지속된 적자가 철수 결정의 주요 배경으로 꼽힌다. 이후 6년째 닛산은 한국에 승용 라인업을 공급하지 않고 있다. 최근 3세대 리프가 우핸들 시장을 포함해 영국 공장에서 2026년부터 생산되기 시작하면서, "닛산이 리프와 함께 한국에 다시 들어오는 것 아니냐"는 추측성 보도와 커뮤니티 소문이 돌고 있지만, 이는 어디까지나 소문 단계이며 닛산 본사나 한국닛산의 공식 발표는 아직 없다.</p>

<div class="info-box">
  <p><strong>참고 — 국내 출시 전례</strong></p>
  <p>2014년 국내 출시 당시 리프는 24kWh 배터리로 공인 주행거리 132km에 불과했다. 이후 2019년 2세대(ZE1) 전환 시점에는 국내 판매가 이미 중단된 상태였기 때문에, 40kWh 이상 배터리를 얹은 2세대 리프는 국내에 정식 판매된 적이 없다.</p>
</div>

${AD}

<h2 id="history">2. 역사적 의의 — 세계 최초의 '대중' 양산 전기차</h2>
<p>리프는 2009년 8월 공개돼 2010년 12월 양산을 시작했다. 테슬라 로드스터가 앞서 있었지만, 로드스터는 소규모 스포츠카였던 반면 리프는 <strong>대량 생산 체제를 갖춘 최초의 대중형 순수 전기차</strong>였다는 점에서 역사적 의미가 다르다. 2019년 5월에는 세계 최초로 누적 판매 40만 대를 돌파했고, 2020년에는 생산 10년 만에 누적 생산 50만 대를 넘어섰다. 리프가 다진 CHAdeMO 급속충전 규격과 대중형 EV 시장의 기초는, 이후 등장한 대부분의 양산 전기차가 참고한 출발점이 됐다.</p>

<h2 id="gen3">3. 3세대(2026년형) — 해치백을 버리고 크로스오버로</h2>
<div class="article-img-wrap">
  <img src="../images/nissan_leaf_ze1_2024_front.webp" alt="2세대 닛산 리프 전면, 출고 직전 모델" loading="lazy">
  <p class="article-img-caption">▲ 2세대(ZE1) 리프. 2025년까지 5도어 해치백 형태를 유지했던 마지막 세대다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<div class="article-img-wrap">
  <img src="../images/nissan_leaf_ze1_2024_rear.webp" alt="2세대 닛산 리프 후면" loading="lazy">
  <p class="article-img-caption">▲ 2세대 리프 후면. 3세대부터는 이 해치백 형태 자체가 사라진다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>2025년까지 리프는 5도어 해치백 형태를 유지했다. 그러나 3세대부터는 완전히 다른 차가 됐다. 낮고 매끈한 쿠페형 크로스오버 SUV로 차체 형태 자체가 바뀌었고, CCS 완속·NACS(테슬라 규격) 급속을 모두 지원하는 듀얼 충전구를 갖췄다. 배터리는 스탠다드(52kWh, 미국 EPA 기준 약 434km)와 익스텐디드 레인지(75kWh, 약 488km) 2종으로 구성되며, 출력은 최대 214마력(261lb-ft 토크)까지 올라갔다. 실내에는 14.3인치 듀얼 디스플레이와 구글 기반 인포테인먼트가 탑재됐고, 18인치 알로이 휠, 어댑티브 크루즈 컨트롤, 무선 안드로이드 오토·카플레이, 2존 공조 등이 기본 사양으로 들어간다. 미국 기준 시작 가격은 3만 달러를 밑돈다.</p>

<div class="spec-table-wrap">
  <table class="spec-table align-left">
    <caption>3세대 닛산 리프(2026년형) 배터리 트림 비교 (해외 사양)</caption>
    <thead>
      <tr><th>트림</th><th>배터리</th><th>EPA 주행거리(추정)</th><th>충전구</th></tr>
    </thead>
    <tbody>
      <tr><td>스탠다드</td><td>52kWh</td><td>약 434km(270마일)</td><td>CCS + NACS</td></tr>
      <tr><td>익스텐디드 레인지</td><td class="spec-highlight">75kWh</td><td class="spec-highlight">약 488km(303마일)</td><td>CCS + NACS</td></tr>
    </tbody>
  </table>
</div>

${AD}

<h2 id="review">4. 해외 평가 — "실험적인 파격을 벗고 주류에 정착했다"</h2>
<div class="article-img-wrap">
  <img src="../images/nissan_leaf_ze1_dashboard.webp" alt="닛산 리프 실내 대시보드, 계기판과 인포테인먼트" loading="lazy">
  <p class="article-img-caption">▲ 리프 실내. 3세대는 14.3인치 듀얼 디스플레이와 구글 기반 인포테인먼트로 완전히 새로워졌다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>해외 매체들의 3세대 리프 평가는 대체로 우호적이다. 모터원(Motor1)은 "3세대는 기본적인 이동수단의 개념을 재정의한다"고 평가했고, 다수 매체는 "한때 실험적이고 다소 어색한 전기차 개척자였던 리프가, 이번 세대에서는 전기차 주류의 중심부에 안착했다"는 취지로 호평했다. 특히 가격 대비 상품성 — 3만 달러를 밑도는 시작 가격에 300마일에 육박하는 주행거리, 테슬라 슈퍼차저 호환 충전구까지 갖춘 구성 — 이 예산 제약이 있는 소비자층에게 설득력 있는 선택지로 꼽힌다.</p>

<h2 id="verdict">5. 정리 — 국내에는 없지만, 의미는 크다</h2>
<p>닛산 리프는 국내 소비자가 지금 당장 살 수 있는 차는 아니다. 2020년 한국 시장 철수 이후 6년째 공백이 이어지고 있고, 재진출은 확정된 사실이 아니라 소문 수준에 머물러 있다. 그러나 세계 최초의 대중형 양산 전기차라는 역사적 위치, 그리고 3세대에서 보여준 크로스오버 전환과 상품성 개선은 전기차 시장 전체를 이해하는 데 여전히 중요한 참고점이다. 한국닛산이 실제로 재진출을 결정한다면, 그 첫 신호탄은 십중팔구 이 3세대 리프가 될 가능성이 높다.</p>

<div class="checkpoint-box">
  <p><strong>체크포인트</strong></p>
  <ul>
    <li>닛산 리프는 <strong>2020년 이후 국내 미판매</strong> 상태이며, 재진출은 아직 소문 단계다.</li>
    <li>2010년 양산을 시작한 <strong>세계 최초의 대중형 양산 전기차</strong>로, 2019년 세계 최초 40만 대 판매를 돌파했다.</li>
    <li>3세대(2026년형)는 해치백에서 <strong>쿠페형 크로스오버</strong>로 완전히 바뀌었다.</li>
    <li>배터리는 52kWh(약 434km)·75kWh(약 488km) 2종, 미국 기준 시작가는 3만 달러 미만이다.</li>
    <li>해외 평가는 "실험적 개척자에서 전기차 주류로 정착했다"는 평가로 수렴한다.</li>
  </ul>
</div>
`.trim();

const specs = [
  {
    slug: 'byd-seal-sedan-review-summary-2026',
    headline: '"모델3 살 돈이면 이게 낫다"… BYD 씰 세단 시승기 종합',
    headlineShort: 'BYD 씰 세단 시승기 종합',
    description: 'BYD코리아가 2026년 2월 출시한 중형 전기 세단 씰(RWD 3,990만 원, 다이내믹 AWD 4,690만 원)의 국내 시승기들을 종합했다. 씨라이언6·7과 달리 정통 세단 차체를 택해 테슬라 모델3와 직접 경쟁하며, 82.56kWh 블레이드 배터리로 복합 407km, AWD는 제로백 3.8초를 기록한다.',
    subtitle: '씨라이언6·7이 SUV였다면, 씰은 세단이다. 가격은 3,990만 원부터, 시승기들은 "가격 대비 격차가 크지 않다"고 입을 모았다.',
    date: '2026-09-09',
    time: '09:30',
    sectionName: '리뷰',
    sectionHref: 'reviews.html',
    categoryLabel: '리뷰',
    categoryClass: 'cat-ev',
    heroImage: 'byd_seal_rwd_front.webp',
    heroAlt: 'BYD 씰 세단 전면, 후륜구동 트림',
    heroCaption: 'BYD 씰. 3,990만 원부터 시작하는 BYD코리아 최초의 정통 세단이다 <span class="cap-credit">ⓒ BYD코리아</span>',
    tags: ['BYD씰시승기', '씰가격', 'BYD코리아', '전기세단', '테슬라모델3비교'],
    categories: ['reviews', 'import', 'electric'],
    badge: '',
    badgeClass: '',
    dataSource: 'BYD코리아, 국내 매체 시승기 종합',
    imageCredit: 'BYD코리아, Wikimedia Commons',
    sources: [
      { name: '헤럴드경제', url: 'https://biz.heraldcorp.com/article/10611429' },
      { name: '디지털데일리', url: 'https://www.ddaily.co.kr/page/view/2026042721205017230' },
      { name: '아주경제', url: 'https://www.ajunews.com/view/20260419154229884' },
      { name: 'BYD코리아', url: 'https://www.bydauto.kr/brand/news-view/30' }
    ],
    body: bydSealBody
  },
  {
    slug: 'polestar2-review-summary-2026',
    headline: '"단종됐는데 왜 인기일까"… 폴스타2가 남긴 상품성 종합 리뷰',
    headlineShort: '폴스타2 종합 리뷰',
    description: '2026년 2월 국내 신차 판매가 사실상 종료된 폴스타2의 상품성을 정리했다. 절제된 스칸디나비아 디자인, 2026년형(해외) 기준 배터리 70kWh·WLTP 554km로 개선된 전비, 그리고 이 상품성이 중고 시장 강세로 이어지는 배경을 다룬다.',
    subtitle: '국내 신차는 살 수 없게 됐다. 그런데도 중고 시세가 강세인 이유는, 이 차가 애초에 잘 만든 전기차였기 때문이다.',
    date: '2026-09-09',
    time: '09:40',
    sectionName: '리뷰',
    sectionHref: 'reviews.html',
    categoryLabel: '리뷰',
    categoryClass: 'cat-ev',
    heroImage: 'polestar2_2026my_front.webp',
    heroAlt: '폴스타2 2026년형 전면, 스칸디나비아 미니멀 디자인',
    heroCaption: '폴스타2 2026년형. 국내 신차 판매는 종료됐지만 상품성에 대한 평가는 여전히 유효하다 <span class="cap-credit">ⓒ Polestar</span>',
    tags: ['폴스타2리뷰', '폴스타2단종', '폴스타2가격', '전기세단', '폴스타코리아'],
    categories: ['reviews', 'import', 'electric'],
    badge: '',
    badgeClass: '',
    dataSource: '폴스타, 국내외 매체 종합',
    imageCredit: 'Polestar',
    sources: [
      { name: '컨슈머와이드', url: 'https://www.consumerwide.com/news/articleView.html?idxno=63425' },
      { name: 'ArenaEV', url: 'https://www.arenaev.com/polestar_2_gets_tech_and_audio_boost_for_2026_model_year-news-4573.php' },
      { name: 'Fleet News', url: 'https://www.fleetnews.co.uk/news/range-and-technology-improvements-for-2026-polestar-2' }
    ],
    body: polestar2Body
  },
  {
    slug: 'nissan-leaf-review-summary-2026',
    headline: '"한국엔 없는 세계 최초 양산 전기차"… 닛산 리프, 3세대로 돌아온 이유',
    headlineShort: '닛산 리프 종합 리뷰',
    description: '2020년 닛산의 한국 철수와 함께 판매가 중단된 닛산 리프는 2026년 현재도 국내에 없다. 그러나 2010년 세계 최초의 대중형 양산 전기차로 역사를 시작해 누적 40만 대 판매를 돌파한 리프가, 해치백을 버리고 크로스오버로 거듭난 3세대의 해외 평가와 함께 어떤 의미를 갖는지 정리했다.',
    subtitle: '2020년 한국을 떠난 그 차가, 완전히 다른 모습으로 돌아왔다. 다만 아직 한국에는 없다.',
    date: '2026-09-09',
    time: '09:50',
    sectionName: '리뷰',
    sectionHref: 'reviews.html',
    categoryLabel: '리뷰',
    categoryClass: 'cat-ev',
    heroImage: 'nissan_leaf_white_front.webp',
    heroAlt: '닛산 리프 3세대, 크로스오버형 디자인',
    heroCaption: '3세대로 거듭난 닛산 리프. 해치백에서 쿠페형 크로스오버로 완전히 달라졌다 <span class="cap-credit">ⓒ Wikimedia Commons</span>',
    tags: ['닛산리프', '리프3세대', '닛산리프단종', '세계최초전기차', '한국닛산'],
    categories: ['reviews', 'import', 'electric'],
    badge: '',
    badgeClass: '',
    dataSource: '닛산, 해외 매체 종합',
    imageCredit: 'Wikimedia Commons',
    sources: [
      { name: 'Motor1', url: 'https://www.motor1.com/reviews/776188/2026-nissan-leaf-review/' },
      { name: 'Nissan Global Newsroom', url: 'https://global.nissannews.com/en/releases/release-5227ef5dbab9f1e0871062f0c003e618-nissan-leaf-first-electric-car-to-pass-400k-sales' },
      { name: '나무위키', url: 'https://namu.wiki/w/%EB%8B%9B%EC%82%B0%20%EB%A6%AC%ED%94%84' }
    ],
    body: nissanLeafBody
  }
];

fs.writeFileSync(path.join(__dirname, 'spec_import_rev.json'), JSON.stringify(specs, null, 2), 'utf8');
console.log('spec_import_rev.json written,', specs.length, 'articles');
