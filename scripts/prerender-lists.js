// 발행 시마다 실행: js/articles-data.js를 기준으로 홈페이지·카테고리 페이지의
// "최신 기사/운전 상식과 팁/카테고리 미리보기/카테고리 전체 목록" 정적 HTML 스냅샷을
// 각 파일의 <!-- STATIC:...:START/END --> 마커 사이에 채워 넣는다.
//
// 목적: 지금까지는 이 목록들이 client-side JS(js/main.js)로만 렌더링되어
// 구글이 1차 크롤링(원본 HTML)하는 시점엔 홈/카테고리 페이지가 사실상 빈 페이지로 보였다.
// 이 스크립트는 JS 렌더링을 대체하는 게 아니라(그대로 두고), JS 실행 전에도
// 같은 내용이 원본 HTML에 이미 존재하도록 "미리 구워두는" 것 — 브라우저에서는
// 로드 후 js/main.js가 동일한 데이터로 다시 덮어써서 사용자 경험은 변화 없음.
//
// scripts/validate-articles-data.js와 마찬가지로 수동 실행 스크립트다(빌드 훅 없음).
// 새 기사를 articles-data.js에 추가한 뒤 반드시 `node scripts/prerender-lists.js`를 실행할 것.

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function loadArticlesData() {
  const code = fs.readFileSync(path.join(root, 'js', 'articles-data.js'), 'utf8');
  const sandbox = {};
  sandbox.window = sandbox;
  new Function('window', code)(sandbox);
  return sandbox.ARTICLES_DATA;
}

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function heroSlide(item, i) {
  const catClass = item.badgeClass === 'cat-sales' ? 'gold' : 'blue';
  const sourceLine = item.badge === 'TEST DRIVE'
    ? ` &nbsp;·&nbsp; <span class="slide-source">원문: ${item.source}</span>`
    : '';
  return `
      <div class="slide" role="group" aria-label="슬라이드 ${i + 1}">
        <div class="slide-image">
          <img src="images/${item.image}" alt="${escapeAttr(item.title)}" loading="lazy">
        </div>
        <div class="slide-content">
          <span class="slide-cat slide-cat--${catClass}">${item.badge}</span>
          <h2 class="slide-title">${item.title}</h2>
          <p class="slide-desc">${item.desc}</p>
          <p class="slide-meta">편집팀 &nbsp;·&nbsp; ${item.date.replace(/-/g, '.')}${sourceLine}</p>
          <a href="articles/${item.slug}.html" class="slide-btn">기사 읽기 →</a>
        </div>
      </div>`;
}

function heroDot(_, i) {
  return `
      <button class="dot${i === 0 ? ' dot--active' : ''}" id="dot-${i}" role="tab" aria-selected="${i === 0}" aria-label="슬라이드 ${i + 1}"></button>`;
}

function articleRow(item, prefix = '') {
  const sourceLine = item.badge === 'TEST DRIVE' ? ` · 원문: ${item.source}` : '';
  return `
      <li>
        <a href="${prefix}articles/${item.slug}.html" class="article-row reveal">
          <div class="row-thumb">
            <img src="${prefix}images/${item.image}" alt="${escapeAttr(item.title)}" loading="lazy" width="120" height="80">
          </div>
          <div class="row-info">
            <span class="cat-label ${item.badgeClass}">${item.badge}</span>
            <h3 class="row-title">${item.title}</h3>
            <p class="row-meta">${item.date.replace(/-/g, '.')}${sourceLine}</p>
          </div>
        </a>
      </li>`;
}

function featuredCard(item, prefix = '') {
  return `
    <a href="${prefix}articles/${item.slug}.html" class="featured-card reveal">
      <div class="card-thumb">
        <img src="${prefix}images/${item.image}" alt="${escapeAttr(item.title)}" loading="lazy">
        <span class="card-cat ${item.badgeClass}">${item.badge}</span>
      </div>
      <div class="card-info">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-date">${item.date.replace(/-/g, '.')}</p>
      </div>
    </a>`;
}

function fillMarkers(html, filename, blocks) {
  blocks.forEach(([name, content]) => {
    const start = `<!-- STATIC:${name}:START -->`;
    const end = `<!-- STATIC:${name}:END -->`;
    const re = new RegExp(`${start}[\\s\\S]*?${end}`);
    if (!re.test(html)) {
      throw new Error(`${filename}: 마커 ${name}를 찾지 못함`);
    }
    html = html.replace(re, `${start}${content}\n    ${end}`);
  });
  return html;
}

const data = loadArticlesData();
const sortedByDate = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
const CAT_KEYS = ['electric', 'news', 'domestic', 'import', 'reviews'];

// ── index.html ──
{
  const file = path.join(root, 'index.html');
  let html = fs.readFileSync(file, 'utf8');

  const heroItems = sortedByDate.slice(0, 8);
  const latestItems = sortedByDate.slice(0, 15);
  const TIPS_BADGES = ['DRIVING TIPS', 'POLICY UPDATE', 'EV POLICY'];
  const tipsItems = sortedByDate.filter((i) => TIPS_BADGES.includes(i.badge));

  const blocks = [
    ['HERO', heroItems.map(heroSlide).join('')],
    ['HERO-DOTS', heroItems.map(heroDot).join('')],
    ['LATEST', latestItems.map((i) => articleRow(i)).join('')],
    ['TIPS', tipsItems.map((i) => articleRow(i)).join('')],
  ];

  CAT_KEYS.forEach((cat) => {
    const items = sortedByDate.filter((i) => i.categories.includes(cat)).slice(0, 6);
    const cardItems = items.slice(0, 2);
    const listItems = items.slice(2, 6);
    const key = cat.toUpperCase();
    blocks.push([`CAT-${key}-CARDS`, cardItems.map((i) => featuredCard(i)).join('')]);
    blocks.push([`CAT-${key}-LIST`, listItems.map((i) => articleRow(i)).join('')]);
  });

  html = fillMarkers(html, 'index.html', blocks);
  fs.writeFileSync(file, html);
  console.log('index.html: 정적 스냅샷 갱신 완료');
}

// ── 카테고리 페이지 5개 + 전체 기사 아카이브 ──
const CATEGORY_FILES = {
  electric: 'electric.html',
  news: 'news.html',
  domestic: 'domestic.html',
  import: 'import.html',
  reviews: 'reviews.html',
  all: 'archive.html',
};

Object.entries(CATEGORY_FILES).forEach(([cat, filename]) => {
  const file = path.join(root, filename);
  let html = fs.readFileSync(file, 'utf8');

  const items = [...data]
    .filter((i) => cat === 'all' || i.categories.includes(cat))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const topItems = items.slice(0, 3);
  const restItems = items.slice(3);

  html = fillMarkers(html, filename, [
    ['TOP3', topItems.map((i) => featuredCard(i)).join('')],
    ['LIST', restItems.map((i) => articleRow(i)).join('')],
  ]);

  fs.writeFileSync(file, html);
  console.log(`${filename}: 정적 스냅샷 갱신 완료 (${items.length}개 기사)`);
});

// ── RSS 피드 (feed.xml) ──
{
  function escapeXml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  const RSS_COUNT = 30;
  const feedItems = sortedByDate.slice(0, RSS_COUNT).map((item) => {
    const link = `https://carprism.tmhub.co.kr/articles/${item.slug}.html`;
    const pubDate = new Date(`${item.date}T09:00:00+09:00`).toUTCString();
    return `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(item.desc)}</description>
      <enclosure url="https://carprism.tmhub.co.kr/images/${item.image}" type="image/webp"/>
    </item>`;
  }).join('');

  const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>CarPrism — 자동차 뉴스를 감각적으로 읽다</title>
    <link>https://carprism.tmhub.co.kr/</link>
    <description>카프리즘의 최신 기사 ${RSS_COUNT}건을 최신순으로 제공하는 RSS 피드입니다.</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${feedItems}
  </channel>
</rss>
`;

  fs.writeFileSync(path.join(root, 'feed.xml'), feedXml);
  console.log(`feed.xml: RSS 피드 갱신 완료 (최신 ${RSS_COUNT}건)`);
}
