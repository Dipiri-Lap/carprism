const fs = require('fs');
const path = require('path');

const articles = [];

/* ============ 1. 파주포크페스티벌 ============ */
articles.push({
  slug: "paju-folk-festival-2026",
  headline: "\"세대를 넘어 하나 된 무대\"… 2026 파주포크페스티벌, 임진각의 가을밤을 적시고 갔다",
  headlineShort: "2026 파주포크페스티벌 현장 정리",
  description: "2026 파주포크페스티벌이 9월 4~5일 문산행복센터와 임진각 평화누리공원에서 '뉴 웨이브(New Wave)'를 주제로 열렸다. 전석 무료로 진행된 이번 축제의 라인업과 웨이브존·바이브존 관람 방식을 정리하고, 축제를 놓쳤어도 즐길 수 있는 평화누리공원 상시 명소와 주차·교통 정보까지 함께 담았다.",
  subtitle: "김창완밴드부터 신예까지 세대를 아우른 무대는 막을 내렸지만, 축제가 열렸던 임진각 평화누리공원은 언제 가도 볼거리가 남아 있습니다.",
  date: "2026-09-10",
  time: "09:40",
  sectionName: "국내여행",
  sectionHref: "travel.html",
  categoryLabel: "TRAVEL TIPS",
  categoryClass: "cat-blue",
  heroImage: "paju_imjingak_windhill2.webp",
  heroAlt: "임진각 평화누리공원 바람의 언덕에서 자전거를 타는 방문객들과 풍차 조형물",
  heroCaption: "임진각 평화누리공원 바람의 언덕. 2026 파주포크페스티벌 본공연이 열렸던 잔디광장과 가까운 상시 명소다 <span class=\"cap-credit\">ⓒ 한국관광공사</span>",
  tags: ["파주포크페스티벌", "임진각평화누리공원", "파주가볼만한곳", "바람의언덕", "평화곤돌라"],
  categories: ["travel"],
  badge: "TRAVEL TIPS",
  badgeClass: "cat-blue",
  dataSource: "파주문화재단 / 지이코노미 / 파주에서신문",
  imageCredit: "한국관광공사",
  sources: [
    { name: "지이코노미", url: "https://www.geconomy.co.kr/news/article.html?no=322797" },
    { name: "파주에서신문", url: "https://www.atpaju.com/news/articleView.html?idxno=45788" },
    { name: "생생투데이", url: "https://www.sstoday.co.kr/news/993064" }
  ],
  body: `
<div class="article-img-wrap">
<img src="../images/paju_imjingak_spot.webp" alt="임진각 평화누리공원 잔디광장과 주변 시설 전경" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 임진각 평화누리공원 전경. 2026 파주포크페스티벌 본공연 무대가 이 잔디광장 야외무대에 마련됐다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>

<p>지난 9월 4일부터 5일까지 이틀간, 경기 파주 문산행복센터와 임진각 평화누리공원이 포크 음악으로 물들었다. 파주문화재단이 주최·주관하고 파주시가 후원한 '2026 파주포크페스티벌'이 '뉴 웨이브(New Wave)'를 주제로 열린 것이다. 이미 막을 내린 축제이지만, 무대가 섰던 임진각 평화누리공원은 사시사철 갈 만한 곳이라 축제를 놓친 사람도 참고할 만하다. 이 글에서는 이번 축제의 구성과 라인업을 정리하고, 평화누리공원의 상시 볼거리·주차·교통 정보까지 함께 짚는다.</p>

<div class="info-box">
<p class="info-box-title">📍 먼저 밝힙니다</p>
<p>2026 파주포크페스티벌은 <strong>9월 4일(금)~5일(토) 일정으로 이미 종료</strong>됐다. 이 글은 다녀온 현장을 정리하고, 파주문화재단이 매년 가을 비슷한 시기에 개최해온 연례행사인 만큼 <strong>2027년 재방문을 준비하는 독자</strong>를 위한 참고 정보로 작성했다.</p>
</div>

<h2 id="sec1">1. 전야제와 본공연 — 이틀간의 라인업</h2>
<p><strong>축제는 9월 4일 전야제와 9월 5일 본공연, 이틀 구성으로 치러졌다.</strong> 전야제는 4일 오후 7시 문산행복센터 대공연장에서 열렸으며 여행스케치, 한동준, 니바이, 한세화가 무대에 올랐다. 본행사는 5일 오후 6시 임진각 평화누리공원 야외무대에서 진행됐고, 김창완밴드·동물원·남궁옥분·이수영·범진·여유와설빈·김지신이 출연해 세대를 아우르는 '넥스트웨이브 스테이지'를 꾸몄다. 손배찬 파주시장은 "올해 파주포크페스티벌은 세대를 넘어 시민 모두가 음악으로 하나 되는 축제의 장이었다"고 평가했다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>2026 파주포크페스티벌 일정 요약</caption>
<thead>
<tr><th>구분</th><th>일시</th><th>장소</th><th>출연진</th></tr>
</thead>
<tbody>
<tr><td>전야제</td><td>9월 4일(금) 19:00</td><td>문산행복센터 대공연장</td><td>여행스케치, 한동준, 니바이, 한세화</td></tr>
<tr><td>본공연</td><td>9월 5일(토) 18:00</td><td>임진각 평화누리공원 야외무대</td><td>김창완밴드, 동물원, 남궁옥분, 이수영, 범진, 여유와설빈, 김지신</td></tr>
</tbody>
</table>
</div>

<h2 id="sec2">2. 입장료 무료, 관람은 '웨이브존'과 '바이브존'으로</h2>
<div class="article-img-wrap">
<img src="../images/paju_imjingak_peacewind.webp" alt="임진각 평화누리공원 잔디밭에서 바람을 맞으며 걷는 방문객들" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 평화누리공원의 드넓은 잔디언덕. 본공연 관람은 간이의자석 '웨이브존'과 돗자리를 펴는 '바이브존'으로 나뉘어 진행됐다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>
<p><strong>축제는 전석 무료로 운영됐다.</strong> 관람 방식은 두 가지로 나뉘었는데, 간이의자석이 마련된 '웨이브존'과 별도 예매 없이 돗자리를 깔고 자유롭게 즐기는 잔디밭 '바이브존'이다. 파주시민에게는 선예매 혜택이 주어져 좋은 자리를 미리 확보할 수 있었다. 무대가 평화누리공원의 드넓은 잔디언덕 위에 섰던 만큼, 라이브 공연과 탁 트인 잔디 풍경을 함께 즐길 수 있었다는 것이 현장을 다녀온 관람객들의 공통된 반응이다.</p>

<!--AD-->

<h2 id="sec3">3. 축제 놓쳤어도 갈 만한 곳 — 평화누리공원 상시 명소</h2>
<div class="article-img-wrap">
<img src="../images/paju_imjingak_gondola.webp" alt="임진각 평화 곤돌라 탑승장에서 바라본 임진강과 곤돌라 케이블카" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 임진각 평화 곤돌라. 민간인 통제구역을 가로질러 임진강 건너 캠프 그리브스까지 왕복 1.7km를 오간다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>
<p>축제 시즌이 아니어도 평화누리공원 일대는 볼거리가 많다. 약 3,000개의 색색 바람개비가 돌아가는 <strong>'바람의 언덕'</strong>은 평화누리를 대표하는 포토 스폿이자 드라마·광고 촬영지로도 자주 쓰인다. 국내 최초로 민간인 통제구역을 가로지르는 <strong>임진각 평화 곤돌라</strong>는 임진강을 사이에 두고 남측 임진각과 북측 캠프 그리브스를 왕복 1.7km 구간으로 연결하며, 탑승 중 철조망과 감시초소 등 분단의 흔적을 가까이서 볼 수 있다. 이 외에도 실향민들이 북녘 가족을 향해 절을 올리는 <strong>망배단</strong>, 1953년 국군 포로 1만 2,773명이 귀환하며 이름 붙여진 <strong>자유의 다리</strong>, 6·25 전쟁 당시 피격된 <strong>증기기관차</strong> 전시물 등 분단과 평화를 주제로 한 시설이 14만 평 부지에 걸쳐 있다.</p>
<div class="article-img-wrap">
<img src="../images/paju_imjingak_dmz.webp" alt="임진각에 전시된 6·25 전쟁 당시 피격된 증기기관차" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 임진각에 전시된 증기기관차. 6·25 전쟁 당시 폭격을 맞은 흔적이 고스란히 남아 있다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>
<p>1층에는 스마트 전시 시스템을 갖춘 DMZ 종합안내센터 'DMZ NOW'가, 3층에는 임진강 건너 북녘 땅을 조망할 수 있는 전망대가 마련돼 있다. 임진각 관광지 정보는 공식 홈페이지에서 자세히 확인할 수 있다. <a href="https://tour.paju.go.kr/user/tour/place/BD_tourPlaceInfoView.do?menuCode=78&cntntsSn=52" class="inline-link-btn" target="_blank" rel="noopener">바로가기</a></p>

<h2 id="sec4">4. 셀피 명당과 자전거 코스</h2>
<div class="article-img-wrap">
<img src="../images/paju_imjingak_selfie.webp" alt="임진각 평화누리공원 바람의 언덕에서 사진을 찍는 방문객들" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 바람의 언덕은 평화와 '셀피'의 명당으로도 불린다. 탁 트인 잔디 언덕과 바람개비가 어우러져 사진 촬영지로 인기가 높다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>
<p>평화누리공원은 걷기뿐 아니라 자전거로 둘러보기도 좋다. 잔디광장 둘레를 따라 완만한 순환 코스가 이어져 있어, 대여 자전거로 임진각 일대를 한 바퀴 도는 코스가 가족 단위 방문객에게 특히 인기다. 30,000평 규모의 잔디밭과 어린이 놀이터도 함께 있어, 축제가 없는 평일이라도 소풍 삼아 방문하기 좋다.</p>

<div class="article-img-wrap">
<img src="../images/paju_imjingak_freedombridge.webp" alt="임진각 자유의다리 인근에 세워진 망향의노래비" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 자유의 다리 인근에 세워진 망향의노래비. 분단과 실향의 아픔을 기리는 여러 기념 조형물이 임진각 일대에 자리해 있다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>

<h2 id="sec5">5. 주차와 대중교통</h2>
<p><strong>임진각 주차장은 경차 1,000원, 소형차 2,000원의 요금으로 운영된다.</strong> 대중교통을 이용한다면 경의중앙선 임진강역에서 내려 도보 약 10분이면 임진각 관광지에 닿을 수 있다. 경의중앙선 셔틀 구간(임진강~도라산)도 운행 중이어서, 자가용 없이도 접근이 어렵지 않다. 주말이나 축제 기간에는 주차장이 붐빌 수 있으므로, 가능하면 대중교통을 이용하거나 오전 일찍 방문하는 편을 권한다.</p>
<div class="checkpoint-box">
<p><strong>✅ 파주포크페스티벌·임진각 여행, 이것만은 확인하세요</strong></p>
<p>· 2026 파주포크페스티벌은 9월 4~5일 일정으로 이미 종료(전석 무료, 연례행사)<br>· 전야제는 문산행복센터, 본공연은 임진각 평화누리공원 야외무대<br>· 관람은 간이의자석 '웨이브존'과 잔디밭 '바이브존'으로 구분<br>· 축제와 별개로 바람의 언덕·평화 곤돌라·망배단·자유의 다리는 상시 개방<br>· 주차는 경차 1,000원·소형 2,000원, 경의중앙선 임진강역에서 도보 10분</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>2026 파주포크페스티벌은 세대를 아우르는 라인업과 무료 관람이라는 문턱 낮은 구성으로 이틀간 임진각 평화누리공원을 채웠다. 축제 자체는 막을 내렸지만, 무대가 섰던 잔디광장과 바람의 언덕, 평화 곤돌라 등 임진각 일대의 상시 명소는 언제든 방문할 수 있다. 파주문화재단이 매년 가을 비슷한 시기에 개최해온 연례행사인 만큼, 다음 회차를 노린다면 파주문화재단 공식 홈페이지의 공지를 미리 확인해두는 편이 좋다.</p>
</div>
`
});

/* ============ 2. 시흥갯골축제 ============ */
articles.push({
  slug: "siheung-gaetgol-festival-2026",
  headline: "\"바다가 그린 길을 걷다\"… 제21회 시흥갯골축제, 9월 18일 국가정원이 무대가 된다",
  headlineShort: "제21회 시흥갯골축제 가이드",
  description: "제21회 시흥갯골축제가 2026년 9월 18일부터 20일까지 시흥갯골생태공원 일원에서 열린다. '바다가 그린 길, 바람이 만든 예술'을 주제로 8개 테마길과 21개 프로그램이 펼쳐지며, 대표 공연 '소금의 기억, 물의 춤'과 무료 수소전기 셔틀버스 운행 정보까지 정리했다.",
  subtitle: "경기도 유일의 내만갯골, 국가정원으로 지정된 시흥갯골생태공원에서 사흘간 소금과 바람이 빚어내는 축제가 열립니다.",
  date: "2026-09-10",
  time: "09:50",
  sectionName: "국내여행",
  sectionHref: "travel.html",
  categoryLabel: "TRAVEL TIPS",
  categoryClass: "cat-blue",
  heroImage: "siheung_gaetgol_tower.webp",
  heroAlt: "시흥갯골생태공원 흔들전망대 항공뷰, 갯골과 초록 초지, 대한민국 대표도시 시흥 글자 조형물",
  heroCaption: "시흥갯골생태공원의 랜드마크 흔들전망대(높이 22m, 6층 목조 전망대)를 하늘에서 내려다본 모습 <span class=\"cap-credit\">ⓒ 한국관광공사</span>",
  tags: ["시흥갯골축제", "시흥갯골생태공원", "흔들전망대", "국가정원", "9월가을축제"],
  categories: ["travel"],
  badge: "TRAVEL TIPS",
  badgeClass: "cat-blue",
  dataSource: "헤럴드경제 / 시흥시민일보 / CNB뉴스",
  imageCredit: "한국관광공사",
  sources: [
    { name: "헤럴드경제", url: "https://biz.heraldcorp.com/article/10867203" },
    { name: "시흥시민일보", url: "https://www.siminilbo.co.kr/news/newsview.php?ncode=1160287887635502" },
    { name: "CNB뉴스", url: "https://www.cnbnews.com/news/articleView.html?idxno=1015118" }
  ],
  body: `
<div class="article-img-wrap">
<img src="../images/siheung_gaetgol_main.webp" alt="시흥갯골생태공원 갯골과 갈대밭, 소금창고 전경" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 시흥갯골생태공원 전경. 경기도 유일의 내만갯골과 옛 염전 터가 어우러진 생태공원이다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>

<p>9월 18일부터 20일까지 사흘간, 시흥갯골생태공원 일원에서 <strong>제21회 시흥갯골축제</strong>가 열린다. '바다가 그린 길, 바람이 만든 예술'을 주제로, 공원 전역을 8개 테마길로 나누고 21개의 체험·공연 프로그램을 배치한 시흥시 대표 생태예술축제다. 갯골이라는 낯선 지형을 처음 접하는 방문객을 위해, 축제 프로그램과 공원 자체의 볼거리, 셔틀버스·주차 정보를 함께 정리했다.</p>

<div class="info-box">
<p class="info-box-title">📍 시흥갯골생태공원이란</p>
<p>시흥갯골은 경기도에서 유일하게 남아 있는 내만갯골(바닷물이 드나드는 좁고 긴 물길)로, 일제강점기 소금밭으로 쓰였던 옛 염전 터를 생태공원으로 조성한 곳이다. 2012년 국가해양습지보호구역으로 지정됐고, 이후 국가정원으로도 이름을 올렸다. 당시 40여 동에 달했던 소금창고는 현재 2동만 남아 옛 염전 문화를 전한다.</p>
</div>

<h2 id="sec1">1. 8개 테마길, 21개 프로그램 — 무엇이 펼쳐지나</h2>
<p><strong>축제장은 갯골대로·생태로·생명로·염전로·바람로·잔디로·미식로·집으로, 총 8개 테마길을 중심으로 구성된다.</strong> 이 길들을 따라 체험·공연·마켓 등 21개 프로그램이 배치돼, 걷는 동선 자체가 하나의 축제 코스가 되는 구조다. 대표 프로그램은 염전 구역에서 매일 밤 20시 30분경 펼쳐지는 공연 <strong>'소금의 기억, 물의 춤'</strong>이다. 옛 염전의 기억을 몸짓과 조명으로 풀어낸 무대로, 축제의 상징과도 같은 프로그램이다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>제21회 시흥갯골축제 주요 프로그램</caption>
<thead>
<tr><th>프로그램</th><th>장소</th><th>시간</th><th>내용</th></tr>
</thead>
<tbody>
<tr><td>소금의 기억, 물의 춤</td><td>염전 구역</td><td>매일 밤 약 20:30</td><td>염전을 소재로 한 테마 공연</td></tr>
<tr><td>콘서트 in 갯골</td><td>잔디광장</td><td>매일 18:30경</td><td>자전거 탄 풍경, 여행스케치, 박혜경, 서영은 등 출연</td></tr>
<tr><td>판타지 열기구 체험</td><td>공원 내</td><td>09:00~21:00(매일)</td><td>계류식 열기구 탑승 체험</td></tr>
<tr><td>갯골 스탬프 랠리 · 갯골 탐험대</td><td>테마길 전역</td><td>상시</td><td>도장 수집형 가족 체험</td></tr>
<tr><td>염전 체험 · 맨발 소금길</td><td>염전로</td><td>상시</td><td>소금 채취 체험, 맨발 걷기</td></tr>
<tr><td>느린우체국</td><td>집으로 길</td><td>상시</td><td>손편지 작성·발송 체험</td></tr>
</tbody>
</table>
</div>

<h2 id="sec2">2. 무료입장, 수소전기 셔틀버스 44대</h2>
<div class="article-img-wrap">
<img src="../images/siheung_gaetgol_greenschool.webp" alt="시흥갯골생태공원 바람의언덕 그린스쿨에서 운행되는 전동 탐방차량과 가족 단위 방문객" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 갯골생태공원 내에서 운행되는 전동 탐방 차량. 축제 기간에는 친환경 수소전기 셔틀버스 44대가 무료로 투입된다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>
<p><strong>축제는 무료입장으로 운영된다.</strong> 축제 기간 교통 편의를 위해 친환경 수소전기 셔틀버스 44대가 무료로 운행되며, 주요 거점은 시흥시청 정문, 오이도역(배곧 경유), 신천역(은계 경유), 목감지구 등이다. 대중교통이나 승용차보다 셔틀버스를 이용하면 축제장 진입이 한결 수월하다. 정확한 배차 간격과 노선도는 축제 임박 시 공식 홈페이지 공지사항에서 확정본이 게시되므로, 방문 전 재확인하는 것이 안전하다. <a href="https://shggfestival.com/" class="inline-link-btn" target="_blank" rel="noopener">시흥갯골축제 공식 홈페이지 확인 가능</a></p>

<!--AD-->

<h2 id="sec3">3. 가족 단위 방문 포인트 — 흔들전망대와 해양생태과학관</h2>
<div class="article-img-wrap">
<img src="../images/siheung_gaetgol_marine.webp" alt="시흥 해양생태과학관 외관과 주변 생태공원" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 시흥 해양생태과학관. 갯골의 갯벌 생태를 전시로 풀어낸 시설로, 아이 동반 방문객에게 특히 인기가 높다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>
<p>축제 기간이 아니어도 갯골생태공원은 아이와 함께 가기 좋은 곳으로 꼽힌다. 공원의 랜드마크인 <strong>흔들전망대</strong>는 높이 22m, 6층 규모의 목조 전망대로, 나선형 계단을 오르면 갯골 전체를 한눈에 담을 수 있다. <strong>시흥 해양생태과학관</strong>에서는 칠면초·나문재 같은 염생식물과 붉은발농게 등 갯벌 생물을 전시로 만날 수 있어 아이들의 생태 학습 코스로도 좋다. 공원은 무장애 시설(점자 안내판, 평탄로, 경사로)도 갖추고 있어 유모차나 휠체어 이용객도 비교적 수월하게 둘러볼 수 있다.</p>
<div class="article-img-wrap">
<img src="../images/siheung_gaetgol_path.webp" alt="시흥갯골생태공원 갯골을 따라 이어지는 산책로와 갈대숲" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 갯골을 따라 이어지는 산책로. 해설사와 동행하는 생태 탐방 코스도 별도로 운영된다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>

<h2 id="sec4">4. 가을 갯골의 색 — 소금꽃과 갈대밭</h2>
<div class="article-img-wrap">
<img src="../images/siheung_gaetgol_saltflower.webp" alt="가을철 붉은빛으로 물든 시흥갯골생태공원 염생식물 군락" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 가을이면 칠면초·나문재 등 염생식물이 붉은보라빛으로 물들어 '소금꽃'이 핀 듯한 풍경을 만든다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>
<p>9월은 시흥갯골이 가장 화려해지는 시기이기도 하다. 칠면초·나문재·퉁퉁마디 같은 염생식물이 붉은보라빛으로 물들어 이른바 '소금꽃 피는 계절'을 이루고, 갈대밭은 순천만 습지에 견줄 만한 규모로 펼쳐진다. 축제 기간에는 이 풍경 속에서 콘서트와 체험 프로그램이 함께 열리는 셈이어서, 사진 촬영을 겸한 방문객이라면 오후 늦은 시간대에 맞춰 가는 것도 방법이다.</p>
<div class="article-img-wrap">
<img src="../images/siheung_gaetgol_autumn.webp" alt="시흥갯골생태공원에서 가을 나들이를 즐기는 가족 단위 방문객" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 늦가을 갯골생태공원을 찾은 가족 단위 방문객. 축제 기간이 아니어도 산책과 나들이 코스로 꾸준히 인기가 높다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>

<h2 id="sec5">5. 주차와 오시는 길</h2>
<p>축제 기간에는 인근 도로 혼잡이 예상되는 만큼, 시흥시는 무료 수소전기 셔틀버스 운행을 확대해 승용차 이용을 최소화할 것을 권장하고 있다. 자가용으로 방문할 경우 공원 주차장을 이용할 수 있지만, 축제 기간 주말에는 만차가 빠르게 발생할 수 있어 오전 이른 시간 방문이 유리하다. 정확한 주차장 위치와 요금, 혼잡 시간대별 우회 안내는 축제 임박 시 공식 홈페이지와 시흥시 공식 채널에 공지될 예정이다.</p>
<div class="checkpoint-box">
<p><strong>✅ 시흥갯골축제, 이것만은 확인하세요</strong></p>
<p>· 2026년 9월 18일(금)~20일(일), 시흥갯골생태공원 일원, 무료입장<br>· 8개 테마길·21개 프로그램, 대표 공연 '소금의 기억, 물의 춤'(염전 구역, 매일 밤)<br>· '콘서트 in 갯골'(잔디광장, 매일 18:30경), 판타지 열기구 체험(09:00~21:00)<br>· 축제 기간 무료 수소전기 셔틀버스 44대 운행(시흥시청·오이도역·신천역·목감지구 등 경유)<br>· 흔들전망대·해양생태과학관은 축제 기간 아니어도 상시 관람 가능</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>제21회 시흥갯골축제는 국가정원으로 지정된 갯골생태공원 전체를 무대로 삼아, 염전의 기억을 담은 공연과 생태 체험, 가족 프로그램을 촘촘히 배치했다. 무료입장에 무료 셔틀버스까지 더해져 접근 부담도 크지 않다. 축제가 아니어도 흔들전망대와 해양생태과학관, 가을 염생식물 군락은 시흥갯골생태공원을 사계절 방문할 이유로 남는다.</p>
</div>
`
});

/* ============ 3. 괴산고추축제 ============ */
articles.push({
  slug: "goesan-red-pepper-festival-2026",
  headline: "\"32만 명이 다녀간 매운맛\"… 2026 괴산고추축제는 끝났지만, 청결고추 직거래는 계속됩니다",
  headlineShort: "2026 괴산고추축제 정리 + 청결고추 구매 팁",
  description: "'대한민국 매운맛의 기준'을 내건 2026 괴산고추축제가 9월 3일부터 6일까지 나흘간 열려 32만 2,000여 명이 다녀갔다. 건고추 6,044포가 완판된 이번 축제의 프로그램을 정리하고, 축제가 끝난 뒤에도 장날마다 이어지는 괴산청결고추 직거래시장 이용법과 괴산 연계 여행 코스까지 함께 담았다.",
  subtitle: "나흘간의 축제는 막을 내렸지만, 괴산 청결고추를 산지 가격에 살 수 있는 직거래시장은 이달에도 여섯 번 더 열립니다.",
  date: "2026-09-10",
  time: "10:00",
  sectionName: "국내여행",
  sectionHref: "travel.html",
  categoryLabel: "TRAVEL TIPS",
  categoryClass: "cat-blue",
  heroImage: "goesan_sanmagi_main.webp",
  heroAlt: "괴산호를 따라 이어진 산막이옛길 구름다리와 소나무 숲길",
  heroCaption: "괴산호를 따라 이어지는 산막이옛길. 괴산고추축제와 함께 즐기기 좋은 괴산 대표 여행 코스다 <span class=\"cap-credit\">ⓒ 한국관광공사</span>",
  tags: ["괴산고추축제", "괴산청결고추", "산막이옛길", "괴산여행", "직거래시장"],
  categories: ["travel"],
  badge: "TRAVEL TIPS",
  badgeClass: "cat-blue",
  dataSource: "더퍼블릭 / 충청매일 / 한국농어민신문",
  imageCredit: "한국관광공사",
  sources: [
    { name: "더퍼블릭", url: "https://www.thepublic.kr/news/articleView.html?idxno=317375" },
    { name: "한국농어민신문", url: "https://www.agrinet.co.kr/news/articleView.html?idxno=407009" },
    { name: "충청매일", url: "https://www.ccdn.co.kr/news/articleView.html?idxno=1093675" }
  ],
  body: `
<div class="article-img-wrap">
<img src="../images/goesan_lake.webp" alt="괴산호와 주변 산세, 맑은 가을 하늘 풍경" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 괴산고추축제가 열리는 괴산군을 감싸고 흐르는 괴산호. 낚시터이자 산막이옛길의 배경이 되는 호수다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>

<p>'대한민국 매운맛의 기준'을 슬로건으로 내건 <strong>2026 괴산고추축제</strong>가 9월 3일부터 6일까지 나흘간 괴산유기농엑스포광장과 괴산종합운동장 일원에서 열렸다. 올해로 24회째를 맞은 이 축제에는 작년보다 1만 1,000명 늘어난 <strong>32만 2,000여 명</strong>이 다녀갔고, 축제 기간 판매된 건고추는 6,044포(1포당 6kg)로 약 12억 원어치가 모두 팔렸다. 축제는 끝났지만, 괴산의 청결고추를 산지 가격에 사는 방법은 여전히 남아 있다. 축제 프로그램을 정리하고, 지금도 이어지는 직거래시장 이용법과 괴산 연계 여행 코스까지 함께 소개한다.</p>

<aside class="key-points" style="border-color:#e6a817;">
<h2 class="kp-title">⚠️ 먼저 밝힙니다</h2>
<ul>
<li><strong>2026 괴산고추축제는 9월 3~6일 일정으로 이미 종료</strong>됐습니다. 이 기사는 다녀온 현장을 정리하고, 축제 종료 후에도 이어지는 <strong>괴산청결고추 직거래시장</strong> 이용법을 중심으로 다룹니다.</li>
</ul>
</aside>

<h2 id="sec1">1. 나흘간 32만 명 — 무슨 프로그램이 있었나</h2>
<p><strong>축제는 체험형 프로그램을 전면에 내세웠다.</strong> '황금고추를 찾아라', '속풀이 고추난타', '고추물고기를 잡아라' 같은 참여형 체험부터 'Spicy 콘서트', '괴산 매운맛 대회'까지 다채롭게 구성됐다. 9월 5일에는 청소년페스티벌 '호루라기'와 제4회 유기농괴산가요제 본선이 이어져, 9개 팀이 대상 상금 1,000만 원을 놓고 경연을 벌였다. 9월 4일 오후 2시부터는 괴산전통시장 일원에서 치맥축제가 함께 열렸고, 저녁 7시에는 이찬원·진욱·송민준·곽지은이 출연한 개막 축하콘서트로 첫날을 장식했다. 고추 품평회와 세계고추전시회, 농특산물 직거래 장터도 나흘 내내 운영됐다.</p>
<div class="spec-table-wrap">
<table class="spec-table align-left">
<caption>2026 괴산고추축제 프로그램 요약</caption>
<thead>
<tr><th>일자</th><th>프로그램</th></tr>
</thead>
<tbody>
<tr><td>9월 3일(목)</td><td>축제 개막, 고추 품평회·세계고추전시회 시작</td></tr>
<tr><td>9월 4일(금)</td><td>14:00 치맥축제(괴산전통시장), 19:00 개막 축하콘서트(이찬원·진욱·송민준·곽지은)</td></tr>
<tr><td>9월 5일(토)</td><td>청소년페스티벌 '호루라기', 제4회 유기농괴산가요제 본선(대상 상금 1,000만원)</td></tr>
<tr><td>상시(3~6일)</td><td>황금고추를 찾아라, 속풀이 고추난타, 고추물고기를 잡아라, Spicy 콘서트, 매운맛 대회, 농특산물 직거래 장터</td></tr>
</tbody>
</table>
</div>

<h2 id="sec2">2. 건고추 6,044포 완판 — 축제 직판장 결산</h2>
<div class="article-img-wrap">
<img src="../images/goesan_hiddentreasure.webp" alt="괴산의 자연 풍경, 숨은 명소로 소개된 계곡과 산길" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 괴산의 산과 계곡. 청결고추 산지로 유명한 괴산은 산세가 수려해 사계절 여행지로도 꾸준히 소개된다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>
<p>축제 기간 온·오프라인으로 판매된 건고추는 총 6,044포(1포 6kg), 약 12억 원어치로 준비 물량이 모두 팔렸다. 올해 건고추 600g 판매가는 꼭지 유무에 따라 1만 6,000원~1만 8,000원 선이었는데, 군은 소비자 부담을 덜기 위해 지난해보다 근당 1,000원을 내려 책정했다. 소비자 입장에서는 시세보다 저렴하게 신선한 고추를 살 수 있고, 농가 입장에서는 중간 유통 단계 없이 안정적인 수익을 얻을 수 있다는 것이 이 직판 구조의 핵심이다.</p>

<!--AD-->

<h2 id="sec3">3. 축제는 끝나도 — 괴산청결고추 직거래시장은 계속됩니다</h2>
<div class="article-img-wrap">
<img src="../images/goesan_kids_trip.webp" alt="괴산의 가을 풍경을 배경으로 한 가족 단위 여행 코스" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 괴산은 아이와 함께 가기 좋은 가을 여행지로도 꾸준히 꼽힌다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>
<p>축제를 놓쳤다고 해서 괴산 청결고추를 살 기회가 완전히 사라진 것은 아니다. <strong>괴산군농산물유통센터 광장(괴산읍 문무로 12)</strong>에서는 괴산 장날인 3일·8일·13일·18일·23일·28일마다 <strong>오전 5시부터 7시까지</strong> 괴산청결고추 직거래시장이 별도로 열린다. 1991년 처음 문을 연 이 직거래시장은 35년 넘게 이어진 전국 대표 산지 직거래시장 가운데 하나로, 축제 직판장과 마찬가지로 중간 유통 없이 농가에서 소비자로 바로 이어지는 구조다. 이른 새벽 시간대에 운영되는 만큼 물량이 넉넉한 오전 시간에 방문하는 편이 좋다. 온라인으로 구매하고 싶다면 괴산군청이 운영하는 농가직거래 공식쇼핑몰 '괴산장터'도 이용할 수 있다. <a href="https://www.gsjangter.go.kr" class="inline-link-btn" target="_blank" rel="noopener">괴산장터에서 확인 가능</a></p>
<div class="info-box">
<p class="info-box-title">📍 괴산청결고추 직거래시장 이용 팁</p>
<p>운영 시간이 오전 5~7시로 짧고 이른 만큼, 원하는 물량과 상태를 고르려면 개장 직후 방문하는 것이 유리하다. 현금 거래가 많은 재래시장 특성상 소액권을 준비해 가면 편리하며, 농가별로 건조 상태와 매운맛 정도가 조금씩 다르므로 눈으로 색과 꼭지 상태를 확인한 뒤 구매하는 것이 좋다.</p>
</div>

<h2 id="sec4">4. 축제와 함께, 혹은 대신 — 괴산 연계 여행 코스</h2>
<div class="article-img-wrap">
<img src="../images/goesan_sanmagi_walk.webp" alt="괴산 산막이옛길 소나무 숲길과 괴산호 수변 산책로" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 사오랑마을에서 산막이마을까지 약 4km 이어지는 산막이옛길. 괴산호를 끼고 걷는 대표 산책 코스다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>
<p>괴산은 고추 산지이자 산세가 수려한 여행지이기도 하다. <strong>산막이옛길</strong>은 사오랑마을에서 산막이마을까지 이어지는 약 4km 옛길로, 투명한 괴산호 수면이 내려다보이는 구름다리와 스카이워크 구간이 하이라이트다. 물길을 따라 조금 더 북쪽으로 가면 <strong>연풍새재 옛길</strong>이 조령산 자락을 따라 이어지고, 인근 <strong>조령산체험마을</strong>에서는 한지 뜨기부터 도자기 공예까지 다양한 체험 프로그램을 즐길 수 있다.</p>
<div class="article-img-wrap">
<img src="../images/goesan_yeonpungsaejae.webp" alt="괴산 연풍새재 옛길, 조령산 자락을 따라 이어지는 산길" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 조령산 자락을 따라 이어지는 연풍새재 옛길. 산막이옛길과 함께 묶어 걷기 좋은 코스다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>
<div class="article-img-wrap">
<img src="../images/goesan_joryeongsan_village.webp" alt="괴산 조령산체험마을에서 진행되는 전통 공예 체험" loading="lazy" decoding="async">
<p class="article-img-caption">▲ 조령산체험마을에서는 한지 뜨기와 도자기 공예 등 전통 체험 프로그램을 운영한다 <span class="cap-credit">ⓒ 한국관광공사</span></p>
</div>

<h2 id="sec5">5. 주차와 셔틀버스</h2>
<p>축제 기간 괴산군은 <strong>괴산읍 대사리 35-2번지 일원 괴산미니복합타운 내 도로에 약 400면 규모의 임시주차장</strong>을 조성해 운영했다. 임시주차장과 괴산종합운동장 2번 게이트 구간에는 셔틀버스가 오전 10시부터 오후 8시까지 약 20분 간격으로, 버스 4~5대를 투입해 왕복 운행됐다. 축제 기간이 아니더라도 괴산청결고추 직거래시장을 방문할 계획이라면, 괴산군농산물유통센터 인근 도로 사정이 새벽 시간대에는 비교적 한산한 편이므로 주차 부담은 크지 않다.</p>
<div class="checkpoint-box">
<p><strong>✅ 괴산고추축제·청결고추 구매, 이것만은 확인하세요</strong></p>
<p>· 2026 괴산고추축제는 9월 3~6일 일정으로 이미 종료(누적 방문객 32만 2,000여 명)<br>· 건고추 6,044포(1포 6kg) 완판, 600g 기준 1만 6,000~1만 8,000원<br>· 괴산청결고추 직거래시장은 괴산 장날(3·8·13·18·23·28일)마다 오전 5~7시 상시 운영<br>· 온라인 구매는 괴산군 공식쇼핑몰 '괴산장터'(gsjangter.go.kr) 이용 가능<br>· 산막이옛길·연풍새재·조령산체험마을 등 연계 여행지도 함께 둘러보기 좋음</p>
</div>

<div class="summary-box" id="summary">
<h2>6. 정리</h2>
<p>2026 괴산고추축제는 나흘간 32만 명이 넘는 발길을 모으며 24회째 순항을 이어갔다. 축제 자체는 막을 내렸지만, 괴산청결고추 직거래시장은 매달 여섯 번의 장날마다 이른 새벽 문을 열어 괴산 고추를 산지 가격에 만날 기회를 계속 제공한다. 산막이옛길과 괴산호 일대의 가을 풍경까지 더하면, 축제 시즌이 지난 뒤에도 괴산을 찾을 이유는 충분하다.</p>
</div>
`
});

const outPath = path.join(__dirname, 'spec_travel_g2.json');
fs.writeFileSync(outPath, JSON.stringify(articles, null, 2), 'utf8');
console.log('written', outPath, articles.length, 'articles');
