const fs = require('fs');
const path = require('path');

const ioniq5Body = `
<p>현대차 아이오닉5는 국내 전기 SUV 판매 1~2위를 다투는 스테디셀러다. 2026년형은 스탠다드 4,740만 원부터 트랙 전용 아이오닉5 N까지 가격 스펙트럼이 넓어졌고, 800V 아키텍처를 앞세운 급속충전은 여전히 핵심 무기로 꼽힌다. 다만 오너들 사이에서는 "적응이 필요한 부분이 있다"는 목소리도 꾸준히 나온다. 국내외 시승기·오너 후기·공식 가격표를 종합해 아이오닉5의 실제 상품성을 짚어봤다.</p>

<aside class="key-points">
  <h2 class="kp-title">📌 핵심 요약</h2>
  <ul>
    <li><strong>가격</strong>: 스탠다드 4,740만 원부터, 롱레인지 최상위 프레스티지 5,915만 원, 아이오닉5 N은 최대 8,142만 원</li>
    <li><strong>배터리·주행거리</strong>: 스탠다드 63.0kWh(복합 368km), 롱레인지 84.0kWh(최대 485km)</li>
    <li><strong>충전</strong>: 800V 시스템으로 10~80% 급속충전 약 18분(제조사 발표 기준)</li>
    <li><strong>오너 반응</strong>: 넓은 실내 공간은 호평, 기어 레버 방향·리어 와이퍼는 적응이 필요하다는 의견</li>
    <li><strong>경쟁 구도</strong>: EV6는 주행감성, EV3는 가격, 모델Y는 브랜드력으로 아이오닉5를 압박</li>
  </ul>
</aside>

<!--AD-->

<h2 id="sec1">1. 트림별 가격 — 스탠다드 4,740만 원부터 아이오닉5 N까지</h2>
<div class="article-img-wrap">
  <img src="../images/hyundai_ioniq5_front_detail.webp" alt="현대 아이오닉5 전면 헤드램프 디테일" loading="lazy">
  <p class="article-img-caption">▲ 아이오닉5 전면 파라메트릭 픽셀 헤드램프. 2026년형에도 디자인 정체성은 그대로 유지됐다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>2026년형 아이오닉5는 스탠다드와 롱레인지 두 파워트레인으로 나뉘고, 각각 2WD·AWD 구동방식을 고를 수 있다. 여기에 고성능 아이오닉5 N까지 더하면 사실상 4천만 원대 초반부터 8천만 원대까지 폭넓은 라인업이다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<thead><tr><th>트림</th><th>배터리</th><th>가격(개소세 인하분 반영)</th></tr></thead>
<tbody>
<tr><td>스탠다드 2WD E-VALUE+</td><td>63.0kWh</td><td>4,740만 원</td></tr>
<tr><td>스탠다드 2WD 익스클루시브</td><td>63.0kWh</td><td>5,030만 원</td></tr>
<tr><td>롱레인지 2WD E-Lite</td><td>84.0kWh</td><td>5,064만 원</td></tr>
<tr><td>롱레인지 2WD 익스클루시브</td><td>84.0kWh</td><td>5,450만 원</td></tr>
<tr><td>롱레인지 AWD 프레스티지</td><td>84.0kWh</td><td>5,915만 원</td></tr>
<tr><td>아이오닉5 N 에센셜</td><td>84.0kWh(N 전용)</td><td>7,879만 원</td></tr>
<tr><td>아이오닉5 N</td><td>84.0kWh(N 전용)</td><td>8,142만 원</td></tr>
</tbody>
</table>
</div>
<p>아이오닉5 N은 N 그린 부스트 작동 시 최고출력 650마력, 제로백 3.4초를 낸다. 다만 보조금 혜택이 사실상 없고 트랙 주행에 특화된 모델이라, 일상 주행보다는 극한의 퍼포먼스를 원하는 마니아층 수요가 대부분이라는 게 업계 평가다. 정확한 트림별 옵션 구성과 최신 가격은 <a href="https://www.hyundai.com/kr/ko/e/vehicles/the-new-ioniq5/price" class="inline-link-btn" target="_blank" rel="noopener">현대차 공식 홈페이지</a>에서 확인 가능하다.</p>

<h2 id="sec2">2. 800V 급속충전과 실사용 전비</h2>
<div class="article-img-wrap">
  <img src="../images/ioniq5_interior_dashboard.webp" alt="현대 아이오닉5 실내, 듀얼 커브드 디스플레이와 스티어링휠" loading="lazy">
  <p class="article-img-caption">▲ 아이오닉5 실내. 듀얼 12.3인치 디스플레이와 UVO 커넥티드 서비스가 기본 탑재된다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>아이오닉5의 상징과도 같은 무기는 800V 멀티 급속충전 시스템이다. 350kW급 초급속 충전기 기준으로 10%에서 80%까지 약 18분이면 채울 수 있다는 게 제조사 발표다. 다만 이는 최적 조건(적정 배터리 온도, 초급속 충전기 이용)에서의 수치이며, 완속충전기나 저온 환경에서는 체감 시간이 늘어난다는 점은 감안해야 한다. 실전비 측면에서는 롱레인지 2WD 기준 복합 전비가 5.0km/kWh 안팎으로 보고되는 사례가 많고, 고속도로 정속 주행에서는 이보다 낮아지는 경향이 있다는 게 오너 커뮤니티의 공통된 경험담이다.</p>

<h2 id="sec3">3. 오너들이 꼽는 장단점 — "기어 레버는 반대다"</h2>
<div class="article-img-wrap">
  <img src="../images/hyundai_ioniq5_gravity_gold.webp" alt="현대 아이오닉5 후측면, 그래비티 골드 색상" loading="lazy">
  <p class="article-img-caption">▲ 아이오닉5 그래비티 골드 색상. 레트로퓨처리즘 디자인은 출시 5년이 지난 지금도 신선하다는 평가가 많다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>클리앙·헤이딜러 등에 올라온 오너 후기를 종합하면, 가장 많이 언급되는 강점은 <strong>동급 최고 수준의 실내 공간</strong>이다. 플랫한 바닥과 슬라이딩 콘솔 덕분에 2열 거주성이 특히 좋다는 평가가 많다. 반면 적응이 필요한 부분으로는 <strong>일반적인 배치와 반대 방향인 기어 레버</strong>가 꼽힌다. 초기 인수 시 혼동을 겪는 오너가 적지 않다는 것이다. 리어 와이퍼가 없다는 점도 오랫동안 지적된 단점이었으나, 이는 2025년형부터 기본 품목으로 개선됐다. 일부 오너는 고속 주행 중 순간적인 출력 저하나 충전 중 정지 사례를 보고하기도 했는데, 빈도가 높은 고장은 아니지만 참고할 필요는 있다.</p>

<div class="info-box">
  <p><strong>알아두면 좋은 정보</strong></p>
  <p>아이오닉5는 2025년형부터 리어 와이퍼가 전 트림 기본 탑재로 바뀌었다. 중고차 매물을 볼 때는 연식별 사양 차이를 확인하는 게 좋다.</p>
</div>

<h2 id="sec4">4. EV6·EV3·모델Y와 비교하면</h2>
<div class="article-img-wrap">
  <img src="../images/hyundai_ioniq5_n_front.webp" alt="현대 아이오닉5 N, 고성능 트랙 전용 모델 전면" loading="lazy">
  <p class="article-img-caption">▲ 아이오닉5 N. 같은 E-GMP 플랫폼을 쓰는 EV6와 달리 박스형 디자인과 넓은 실내가 아이오닉5만의 포지션이다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>같은 E-GMP 플랫폼을 공유하는 기아 EV6와 비교하면 방향성이 뚜렷하게 갈린다. 아이오닉5는 복고와 미래 감성이 섞인 박스형 디자인과 넓은 실내 공간이 강점인 반면, EV6는 낮고 날렵한 루프라인에 스포츠 서스펜션을 얹어 <strong>주행감성과 핸들링</strong>에서 앞선다는 평가가 많다. 동승자를 많이 태우고 편안한 승차감을 우선한다면 아이오닉5, 스포티한 드라이빙을 즐기고 싶다면 EV6를 고르는 게 낫다는 게 공통된 조언이다. 소형 SUV 기아 EV3는 3천만 원대 후반부터 시작하는 가격으로 가성비를 앞세워 아이오닉5의 잠재 구매층 일부를 흡수하고 있고, 테슬라 모델Y는 슈퍼차저 충전 인프라와 브랜드 파워로 수입 전기 SUV 1위 자리를 지키고 있다. 아이오닉5는 이 셋 사이에서 <strong>공간·디자인·충전 속도</strong>를 앞세운 균형점을 찾는 모델이라 할 수 있다.</p>

<h2 id="summary" class="summary-box">5. 정리</h2>
<div class="checkpoint-box">
  <p><strong>구매 체크포인트</strong></p>
  <ul>
    <li>가격은 <strong>스탠다드 4,740만 원</strong>부터 시작하며, 실구매를 노린다면 보조금 규모를 먼저 확인해야 한다.</li>
    <li>800V 급속충전은 여전히 강점이지만, <strong>18분 완충은 초급속 충전기 기준</strong>이라는 점을 감안해야 한다.</li>
    <li>기어 레버 방향 등 <strong>초기 적응이 필요한 조작계</strong>가 있으니 시승 시 미리 확인하는 게 좋다.</li>
    <li>주행감성을 중시하면 EV6, 가격을 중시하면 EV3, 브랜드·충전 인프라를 중시하면 모델Y와 최종 비교를 권한다.</li>
  </ul>
</div>
`;

const ev6Body = `
<p>기아 EV6가 2026년형으로 넘어오며 전 트림 약 300만 원 수준의 가격 인하를 단행했다. 페이스리프트를 거치며 중앙까지 이어지는 주간주행등과 새로운 3스포크 스티어링휠 등 디자인도 다듬었다. 같은 E-GMP 플랫폼을 쓰는 아이오닉5의 '동생'처럼 보일 수 있지만, 시승기와 오너 후기를 모아보면 EV6만의 확실한 색깔이 드러난다.</p>

<aside class="key-points">
  <h2 class="kp-title">📌 핵심 요약</h2>
  <ul>
    <li><strong>가격</strong>: 스탠다드 라이트 4,660만 원부터, 롱레인지 GT라인 6,000만 원, GT 트림 별도</li>
    <li><strong>가격 인하</strong>: 2026년형 전 트림 약 300만 원 수준 인하</li>
    <li><strong>페이스리프트</strong>: 중앙 점등 DRL, 3스포크 스티어링휠, 어스 트림부터 주차 충돌방지 보조 기본화</li>
    <li><strong>GT</strong>: 듀얼모터 609PS(런치컨트롤 시 650PS), 제로백 3.5초</li>
    <li><strong>실전비</strong>: 오너 보고 기준 약 6~6.5km/kWh 안팎</li>
  </ul>
</aside>

<!--AD-->

<h2 id="sec1">1. 가격 — 전 트림 300만 원 인하, 라이트 4,660만 원부터</h2>
<div class="article-img-wrap">
  <img src="../images/kia_ev6_facelift_gray_front.webp" alt="기아 EV6 페이스리프트 전면, 그레이 색상" loading="lazy">
  <p class="article-img-caption">▲ 페이스리프트를 거친 EV6. 중앙까지 이어지는 주간주행등이 새로 적용됐다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>2026년형 EV6는 스탠다드와 롱레인지 두 배터리 사양으로 나뉘며, 트림은 라이트·에어·어스·GT라인 순으로 구성된다. 여기에 고성능 GT 트림이 최상위에 자리한다. 전 트림에 걸쳐 전년 대비 약 300만 원 수준의 가격 인하가 이뤄졌는데, 이는 스티어링 휠 진동 경고 등 안전 사양이 기본화된 것과 맞물린 조정이라는 분석이 나온다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<thead><tr><th>모델</th><th>트림</th><th>가격(친환경차 세제혜택 반영)</th></tr></thead>
<tbody>
<tr><td rowspan="3">EV6 스탠다드</td><td>라이트</td><td>4,660만 원</td></tr>
<tr><td>에어</td><td>5,140만 원</td></tr>
<tr><td>어스</td><td>5,540만 원</td></tr>
<tr><td rowspan="4">EV6 롱레인지</td><td>라이트</td><td>5,060만 원</td></tr>
<tr><td>에어</td><td>5,540만 원</td></tr>
<tr><td>어스</td><td>5,940만 원</td></tr>
<tr><td>GT라인</td><td>6,000만 원</td></tr>
</tbody>
</table>
</div>
<p>어스 트림부터는 전·측방 주차 충돌방지 보조와 원격 스마트 주차 보조 2가 기본 탑재된다. 최신 트림별 옵션과 가격은 <a href="https://www.kia.com/kr/vehicles/ev6/price" class="inline-link-btn" target="_blank" rel="noopener">기아 공식 홈페이지</a>에서 확인 가능하다.</p>

<h2 id="sec2">2. GT — 609마력 듀얼모터, 제로백 3.5초</h2>
<div class="article-img-wrap">
  <img src="../images/kia_ev6_facelift_rear.webp" alt="기아 EV6 페이스리프트 후측면, 그레이 색상" loading="lazy">
  <p class="article-img-caption">▲ EV6 후측면. 낮고 날렵한 루프라인이 EV6 디자인 정체성의 핵심이다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>고성능 GT 트림은 84kWh 배터리에 듀얼모터를 얹어 시스템 최고출력 609마력(런치컨트롤 사용 시 650마력)을 낸다. 제로백은 3.5초로, 국산 양산 전기차 중에서도 손꼽히는 가속 성능이다. GT 트림 가격은 별도이며, 정확한 금액은 <a href="https://www.kia.com/kr/vehicles/ev6-gt/price" class="inline-link-btn" target="_blank" rel="noopener">기아 EV6 GT 페이지</a>에서 확인 가능하다. 다만 고성능 전기차 특성상 실사용 전비는 일반 트림보다 떨어지는 편이라, 데일리카보다는 세컨드카나 드라이빙 취미를 위한 선택지로 보는 시각이 많다.</p>

<div class="info-box">
  <p><strong>알아두면 좋은 정보</strong></p>
  <p>2026년형부터는 전 트림에 스티어링 휠 그립 감지 경고 기능이 추가됐다. 손을 놓고 운전하는 습관이 있다면 경고음에 익숙해지는 시간이 필요할 수 있다.</p>
</div>

<h2 id="sec3">3. 실사용 전비와 오너 반응</h2>
<div class="article-img-wrap">
  <img src="../images/kia_ev6_facelift_interior.webp" alt="기아 EV6 페이스리프트 실내, 커브드 듀얼 디스플레이" loading="lazy">
  <p class="article-img-caption">▲ EV6 페이스리프트 실내. 커브드 듀얼 디스플레이와 신형 스티어링휠이 적용됐다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>오너 커뮤니티에 올라온 후기를 보면 실사용 전비는 대략 <strong>6~6.5km/kWh</strong> 수준으로 보고되는 경우가 많다. 대전~인천을 오가는 장거리 통근에 EV6를 쓴다는 한 오너는 왕복 전기료가 2만 원 안팎이라며 만족스럽다는 후기를 남기기도 했다. 승차감과 핸들링에 대해서는 "스포츠 서스펜션이 인상적이며, 원 페달 모드 등을 더해 스포티한 주행의 재미를 준다"는 평가가 반복적으로 등장한다. 다만 헤드램프 밝기가 아쉽다는 의견도 종종 보인다.</p>

<h2 id="sec4">4. 아이오닉5와의 차별점 — 디자인과 주행감성</h2>
<div class="article-img-wrap">
  <img src="../images/kia_ev6_official.jpg" alt="기아 EV6, 다크 그레이 색상 실외 주차" loading="lazy">
  <p class="article-img-caption">▲ EV6. 아이오닉5보다 낮은 전고와 쿠페형 실루엣이 특징이다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>같은 플랫폼을 쓰지만 EV6와 아이오닉5는 지향점이 확연히 다르다. 아이오닉5가 박스형 디자인으로 개방감과 실내 공간을 강조한다면, EV6는 낮고 날렵한 쿠페형 실루엣과 스포티한 주행 감각으로 차별화를 꾀한다. 헤이딜러·카로핀 등 비교 콘텐츠를 종합하면 "공간·개방감은 아이오닉5, 주행감·디자인은 EV6가 앞선다"는 평가가 대체적인 결론이다. 결국 두 모델 중 선택은 <strong>넓은 실내를 우선할지, 스포티한 주행을 우선할지</strong>에 달려 있다는 이야기다.</p>

<h2 id="summary" class="summary-box">5. 정리</h2>
<div class="checkpoint-box">
  <p><strong>구매 체크포인트</strong></p>
  <ul>
    <li>2026년형 EV6는 <strong>전 트림 약 300만 원 인하</strong>되며 가격 경쟁력이 개선됐다.</li>
    <li>고성능을 원한다면 <strong>GT(609~650마력, 제로백 3.5초)</strong>가 선택지지만 전비 저하는 감안해야 한다.</li>
    <li>실사용 전비는 <strong>6~6.5km/kWh</strong> 수준으로 보고되는 경우가 많다.</li>
    <li>아이오닉5와 비교하면 <strong>공간은 아이오닉5, 주행감성은 EV6</strong>가 앞선다는 평가가 우세하다.</li>
  </ul>
</div>
`;

const modelYBody = `
<p>테슬라 모델Y 주니퍼(페이스리프트)는 2026년 한 해 동안 가격이 롤러코스터를 탔다. 연초에는 4천만 원대까지 가격을 낮춰 "보조금 혜택을 노린 기습 인하"라는 평가를 받았지만, 4월과 7월 두 차례에 걸쳐 상위 트림 가격이 다시 올랐다. 그럼에도 국내 수입 전기차 판매 1위 자리는 굳건하다. 실사용 리뷰와 충전 인프라를 중심으로 모델Y의 현재 위치를 짚어봤다.</p>

<aside class="key-points">
  <h2 class="kp-title">📌 핵심 요약</h2>
  <ul>
    <li><strong>가격</strong>: RWD 5,299만 원, 롱레인지 6,314만 원, 론치 시리즈 7,300만 원(2026년 9월 기준)</li>
    <li><strong>가격 변동</strong>: 연초 4천만 원대 인하 이후, 4월·7월 두 차례 상위 트림 인상</li>
    <li><strong>주행거리(환경부 인증)</strong>: RWD 400km, 롱레인지 AWD 476km — 겨울철 저온에서는 체감 감소폭 큼</li>
    <li><strong>안전</strong>: 2026~2027년형이 美 IIHS '탑 세이프티 픽 플러스' 획득(상세 내용은 관련 기사 참고)</li>
    <li><strong>충전</strong>: 전국 슈퍼차저망이 핵심 강점, 최소 충전 시간은 약 30분 안팎</li>
  </ul>
</aside>

<!--AD-->

<h2 id="sec1">1. 가격 — 4천만 원대로 내렸다가, 두 번 올랐다</h2>
<div class="article-img-wrap">
  <img src="../images/tesla_modely_juniper_qs_6.webp" alt="테슬라 모델Y 주니퍼 전측면, 국내 주차장에서 촬영된 모습" loading="lazy">
  <p class="article-img-caption">▲ 국내 도로에서 만난 테슬라 모델Y 주니퍼. 그레이 색상과 국내 EV 전용 번호판이 눈에 띈다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>2026년 1월, 테슬라코리아는 모델Y 가격을 4천만 원대로 낮췄다. 보조금 혜택을 극대화해 실구매가를 끌어내리려는 전략이라는 해석이 나왔다. 그런데 4월 10일부터 롱레인지 AWD와 6인승 모델 Y L 가격이 400만~500만 원 인상됐고, 7월 1일에는 모델 3와 함께 프리미엄 RWD를 제외한 상위 두 트림이 각각 300만 원씩 다시 올랐다. 2026년 9월 현재 가격은 RWD 5,299만 원, 롱레인지 6,314만 원, 론치 시리즈 7,300만 원 수준이다. 보조금을 최대로 받으면 서울 기준 실구매가는 4,700만 원대까지 내려간다. 최신 가격과 구성은 <a href="https://www.tesla.com/ko_kr/modely" class="inline-link-btn" target="_blank" rel="noopener">테슬라 공식 홈페이지</a>에서 확인 가능하다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<thead><tr><th>트림</th><th>구동방식</th><th>환경부 인증 주행거리</th><th>가격(2026년 9월 기준)</th></tr></thead>
<tbody>
<tr><td>프리미엄 RWD</td><td>후륜구동</td><td>400km</td><td>5,299만 원</td></tr>
<tr><td>프리미엄 롱레인지</td><td>4륜구동(AWD)</td><td>476km</td><td>6,314만 원</td></tr>
<tr><td>론치 시리즈(퍼포먼스급)</td><td>4륜구동(AWD)</td><td>공식 발표 예정</td><td>7,300만 원</td></tr>
</tbody>
</table>
</div>

<h2 id="sec2">2. 실사용 리뷰 — RWD 400km, 겨울엔 얼마나 줄어들까</h2>
<div class="article-img-wrap">
  <img src="../images/tesla_modely_juniper_rear.webp" alt="테슬라 모델Y 주니퍼 후측면" loading="lazy">
  <p class="article-img-caption">▲ 모델Y 주니퍼 후측면. RWD 트림은 환경부 인증 기준 400km를 주행한다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>클리앙 등에 올라온 실사용 후기를 보면, RWD의 390~400km 주행거리는 "서울·경기권 도심 출퇴근과 주말 나들이 정도라면 부족하지 않다"는 평가가 많다. 다만 겨울철 영하 7도 안팎에서는 RWD 주행거리가 302km까지 줄어드는 사례가 보고돼, 한파가 잦은 지역이나 장거리 운전이 잦다면 롱레인지를 고려하는 게 낫다는 조언이 나온다. 20개월간 5.8만km를 주행한 한 오너는 "배터리 열화는 체감상 크지 않았지만, 겨울철 주행거리 감소는 확실히 있다"는 소감을 남겼다. 대형 SUV에서 넘어온 오너들은 "평생 해보지 못했던 배터리 걱정을 계속 하게 된다"는 솔직한 후기를 남기기도 했다.</p>

<h2 id="sec3">3. 충전 인프라 — 슈퍼차저가 만드는 체감 차이</h2>
<div class="article-img-wrap">
  <img src="../images/tesla_modely_juniper_interior2.webp" alt="테슬라 모델Y 실내, 센터 디스플레이에 충전 상태가 표시된 모습" loading="lazy">
  <p class="article-img-caption">▲ 모델Y 실내. 센터 디스플레이로 충전 상태와 주변 슈퍼차저 위치를 바로 확인할 수 있다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>모델Y의 실사용 만족도를 끌어올리는 핵심은 역시 <strong>슈퍼차저 네트워크</strong>다. 전국 고속도로 요지에 촘촘히 깔린 슈퍼차저 덕분에 장거리 이동 시 충전 계획을 세우는 부담이 다른 브랜드 전기차보다 훨씬 적다는 게 오너들의 공통된 의견이다. "고속도로와 슈퍼차저 조합이면 큰 문제가 없다"는 평가가 대표적이다. 다만 슈퍼차저에서도 완전 충전까지는 최소 30분가량 소요되므로, 급속충전 속도 자체는 800V 아키텍처를 쓰는 국산 경쟁 모델 대비 우위라고 보기는 어렵다. 결국 모델Y의 충전 경쟁력은 '속도'보다 '인프라의 양과 접근성'에서 나온다는 평가가 적절하다.</p>

<div class="info-box">
  <p><strong>알아두면 좋은 정보</strong></p>
  <p>2026~2027년형 모델Y는 강화된 기준의 美 IIHS 충돌시험에서 최고 등급인 '탑 세이프티 픽 플러스'를 받았다. 다만 안전벨트 미착용 경고 항목은 '보통(Marginal)' 판정을 받은 만큼, 관련 세부 내용은 카프리즘의 별도 안전등급 기사를 참고하면 도움이 된다.</p>
</div>

<h2 id="sec4">4. FSD·오토파일럿, 그리고 남은 논란</h2>
<div class="article-img-wrap">
  <img src="../images/tesla_modely_juniper_qs_1.webp" alt="테슬라 모델Y 주니퍼 정면, 국내 주차장에서 촬영된 모습" loading="lazy">
  <p class="article-img-caption">▲ 모델Y 주니퍼 정면. 얇아진 헤드램프 라인이 주니퍼 페이스리프트의 상징이다 <span class="cap-credit">ⓒ Wikimedia Commons</span></p>
</div>
<p>완전자율주행(FSD)과 오토파일럿은 여전히 모델Y를 둘러싼 뜨거운 감자다. 국내에서는 도로 인프라·법규 차이로 FSD 기능이 제한적으로만 제공되고 있고, 오토파일럿 사용 중 발생한 사고나 오작동 이슈가 해외에서 꾸준히 제기되는 것도 사실이다. 다만 이는 모델Y 한 차종만의 문제라기보다 자율주행 보조 기술 전반이 안고 있는 과제에 가깝다. 실사용자 다수는 "고속도로 정속 주행 보조로는 충분히 유용하다"면서도 "완전자율주행을 기대하고 구매하는 건 시기상조"라는 신중한 입장을 보인다.</p>

<h2 id="summary" class="summary-box">5. 정리</h2>
<div class="checkpoint-box">
  <p><strong>구매 체크포인트</strong></p>
  <ul>
    <li>2026년 9월 기준 가격은 <strong>RWD 5,299만 원, 롱레인지 6,314만 원</strong>이며, 연중 두 차례 인상이 있었던 만큼 구매 전 최신 가격을 다시 확인해야 한다.</li>
    <li>RWD 주행거리(400km)는 도심 위주라면 충분하지만, <strong>겨울철 체감 감소폭</strong>이 크다는 점은 감안해야 한다.</li>
    <li>모델Y의 실사용 경쟁력은 충전 속도보다 <strong>슈퍼차저 인프라의 접근성</strong>에서 나온다.</li>
    <li>FSD·오토파일럿은 보조 기능으로 유용하지만, <strong>완전자율주행을 기대하고 구매하는 것은 시기상조</strong>라는 게 중론이다.</li>
  </ul>
</div>
`;

const specs = [
  {
    slug: "hyundai-ioniq5-review-summary-2026",
    headline: `"기어 레버가 반대 방향"… 아이오닉5 오너들이 공통으로 짚은 적응 포인트`,
    headlineShort: "아이오닉5 종합 리뷰",
    description: "현대 아이오닉5 2026년형 가격은 스탠다드 4,740만 원부터 아이오닉5 N 8,142만 원까지 다양하다. 800V 급속충전과 넓은 실내는 여전한 강점이지만, 오너들은 기어 레버 방향 등 적응이 필요한 부분도 공통으로 짚었다. 국내외 시승기·오너 후기·경쟁모델(EV6·EV3·모델Y) 비교를 종합했다.",
    subtitle: "스탠다드 4,740만 원부터 아이오닉5 N 8,142만 원까지 — 트림별 가격과 실사용 전비, 오너 평가를 모두 모았습니다.",
    date: "2026-09-09",
    time: "09:00",
    sectionName: "리뷰",
    sectionHref: "reviews.html",
    categoryLabel: "EV 리뷰",
    categoryClass: "cat-ev",
    heroImage: "ioniq5_2026_front.webp",
    heroAlt: "현대 아이오닉5 2026년형 전면, 실외 주차",
    heroCaption: "현대 아이오닉5. 2026년형은 스탠다드 4,740만 원부터 아이오닉5 N까지 라인업이 넓어졌다 <span class=\"cap-credit\">ⓒ Wikimedia Commons</span>",
    tags: ["아이오닉5리뷰", "아이오닉5가격", "아이오닉5제원", "800V급속충전", "전기SUV비교"],
    categories: ["reviews", "electric", "domestic"],
    badge: "",
    badgeClass: "",
    dataSource: "종합",
    imageCredit: "Wikimedia Commons",
    sources: [
      { name: "겟차", url: "https://web.getcha.kr/blog/ioniq5-2026-trim-price-comparison-subsidy-guide" },
      { name: "클리앙", url: "https://www.clien.net/service/board/cm_car/16391262" },
      { name: "헤이딜러", url: "https://www.heydealer.com/blog/ioniq5-cons-guide-used-car-checkpoint" }
    ],
    body: ioniq5Body
  },
  {
    slug: "kia-ev6-review-summary-2026",
    headline: `"전 트림 300만 원 내렸다"… EV6 2026년형이 아이오닉5 대신 선택받는 이유`,
    headlineShort: "EV6 종합 리뷰",
    description: "기아 EV6 2026년형은 페이스리프트를 거치며 전 트림 약 300만 원 수준 가격을 인하했다. 스탠다드 라이트 4,660만 원부터 GT라인 6,000만 원, 고성능 GT(609~650마력)까지 라인업을 갖췄다. 실사용 전비와 오너 후기, 아이오닉5와의 디자인·주행감성 차이를 종합했다.",
    subtitle: "라이트 트림 4,660만 원부터 GT 트림까지, 페이스리프트 이후 달라진 EV6의 가격과 주행감성을 정리했습니다.",
    date: "2026-09-09",
    time: "09:10",
    sectionName: "리뷰",
    sectionHref: "reviews.html",
    categoryLabel: "EV 리뷰",
    categoryClass: "cat-ev",
    heroImage: "kia_ev6_gtline_white.webp",
    heroAlt: "기아 EV6 GT-Line 전측면, 백색 실외 주차",
    heroCaption: "기아 EV6. 2026년형은 페이스리프트를 거치며 전 트림 약 300만 원 수준 가격을 내렸다 <span class=\"cap-credit\">ⓒ Wikimedia Commons</span>",
    tags: ["EV6리뷰", "EV6가격", "EV6GT", "EV6페이스리프트", "전기차비교"],
    categories: ["reviews", "electric", "domestic"],
    badge: "",
    badgeClass: "",
    dataSource: "종합",
    imageCredit: "Wikimedia Commons",
    sources: [
      { name: "겟차", url: "https://web.getcha.kr/articles/lease-kia-ev6-facelift-2026" },
      { name: "jasonryu.net", url: "https://jasonryu.net/2025/07/01/new-car-kia-the-2026-ev6-and-ev6-gt/" },
      { name: "코리아데일리", url: "https://autos.koreadaily.com/%EA%B8%B0%EC%95%84-ev6-%EC%86%94%EC%A7%81-%EC%8B%9C%EC%8A%B9-%ED%8F%89%EA%B0%805%EB%8C%80-%EC%9E%A5%EC%A0%90%EA%B3%BC-3%EB%8C%80-%EB%8B%A8%EC%A0%90/" }
    ],
    body: ev6Body
  },
  {
    slug: "tesla-model-y-review-summary-2026",
    headline: `"4천만원대까지 내렸다가 다시 올랐다"… 모델Y 주니퍼, 2026년 가격이 롤러코스터를 탄 이유`,
    headlineShort: "모델Y 종합 리뷰",
    description: "테슬라 모델Y 주니퍼는 2026년 1월 4천만 원대로 가격을 낮췄다가 4월과 7월 두 차례 다시 인상됐다. 2026년 9월 기준 RWD 5,299만 원, 롱레인지 6,314만 원이다. 실사용 주행거리와 충전 인프라, FSD 논란까지 국내외 리뷰를 종합했다.",
    subtitle: "RWD 5,299만 원부터 롱레인지 6,314만 원까지, 두 차례 가격 인상 이후 달라진 모델Y의 실사용 리뷰와 충전 인프라를 짚어봤습니다.",
    date: "2026-09-09",
    time: "09:20",
    sectionName: "리뷰",
    sectionHref: "reviews.html",
    categoryLabel: "EV 리뷰",
    categoryClass: "cat-ev",
    heroImage: "tesla_modely_juniper_front.webp",
    heroAlt: "테슬라 모델Y 주니퍼 전측면, 실내 전시장에서 촬영된 모습",
    heroCaption: "테슬라 모델Y 주니퍼. 2026년 한 해 동안 가격이 인하와 인상을 오갔지만 수입 전기차 판매 1위 자리는 지키고 있다 <span class=\"cap-credit\">ⓒ Wikimedia Commons</span>",
    tags: ["모델Y리뷰", "모델Y가격", "모델Y주니퍼", "테슬라충전", "수입전기차비교"],
    categories: ["reviews", "electric", "import"],
    badge: "",
    badgeClass: "",
    dataSource: "종합",
    imageCredit: "Wikimedia Commons",
    sources: [
      { name: "다음뉴스", url: "https://v.daum.net/v/20260101141406233" },
      { name: "스마트리더", url: "https://smartleader.co.kr/tesla-model-y-juniper-2026-review/" },
      { name: "클리앙", url: "https://www.clien.net/service/board/cm_car/19015274" }
    ],
    body: modelYBody
  }
];

fs.writeFileSync(path.join(__dirname, 'spec_rev_a.json'), JSON.stringify(specs, null, 2), 'utf8');
console.log('spec_rev_a.json written');
