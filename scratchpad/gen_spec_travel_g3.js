const fs = require('fs');
const path = require('path');

const articles = [];

/* ============ 1. 평창효석문화제 ============ */
articles.push({
  slug: "pyeongchang-hyoseok-culture-festival-2026",
  headline: "\"소설 속 그 들녘이 실제로 있다니\"… 봉평 메밀꽃밭, 9월 13일까지 열려 있다",
  headlineShort: "2026 평창효석문화제 가이드",
  description: "이효석의 소설 '메밀꽃 필 무렵'의 배경지인 강원 평창군 봉평면에서 9월 4일부터 13일까지 열흘간 평창효석문화제가 열린다. 입장료 5,000원, 이효석문학관·달빛언덕 무료 개방, 오일장(9월 7·12일) 등 프로그램과 KTX 평창역 무료 셔틀, 주차 팁까지 정리했다.",
  subtitle: "이효석 문학관 옆 메밀꽃밭이 하얗게 뒤덮이는 열흘, 문학 산책부터 오일장까지 함께 걸어봅니다.",
  date: "2026-09-10",
  time: "10:10",
  sectionName: "국내여행",
  sectionHref: "travel.html",
  categoryLabel: "TRAVEL TIPS",
  categoryClass: "cat-blue",
  heroImage: "pyeongchang_hyoseok_buckwheat_sunset_path.webp",
  heroAlt: "노을이 물든 봉평 메밀꽃밭 사이 산책로",
  heroCaption: "해질녘 붉게 물든 봉평 메밀꽃밭 산책로. 2026 평창효석문화제는 이 메밀꽃밭 일대에서 9월 4일부터 13일까지 열린다 <span class=\"cap-credit\">ⓒ 대한민국 구석구석(한국관광공사)</span>",
  tags: ["평창효석문화제", "봉평메밀꽃", "이효석문학관", "메밀꽃필무렵", "9월가을축제"],
  categories: ["travel"],
  badge: "TRAVEL TIPS",
  badgeClass: "cat-blue",
  dataSource: "대한민국 구석구석 / 경향신문 / 카프리즘 기획 기사",
  imageCredit: "대한민국 구석구석(한국관광공사)",
  sources: [
    { name: "대한민국 구석구석 - 평창효석문화제", url: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=8c369704-303d-41fa-b6fa-f63bf8c5e96b" },
    { name: "경향신문", url: "https://www.khan.co.kr/article/202609011024001/" },
    { name: "동방일보", url: "https://www.dongbangilbo.co.kr/news/articleView.html?idxno=103883" }
  ],
  body: `
<div class="article-img-wrap">
  <img src="../images/pyeongchang_hyoseok_lantern_dusk_field.webp" alt="해질녘 등불이 켜진 봉평 메밀꽃밭 산책로와 노을 진 하늘" loading="lazy">
  <p class="article-img-caption">▲ 노을과 함께 등불이 켜진 메밀꽃밭 야경. 해가 완전히 지기 전 하늘에 붉은빛이 남아있는 시간대가 사진 찍기 가장 좋다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>

<p>강원 평창군 봉평면 일대가 다시 하얀 메밀꽃으로 뒤덮였다. <strong>2026 평창효석문화제가 9월 4일부터 13일까지 열흘간 봉평면 효석문화마을 일원(이효석길 157)에서 열린다.</strong> 이효석의 단편소설 '메밀꽃 필 무렵'(1936년 잡지 《조광》 발표)의 실제 배경지가 바로 이곳으로, 장돌뱅이 허생원과 성서방네 처녀가 하룻밤 인연을 맺는 무대가 됐던 봉평·대화 일대 장터의 정취를 지금도 느낄 수 있다.</p>

<aside class="key-points">
  <h2 class="kp-title">📌 핵심 요약</h2>
  <ul>
    <li><strong>기간</strong>: 2026년 9월 4일(금) ~ 13일(일), 열흘간</li>
    <li><strong>장소</strong>: 강원특별자치도 평창군 봉평면 효석문화마을 일원(이효석길 157)</li>
    <li><strong>입장료</strong>: 5,000원 (36개월 미만·장애인·국가유공자는 증빙 시 무료)</li>
    <li><strong>무료 개방</strong>: 이효석문학관, 달빛 언덕 (축제 기간 한정)</li>
    <li><strong>오일장</strong>: 9월 7일, 9월 12일</li>
    <li><strong>교통</strong>: KTX 평창역 ↔ 축제장 무료 셔틀버스 운행</li>
  </ul>
</aside>

<!--AD-->

<h2 id="story">1. 허생원과 성서방네 처녀, 그 봉평 장터</h2>
<div class="article-img-wrap">
  <img src="../images/pyeongchang_hyoseok_buckwheat_field_market.webp" alt="봉평 메밀꽃밭 사이에 마련된 알록달록한 장터 부스와 방문객들" loading="lazy">
  <p class="article-img-caption">▲ 메밀꽃밭 사이로 들어선 축제 부스. 소설 속 장터의 정취를 살려 구성됐다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>이효석(1907~1942)은 강원도 평창 출신 소설가로, 대표작 '메밀꽃 필 무렵'에서 봉평 장터를 오가는 장돌뱅이 허생원의 시선으로 흐드러진 메밀꽃밭을 서정적으로 그려냈다. 실제 작가의 고향이기도 한 봉평면에는 이효석문학관이 자리하고 있어, 그의 생애와 작품 세계를 살펴볼 수 있는 문학전시실과 문화체험 공간인 문학교실을 갖추고 있다. 축제 기간에는 이 문학관과 인근 달빛 언덕이 전면 무료로 개방돼, 입장료 없이도 소설의 배경을 거닐 수 있다.</p>
<div class="article-img-wrap">
  <img src="../images/pyeongchang_hyoseok_parade_yellow_hanbok.webp" alt="노란 전통 복장을 갖춰입은 참가자들이 열을 지어 행진하는 모습" loading="lazy">
  <p class="article-img-caption">▲ 노란 전통 복장을 갖춰입은 참가자들의 길놀이 행렬. 3구역 '축제 마당'에서 만날 수 있는 프로그램 중 하나다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>

<h2 id="program">2. 3개 구역으로 나뉜 축제장 — 무엇을 할 수 있나</h2>
<div class="article-img-wrap">
  <img src="../images/pyeongchang_hyoseok_stage_traditional_dance.webp" alt="야외무대에서 전통 의상을 입고 공연하는 무용수들, 뒤편 대형 스크린" loading="lazy">
  <p class="article-img-caption">▲ 축제마당(3구역)에서 펼쳐지는 봉평 민속 공연. 마당극과 길놀이 등 오감으로 즐기는 프로그램이 이 구역에 몰려 있다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>축제장은 성격이 다른 세 구역으로 나뉜다. <strong>1구역 '문화예술마당'</strong>은 메밀꽃밭과 이효석문학관을 중심으로 한 문학 탐방 공간으로, 송일봉 작가와 함께 걷는 '효석 100리길', 해설사와 함께하는 문학 산책, 이효석문학상 작가 북콘서트가 열린다. <strong>2구역 '체험 마당'</strong>에서는 섶다리·돌다리를 건너는 장돌뱅이 여정 체험, 낙엽 태우기 불멍, 음악과 함께하는 사랑의 엽서 쓰기, 메밀꽃밭 속 황금 메밀 찾기, 문학 열차, 스탬프 투어를 즐길 수 있다. <strong>3구역 '축제 마당'</strong>은 봉평 민속 공연과 마당극, 길놀이, 떡메치기, 오일장, 토속 먹거리로 채워진다.</p>

<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>2026 평창효석문화제 구역별 프로그램</caption>
<thead>
<tr><th>구역</th><th>테마</th><th>주요 프로그램</th></tr>
</thead>
<tbody>
<tr><td>1구역</td><td>문화예술마당</td><td>메밀꽃밭, 이효석문학관, 효석 100리길, 문학 산책, 북콘서트</td></tr>
<tr><td>2구역</td><td>체험 마당</td><td>섶다리·돌다리 장돌뱅이 여정, 불멍, 사랑의 엽서 쓰기, 황금 메밀 찾기, 문학 열차, 스탬프 투어</td></tr>
<tr><td>3구역</td><td>축제 마당</td><td>봉평 민속 공연, 마당극, 길놀이, 떡메치기, 오일장, 토속 먹거리</td></tr>
</tbody>
</table>
</div>

<div class="info-box">
<p class="info-box-title">📍 무료로 즐길 수 있는 것들</p>
<p>입장료 5,000원과 별개로 <strong>황금메밀찾기, 스탬프 투어, 음악사연 신청, 오후 6시 이후 불멍</strong>은 추가 비용 없이 참여할 수 있다. 이효석문학관과 달빛 언덕도 축제 기간 한정으로 무료 개방되므로, 예산을 아끼고 싶다면 이 항목들부터 챙기는 것이 좋다.</p>
</div>

<h2 id="peak">3. 메밀꽃, 지금이 절정 — 사진 명소는 어디</h2>
<div class="article-img-wrap">
  <img src="../images/pyeongchang_hyoseok_aerial_river_heart.webp" alt="드론으로 촬영한 봉평 흥정천 하트 모양 섬과 메밀꽃밭 전경" loading="lazy">
  <p class="article-img-caption">▲ 흥정천의 하트 모양 섬을 드론으로 내려다본 모습. 축제장 인근 대표 포토 스폿 중 하나다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>9월 6일 기준 현지 보도로는 "메밀꽃이 한창인 상황"으로 전해졌다. 다만 개화 정도는 해마다 기온과 강수량에 따라 달라지고 공식 개화율이 별도로 발표되지는 않으므로, 방문 직전 평창군 관광 안내 채널에서 최신 상황을 확인하는 편이 안전하다. 물레방앗간과 충주집, 흥정천 일대는 메밀꽃과 강원도 산자락이 함께 담기는 대표적인 포토 스폿으로 꼽히며, 해가 완전히 지기 전 하늘이 붉게 물드는 시간대에 조명이 하나둘 켜지는 산책로도 야간 촬영 명소다.</p>

<h2 id="oiljang">4. 오일장은 9월 7일과 12일뿐 — 놓치면 아쉬운 이유</h2>
<p>봉평 전통 오일장은 평소에도 열리지만, 축제 기간 중에는 9월 7일과 12일 단 이틀만 장이 선다. 소설 속 장돌뱅이의 무대였던 장터 분위기를 가장 실감 나게 느낄 수 있는 날이 바로 이 이틀이므로, 일정을 짤 때 우선 고려할 만하다. 토속 먹거리 부스와 떡메치기 체험도 이 시기에 맞춰 활기를 띤다. 12일은 토요일과 겹쳐 방문객이 가장 몰리는 날로 예상되니, 오전 11시 이전 도착을 권한다.</p>
<div class="article-img-wrap">
  <img src="../images/pyeongchang_hyoseok_arari_costume_group.webp" alt="전통 복장을 입고 물레를 돌리며 평창아라리 공연을 하는 참가자들" loading="lazy">
  <p class="article-img-caption">▲ 전통 복장을 갖추고 물레를 돌리는 '평창아라리' 공연. 오일장이 서는 날 함께 만날 수 있는 대표적인 민속 공연이다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<a href="https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=8c369704-303d-41fa-b6fa-f63bf8c5e96b" class="inline-link-btn" target="_blank" rel="noopener">대한민국 구석구석에서 확인 가능</a>

<h2 id="transport">5. KTX 평창역 무료 셔틀 — 주차는 임시주차장에서</h2>
<div class="article-img-wrap">
  <img src="../images/pyeongchang_hyoseok_aerial_village.webp" alt="드론으로 내려다본 효석문화마을 축제장 전경, 초록 들판과 천막이 늘어선 모습" loading="lazy">
  <p class="article-img-caption">▲ 드론으로 내려다본 효석문화마을 축제장 전경. 임시주차장은 이 마을 일대에 분산 배치된다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>축제 기간에는 봉평면 일대에 임시·지정주차장이 운영된다. 다만 정확한 구획과 배치는 매년 현장 상황에 따라 조정되는 편이라 사전 공지가 늦게 나오는 경우가 많으므로, 방문 당일에는 진입로에 설치된 안내 표지판과 현장 안내 요원의 지시를 따르는 것이 가장 확실하다. 자차보다 대중교통을 이용한다면 KTX 평창역과 축제장을 잇는 무료 셔틀버스를 이용할 수 있다. 차로 이동한다면 오전 11시 이전 도착을 권하며, 특히 오일장이 서는 9월 12일은 토요일과 겹쳐 점심 무렵이면 가까운 주차 공간이 대부분 찬다는 점을 감안해야 한다.</p>

<div class="checkpoint-box">
<p><strong>✅ 평창효석문화제, 이것만은 확인하세요</strong></p>
<p>· 축제 기간 <strong>9월 4일~13일</strong>, 장소는 봉평면 효석문화마을 일원(이효석길 157)<br>· 입장료 5,000원, 36개월 미만·장애인·국가유공자는 무료<br>· 이효석문학관·달빛 언덕은 축제 기간 무료 개방<br>· 전통 오일장은 <strong>9월 7일·12일</strong> 단 이틀뿐<br>· KTX 평창역↔축제장 무료 셔틀버스 운행, 주차는 임시주차장 이용</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>평창효석문화제는 소설 '메밀꽃 필 무렵'의 배경지에서 문학과 자연, 체험이 어우러지는 가을 축제다. 9월 13일까지 열흘간 이어지는 만큼, 아직 방문 계획이 없었다면 오일장이 서는 9월 12일이나 축제 막바지 평일을 노려볼 만하다. 입장료 5,000원으로 문학 산책과 체험 프로그램을 두루 즐길 수 있고, KTX 평창역 무료 셔틀을 이용하면 주차 걱정 없이 다녀올 수 있다. 정확한 개화 현황과 주차장 배치는 방문 직전 평창군 관광 안내 채널에서 다시 확인하는 것이 안전하다.</p>
</div>
`
});

/* ============ 2. 명량대첩축제 ============ */
articles.push({
  slug: "myeongnyang-daecheop-festival-2026",
  headline: "\"1척으로 3척만 상대하면 이긴다\"… 울돌목에 이순신의 13척이 다시 뜬다",
  headlineShort: "2026 명량대첩축제 가이드",
  description: "1597년 이순신 장군이 13척의 배로 일본 함대 133척을 물리친 명량대첩을 기리는 2026 명량대첩축제가 9월 11일부터 13일까지 진도 녹진관광지와 해남 우수영관광지 울돌목 일원에서 열린다. 1,200명 출정퍼레이드와 실감형 주제공연, 축하공연 라인업, 셔틀버스·주차 정보까지 정리했다.",
  subtitle: "13척으로 133척을 물리친 그날의 바다, 울돌목에서 사흘간 다시 펼쳐집니다.",
  date: "2026-09-10",
  time: "10:20",
  sectionName: "국내여행",
  sectionHref: "travel.html",
  categoryLabel: "TRAVEL TIPS",
  categoryClass: "cat-blue",
  heroImage: "myeongnyang_daecheop_fire_performance.webp",
  heroAlt: "야간 무대에서 펼쳐지는 명량대첩축제 불꽃 퍼포먼스와 관객석",
  heroCaption: "울돌목 주무대에서 펼쳐지는 명량대첩축제 야간 퍼포먼스. 2026년 축제는 9월 11일부터 13일까지 진도·해남에서 열린다 <span class=\"cap-credit\">ⓒ 대한민국 구석구석(한국관광공사)</span>",
  tags: ["명량대첩축제", "울돌목", "이순신장군", "진도녹진관광지", "해남우수영관광지"],
  categories: ["travel"],
  badge: "TRAVEL TIPS",
  badgeClass: "cat-blue",
  dataSource: "명량대첩축제 공식 / 아시아경제 / 카프리즘 기획 기사",
  imageCredit: "대한민국 구석구석(한국관광공사)",
  sources: [
    { name: "명량대첩축제 공식 홈페이지", url: "https://mldc.kr/web/" },
    { name: "아시아경제", url: "https://view.asiae.co.kr/article/2026083115255933873" },
    { name: "오마이뉴스", url: "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003263344" }
  ],
  body: `
<div class="article-img-wrap">
  <img src="../images/myeongnyang_daecheop_jindo_bridge_night.webp" alt="야간 조명이 켜진 진도대교 전경, 울돌목 바다 위로 다리가 가로지른다" loading="lazy">
  <p class="article-img-caption">▲ 야간 조명이 켜진 진도대교. 다리 아래가 바로 명량해전의 무대였던 울돌목이다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>

<p>1597년 9월 16일(음력), 이순신 장군이 단 13척의 배로 일본 수군 함대 133척을 물리친 명량대첩. <strong>이 승리를 기리는 2026 명량대첩축제가 9월 11일(금)부터 13일(일)까지 사흘간 진도군 녹진관광지와 해남군 우수영관광지, 울돌목 일원에서 열린다.</strong> 운영 시간은 매일 오전 11시부터 오후 9시 30분까지이며, 마지막 날인 13일은 오후 6시에 일찍 마무리된다.</p>

<aside class="key-points">
  <h2 class="kp-title">📌 핵심 요약</h2>
  <ul>
    <li><strong>기간</strong>: 2026년 9월 11일(금) ~ 13일(일), 사흘간</li>
    <li><strong>장소</strong>: 전남 진도군 녹진관광지, 해남군 우수영관광지(울돌목 일원)</li>
    <li><strong>운영 시간</strong>: 11:00~21:30 (13일은 18:00 조기 종료)</li>
    <li><strong>대표 프로그램</strong>: 1,200명 출정퍼레이드, 4막 실감형 주제공연, 축하공연</li>
    <li><strong>교통</strong>: 셔틀버스 제1노선(해남읍 서림공원↔축제장), 제2노선(각 주차장↔축제장, 수시 운행)</li>
    <li><strong>문의</strong>: 061-802-2192 / 061-286-5265 / 061-540-3407 외</li>
  </ul>
</aside>

<!--AD-->

<h2 id="history">1. 13척으로 133척을 이긴 바다 — 명량대첩이란</h2>
<div class="article-img-wrap">
  <img src="../images/myeongnyang_daecheop_torch_stage.webp" alt="횃불이 타오르는 야외 무대 위 '명량대첩' 현수막과 야간 조명" loading="lazy">
  <p class="article-img-caption">▲ '명량대첩' 현수막 아래 타오르는 횃불 연출. 축제 주제공연에서 당시의 긴박했던 전투 분위기를 재현한다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>명량대첩은 정유재란이 한창이던 1597년, 삼도수군통제사로 재임명된 이순신 장군이 전남 진도와 육지 사이 좁은 해협인 명량(울돌목)에서 일본 수군을 대파한 전투다. 당시 조선 수군은 단 13척, 맞선 일본 함대는 133척에 달해 전력 차이가 10배가 넘었다. 이순신은 "신에게는 아직 12척의 배가 있습니다(상유십이척)"라는 말로 유명한 장계를 올린 뒤, 물살이 빠르고 수심이 얕아 큰 배가 자유롭게 움직이기 어려운 울돌목의 지형을 전술적으로 활용해 승리를 이끌어냈다. 좁은 물목에서는 아무리 대규모 함대라도 한 번에 소수의 배만 진입할 수 있었고, 이순신은 이를 이용해 1대 30이 아닌 1대 3 정도의 국지전으로 전투 구도를 바꿨다는 것이 정설이다.</p>
<div class="article-img-wrap">
  <img src="../images/myeongnyang_daecheop_banner_performance.webp" alt="야외무대 위 대형 현수막을 배경으로 펼쳐지는 명량대첩 주제공연" loading="lazy">
  <p class="article-img-caption">▲ 임진왜란 발발부터 명량해전 승리까지를 다룬 주제공연의 한 장면. 대형 현수막에 당시 상황을 담은 문구가 함께 표시된다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>

<h2 id="opening">2. 개막일(9/11) — 1,200명이 진도대교를 건넌다</h2>
<div class="article-img-wrap">
  <img src="../images/myeongnyang_daecheop_flag_parade.webp" alt="오색 깃발을 든 전통 복장 참가자들의 명량대첩축제 행렬" loading="lazy">
  <p class="article-img-caption">▲ 오색 깃발을 앞세운 출정퍼레이드 행렬. 해남에서 출발해 진도대교를 건너 진도 주무대까지 이어진다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>축제 첫날인 9월 11일 개막식은 진도 녹진관광지 주무대에서 열린다. 가장 눈에 띄는 순서는 약 1,200명이 참여하는 <strong>출정퍼레이드</strong>로, 해남에서 출발해 울돌목 위 진도대교를 건너 진도 주무대까지 이어지는 대규모 행렬이다. 이어 오후 7시 30분에는 임진왜란 발발부터 명량해전 승리까지의 과정을 4막으로 구성한 <strong>융복합 실감형 주제공연</strong>이 펼쳐진다. 첫날 저녁 시간대에 방문한다면 이 두 프로그램을 놓치지 않는 것이 관건이다.</p>

<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>2026 명량대첩축제 날짜별 주요 프로그램</caption>
<thead>
<tr><th>날짜</th><th>주요 내용</th></tr>
</thead>
<tbody>
<tr><td>9/11(금)</td><td>진도 녹진관광지 개막식, 1,200명 출정퍼레이드(해남→진도대교→진도), 4막 실감형 주제공연(19:30)</td></tr>
<tr><td>9/12(토)</td><td>주제공연(19:30), 김장훈·송가인·에녹 축하공연, 심용환 역사 토크&쇼, 청소년 K-pop 경연</td></tr>
<tr><td>9/13(일)</td><td>명랑 트롯한마당, 진도 평화의 만가 행렬, 폐막(18:00 조기 종료)</td></tr>
</tbody>
</table>
</div>

<h2 id="weekend">3. 주말(9/12~13) — 축하공연과 역사 토크쇼</h2>
<p>둘째 날인 9월 12일에도 오후 7시 30분 주제공연이 이어지며, 가수 김장훈·송가인·에녹 등이 출연하는 축하공연과 함께 역사강사 심용환의 역사 토크&쇼, 청소년 K-pop 경연이 함께 열린다. 마지막 날인 13일은 명랑 트롯한마당과 진도 평화의 만가 행렬로 사흘간의 일정을 마무리하며, 이날은 오후 6시에 조기 종료되므로 일정을 짤 때 유의해야 한다.</p>

<div class="article-img-wrap">
  <img src="../images/myeongnyang_daecheop_traditional_dance_circle.webp" alt="색동 한복을 입은 참가자들이 원을 그리며 강강술래를 도는 모습" loading="lazy">
  <p class="article-img-caption">▲ 원을 그리며 도는 강강술래 공연. 우수영 강강술래는 축제 기간 내내 만날 수 있는 대표 상설 프로그램이다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<div class="info-box">
<p class="info-box-title">📍 진도·해남 상설 공연도 놓치지 말 것</p>
<p>축제 기간 내내 <strong>우수영 강강술래, 수문장 교대식, 청소년 국악향연, 명량의 군무, 진도아리랑공연, 울돌목 국악향연, 통제영무예단, 진도 씻김굿</strong> 등 지역 전통 공연도 함께 운영된다. 대형 주제공연 시간이 맞지 않는다면 이런 상설 공연 위주로 관람 코스를 짜는 것도 방법이다.</p>
</div>

<!--AD-->

<h2 id="transport">4. 셔틀버스 2개 노선 — 주차는 지정 주차장에서</h2>
<div class="article-img-wrap">
  <img src="../images/myeongnyang_daecheop_honor_guard_gate.webp" alt="전통 갑옷과 깃발을 갖춘 의장대가 문 앞에서 도열한 모습" loading="lazy">
  <p class="article-img-caption">▲ 축제장 입구에서 도열한 전통 의장대. 개막식 전후로 곳곳에서 볼 수 있는 장면이다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>축제 측이 안내하는 교통 수단은 셔틀버스 2개 노선이다. <strong>제1노선</strong>은 해남읍 서림공원과 축제장을 오가며, <strong>제2노선</strong>은 각 지정 주차장과 축제장 사이를 수시로 운행한다. 다만 세부 시간표와 정확한 주차장 위치는 공식 홈페이지의 리플렛과 안내도를 통해 확인하는 것이 가장 정확하다. 진도·해남 두 지역에 걸쳐 행사장이 나뉘어 있는 만큼, 방문 전 어느 쪽 관광지(녹진관광지 또는 우수영관광지)를 먼저 둘러볼지 동선을 미리 정해두는 편이 헷갈리지 않는다.</p>
<a href="https://mldc.kr/web/" class="inline-link-btn" target="_blank" rel="noopener">명량대첩축제 공식 홈페이지에서 확인 가능</a>

<h2 id="tips">5. 방문 전 체크할 것들</h2>
<div class="article-img-wrap">
  <img src="../images/myeongnyang_daecheop_briefing_session.webp" alt="회의실 테이블에 둘러앉아 축제 준비 상황을 논의하는 관계자들" loading="lazy">
  <p class="article-img-caption">▲ 축제 준비 상황을 점검하는 관계자 회의 모습. 매년 프로그램 세부 사항은 개막 직전까지 조정되는 경우가 많다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>야간 주제공연과 불꽃 연출이 포함된 프로그램이 많은 만큼, 저녁 시간대 방문객이 집중되는 경향이 있다. 개막일인 9월 11일 저녁과 축하공연이 몰린 12일 저녁은 특히 혼잡할 가능성이 높으므로, 출정퍼레이드나 주제공연을 볼 계획이라면 시작 최소 30분 전 도착을 권한다. 진도와 해남 두 지역에 걸쳐 행사장이 나뉘어 있어 이동 시간도 여유 있게 잡아야 하며, 정확한 시간표와 공연 순서는 방문 직전 공식 채널에서 다시 확인하는 것이 안전하다.</p>

<div class="checkpoint-box">
<p><strong>✅ 명량대첩축제, 이것만은 확인하세요</strong></p>
<p>· 축제 기간 <strong>9월 11일~13일</strong>, 장소는 진도 녹진관광지·해남 우수영관광지 울돌목 일원<br>· 운영 시간 11:00~21:30 (13일은 18:00 조기 종료)<br>· 개막일 1,200명 출정퍼레이드와 4막 실감형 주제공연이 핵심 볼거리<br>· 셔틀버스는 해남읍 서림공원 노선과 지정 주차장 노선 2개로 운영<br>· 우수영 강강술래 등 지역 상설 공연도 함께 관람 가능</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>명량대첩축제는 13척의 배로 133척을 물리친 이순신 장군의 승리를 진도와 해남 두 지역이 함께 기리는 역사 재현 축제다. 개막일의 대규모 출정퍼레이드와 실감형 주제공연, 주말의 축하공연과 역사 토크쇼까지 사흘간 프로그램이 촘촘하다. 두 지역에 걸쳐 행사장이 나뉘어 있는 만큼 셔틀버스 노선과 동선을 미리 확인하고, 저녁 시간대 혼잡에 대비해 여유 있게 도착하는 것이 좋다.</p>
</div>
`
});

/* ============ 3. 진안홍삼축제 ============ */
articles.push({
  slug: "jinan-red-ginseng-festival-2026",
  headline: "\"국내 유일 고원지대가 키운 홍삼\"… 진안, 마이산 아래서 사흘간 삼며든다",
  headlineShort: "2026 진안홍삼축제 가이드",
  description: "전북 진안군 마이산 북부 일원에서 9월 18일부터 20일까지 2026 진안홍삼축제가 열린다. 9월 17일 진안읍 천변 전야제(홍삼빛 낙화놀이)를 시작으로, 홍삼한상·홍삼명인교실 등 체험 프로그램과 홍삼 구매 팁, 셔틀버스·주차 정보까지 정리했다.",
  subtitle: "국내 유일 고원지대 마이산 아래서 자란 홍삼, 사흘간 맛보고 배우고 사 오는 법을 정리했습니다.",
  date: "2026-09-10",
  time: "10:30",
  sectionName: "국내여행",
  sectionHref: "travel.html",
  categoryLabel: "TRAVEL TIPS",
  categoryClass: "cat-blue",
  heroImage: "jinan_ginseng_harvest_closeup.webp",
  heroAlt: "갓 수확한 홍삼(수삼) 뿌리 더미를 클로즈업한 모습",
  heroCaption: "갓 수확한 진안 수삼. 국내 유일 고원지대인 진안고원의 서늘한 기후와 마이산 자락이 홍삼 재배에 최적의 조건을 만든다 <span class=\"cap-credit\">ⓒ 대한민국 구석구석(한국관광공사)</span>",
  tags: ["진안홍삼축제", "마이산", "진안홍삼", "고랭지인삼", "9월가을축제"],
  categories: ["travel"],
  badge: "TRAVEL TIPS",
  badgeClass: "cat-blue",
  dataSource: "진안군 문화관광 / 한국축제신문 / 카프리즘 기획 기사",
  imageCredit: "대한민국 구석구석(한국관광공사)",
  sources: [
    { name: "진안군 문화관광 - 진안홍삼축제", url: "https://www.jinan.go.kr/festival/" },
    { name: "대한민국 구석구석 - 진안홍삼축제", url: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=fdb11408-6de8-46ea-b051-faac6fc020a7" },
    { name: "한국축제신문", url: "https://www.kfestival.kr/news/504535" }
  ],
  body: `
<div class="article-img-wrap">
  <img src="../images/jinan_ginseng_aerial_night_market.webp" alt="드론으로 내려다본 진안홍삼축제 야간 행사장, 대형 천막과 조명이 늘어선 전경" loading="lazy">
  <p class="article-img-caption">▲ 드론으로 내려다본 진안홍삼축제 야간 행사장. 마이산 북부 일원에 대규모 천막과 부스가 들어선다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>

<p>'홍삼의 매력에 삼며들다!'를 슬로건으로 내건 2026 진안홍삼축제가 <strong>9월 18일부터 20일까지 사흘간 전북특별자치도 진안군 마이산 북부 일원에서 열린다.</strong> 하루 앞선 9월 17일에는 진안읍 천변에서 축제 개막을 알리는 전야제가 먼저 열리며, 이곳에서는 이번 축제의 새로운 시도인 '홍삼빛 낙화놀이'가 처음 선보인다.</p>

<aside class="key-points">
  <h2 class="kp-title">📌 핵심 요약</h2>
  <ul>
    <li><strong>전야제</strong>: 2026년 9월 17일(목), 진안읍 천변, 홍삼빛 낙화놀이</li>
    <li><strong>본 행사</strong>: 9월 18일(금) ~ 20일(일), 마이산 북부 일원</li>
    <li><strong>입장료</strong>: 무료 (일부 체험 프로그램은 참가비 별도)</li>
    <li><strong>대표 프로그램</strong>: 산골愛홍삼한상, 홍삼명인교실, 홍삼깍두기 담그GO 나누GO, 홍삼바비큐존</li>
    <li><strong>구매</strong>: 홍삼판매부스·수삼판매부스·농산물판매부스, 온라인은 진안군 농특산물 쇼핑몰(네이버 스마트스토어)</li>
    <li><strong>문의</strong>: 진안군청 063-430-2393 (09:00~18:00)</li>
  </ul>
</aside>

<!--AD-->

<h2 id="story">1. 국내 유일 고원지대가 키운 홍삼</h2>
<div class="article-img-wrap">
  <img src="../images/jinan_ginseng_umbrella_audience.webp" alt="파라솔이 늘어선 야외 관람석에서 공연을 지켜보는 축제 방문객들" loading="lazy">
  <p class="article-img-caption">▲ 파라솔 아래 마련된 야외 관람석. 마이산을 배경으로 각종 공연과 체험이 이어진다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>진안군이 자리한 진안고원은 국내에서 유일한 고원지대로 꼽힌다. 마이산의 정기를 품은 이 고원 지형은 일교차와 계절별 기온차가 뚜렷하고 주변 지역보다 서늘한 기후를 갖춰, 인삼 재배에 유리한 조건을 만든다. 여름철 30도 이상 기온이 이어지는 기간이 30일 이내로 짧고, 산지를 새로 개척한 초작지 재배가 많아 병충해도 상대적으로 적다는 것이 지역 설명이다. 이런 환경에서 자란 진안 인삼은 사포닌과 진세노사이드 성분을 다량 함유해, 홍삼 가공용으로는 최상급 품질을 인정받고 있다.</p>

<h2 id="schedule">2. 전야제부터 본 행사까지 — 나흘의 일정</h2>
<div class="article-img-wrap">
  <img src="../images/jinan_ginseng_basket_float_parade.webp" alt="대형 홍삼 바구니 조형물 뒤로 전통 복장을 입고 행진하는 풍물단" loading="lazy">
  <p class="article-img-caption">▲ 대형 홍삼 바구니 조형물과 풍물단 행렬. 마이산 자락을 배경으로 한 축제장의 상징적인 장면이다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>축제는 9월 17일 진안읍 천변에서 열리는 전야제로 문을 연다. 이날 처음 선보이는 '홍삼빛 낙화놀이'는 전통 낙화놀이에 축제 테마를 접목한 프로그램으로, 본 행사 전날 밤 분위기를 미리 끌어올린다. 이어 9월 18일부터 20일까지 사흘간 마이산 북부 일원에서 본 행사가 이어지며, 낮에는 체험·판매 부스, 저녁에는 무대 공연이 중심이 된다. 공연 라인업으로는 어린이 동반 가족을 겨냥한 티니핑 싱어롱쇼, 흥을 돋우는 홍삼에너지 랜덤 플레이댄스, 35사단 군악대 공연 등이 예정돼 있다.</p>
<div class="article-img-wrap">
  <img src="../images/jinan_ginseng_energy_dance_parade.webp" alt="치어리더 복장을 한 참가자들이 거리에서 홍삼에너지 랜덤 플레이댄스를 즐기는 모습" loading="lazy">
  <p class="article-img-caption">▲ 거리에서 펼쳐지는 '홍삼에너지 랜덤 플레이댄스'. 세대와 관계없이 함께 참여할 수 있는 주말 인기 프로그램이다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>

<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>2026 진안홍삼축제 일정 요약</caption>
<thead>
<tr><th>날짜</th><th>장소</th><th>주요 내용</th></tr>
</thead>
<tbody>
<tr><td>9/17(목)</td><td>진안읍 천변</td><td>전야제, 홍삼빛 낙화놀이(신규)</td></tr>
<tr><td>9/18(금)</td><td>마이산 북부 일원</td><td>축제 개막, 체험·판매 부스 운영 시작</td></tr>
<tr><td>9/19(토)</td><td>마이산 북부 일원</td><td>티니핑 싱어롱쇼, 홍삼에너지 랜덤 플레이댄스 등 주말 공연</td></tr>
<tr><td>9/20(일)</td><td>마이산 북부 일원</td><td>35사단 군악대 공연, 폐막</td></tr>
</tbody>
</table>
</div>

<h2 id="program">3. 홍삼 담그고, 먹고, 배우고 — 체험 프로그램</h2>
<div class="article-img-wrap">
  <img src="../images/jinan_ginseng_fishing_pond_kids.webp" alt="아이들이 야외 낚시터 체험 부스에서 뜰채로 무언가를 건져 올리는 모습" loading="lazy">
  <p class="article-img-caption">▲ 아이들이 참여하는 체험 부스. 진안홍삼축제는 홍삼 테마 프로그램과 함께 세대별 놀거리도 폭넓게 갖췄다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>이번 축제에서만 즐길 수 있는 대표 프로그램으로는 <strong>산골愛홍삼한상, 홍삼깍두기 담그GO 나누GO, 홍삼명인교실</strong>이 꼽힌다. 여기에 홍삼바비큐존, 홍삼스파&홍삼한상, 홍삼파워존, 진안홍삼빙고 등 온 가족이 함께 참여할 수 있는 체험형 콘텐츠가 더해진다. 홍삼을 활용한 깍두기 담그기, 바비큐, 떡볶이 나눔 같은 먹거리 프로그램은 물론, 마을축제조직위원회가 운영하는 체험 부스와 전통 놀이도 별도로 마련돼 세대별 맞춤형 즐길 거리를 갖췄다.</p>

<h2 id="buy">4. 홍삼 사 올 때 확인할 것</h2>
<div class="article-img-wrap">
  <img src="../images/jinan_ginseng_game_experience.webp" alt="빨간 모자를 쓴 참가자들이 물통을 놓고 게임 체험을 즐기는 모습" loading="lazy">
  <p class="article-img-caption">▲ 축제 체험 부스에서 게임에 참여하는 방문객들. 체험 부스 곳곳에서 홍삼을 주제로 한 이벤트가 함께 진행된다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>
<p>축제장에는 홍삼판매부스, 수삼(생삼)판매부스, 농산물판매부스가 함께 운영된다. 현장에서 구매할 계획이라면 <strong>포장에 표기된 원산지(진안산 여부), 재배연근(통상 6년근 표기), 진공포장 여부</strong>를 먼저 확인하는 것이 좋다. 현장 방문이 어렵다면 진안군 농특산물 쇼핑몰(네이버 스마트스토어)을 통한 온라인 구매도 가능하다. 입장은 무료지만 홍삼명인교실 등 일부 체험·시식 프로그램은 참가비가 있을 수 있으므로, 인기 프로그램은 현장 안내소에서 사전 접수 여부를 확인하는 편이 헛걸음을 줄인다.</p>
<div class="info-box">
<p class="info-box-title">📍 홍삼과 인삼, 무엇이 다른가</p>
<p>인삼(수삼)은 밭에서 갓 캐낸 생삼을 뜻하고, 홍삼은 이 수삼을 씻고 찌고 말리는 과정을 거쳐 만든 가공품이다. 찌고 말리는 과정에서 사포닌 성분이 농축되고 보존 기간도 길어져, 선물용으로는 홍삼이 더 많이 선택된다. 축제장에서는 두 형태를 모두 구매할 수 있으므로 용도에 맞게 고르면 된다.</p>
</div>
<a href="https://www.jinan.go.kr/festival/" class="inline-link-btn" target="_blank" rel="noopener">진안군 문화관광 홈페이지에서 확인 가능</a>

<h2 id="transport">5. 셔틀버스로 이동하기 — 마이산 자락 주차 요령</h2>
<p>진안군은 축제 기간에 맞춰 별도의 셔틀버스를 운영하며, 공식 홈페이지에서 행사장 안내도와 셔틀버스 노선 안내도를 확인할 수 있다. 마이산 북부 일원은 등산객과 축제 방문객이 겹치는 주말(9/19~20)에 차량 정체가 발생하기 쉬우므로, 가능하면 셔틀버스나 대중교통을 우선 고려하는 것이 좋다. 자가용을 이용한다면 오전 이른 시간에 도착해 지정 주차구역을 안내받는 편이 안전하다.</p>
<div class="article-img-wrap">
  <img src="../images/jinan_ginseng_fireworks_night.webp" alt="마이산 자락 위로 밤하늘을 수놓는 진안홍삼축제 폐막 불꽃놀이" loading="lazy">
  <p class="article-img-caption">▲ 마이산 자락 위로 펼쳐지는 폐막 불꽃놀이. 사흘간의 진안홍삼축제는 이 불꽃과 함께 마무리된다 <span class="cap-credit">ⓒ 대한민국 구석구석(한국관광공사)</span></p>
</div>

<div class="checkpoint-box">
<p><strong>✅ 진안홍삼축제, 이것만은 확인하세요</strong></p>
<p>· 전야제 <strong>9월 17일</strong> 진안읍 천변, 본 행사 <strong>9월 18일~20일</strong> 마이산 북부 일원<br>· 입장 무료, 일부 체험·시식 프로그램은 참가비 별도<br>· 대표 프로그램은 산골愛홍삼한상·홍삼깍두기 담그GO 나누GO·홍삼명인교실<br>· 홍삼 구매 시 원산지·재배연근·진공포장 여부 확인<br>· 주말은 마이산 등산객과 겹쳐 혼잡, 셔틀버스 이용 권장</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>진안홍삼축제는 국내 유일 고원지대인 진안고원에서 자란 홍삼을 주제로, 체험과 먹거리, 구매까지 한 자리에서 해결할 수 있는 축제다. 9월 17일 전야제의 홍삼빛 낙화놀이를 시작으로 18~20일 본 행사까지 나흘간 이어지며, 마이산을 배경으로 한 야외 공연과 세대별 체험 부스가 골고루 준비돼 있다. 주말에는 등산객과 방문객이 겹쳐 혼잡할 수 있는 만큼 셔틀버스 이용을 우선 고려하고, 홍삼을 구매할 때는 원산지와 재배연근 표기를 꼼꼼히 확인하는 것이 좋다.</p>
</div>
`
});

fs.writeFileSync(path.join(__dirname, 'spec_travel_g3.json'), JSON.stringify(articles, null, 2), 'utf8');
console.log(`wrote ${articles.length} articles to spec_travel_g3.json`);
