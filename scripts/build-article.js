#!/usr/bin/env node
/**
 * 기사 HTML 생성기 — templates/article-template.html 의 보일러플레이트(헤더/푸터/광고/스키마)를
 * 재사용하고, 기사별로 달라지는 메타와 본문만 스펙 파일로 받아 articles/<slug>.html 을 만든다.
 *
 * 사용법: node scripts/build-article.js <spec.json>
 *   spec.json 은 배열 또는 단일 객체. 필드는 아래 REQUIRED 참고.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const REQUIRED = ['slug', 'headline', 'headlineShort', 'description', 'subtitle', 'date',
  'time', 'sectionName', 'sectionHref', 'categoryLabel', 'categoryClass',
  'heroImage', 'heroAlt', 'heroCaption', 'tags', 'body', 'sources'];

const AD_DISPLAY = `<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7327562206502398"
     data-ad-slot="7157835634"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`;

const AD_MULTIPLEX = `<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-7327562206502398"
     data-ad-slot="2907599434"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`;

const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/"/g, '&quot;');

function koDate(d) {
  const [y, m, day] = d.split('-');
  return `${y}년 ${Number(m)}월 ${Number(day)}일`;
}

function readMinutes(body) {
  const text = body.replace(/<[^>]*>/g, '');
  return Math.max(3, Math.round(text.length / 500));
}

function build(spec) {
  for (const k of REQUIRED) {
    if (spec[k] === undefined) throw new Error(`[${spec.slug || '?'}] 필수 필드 누락: ${k}`);
  }
  const iso = `${spec.date}T${spec.time}+09:00`;
  const tags = spec.tags;
  const mins = spec.readMinutes || readMinutes(spec.body);

  const sourceLinks = spec.sources.map(s =>
    `              <a href="${esc(s.url)}" target="_blank" rel="noopener">${s.name}</a>`).join('\n');

  const imageCredit = spec.imageCredit || 'Wikimedia Commons';

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MEV1RL0FN4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MEV1RL0FN4');
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${spec.headline} | CarPrism</title>
<meta name="description" content="${esc(spec.description)}">
<meta name="keywords" content="${tags.join(', ')}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<link rel="canonical" href="https://carprism.tmhub.co.kr/articles/${spec.slug}.html">
<link rel="icon" type="image/png" href="../images/favicon.png">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7327562206502398"
     crossorigin="anonymous"></script>

<meta property="og:type" content="article">
<meta property="og:title" content="${esc(spec.headlineShort)}">
<meta property="og:description" content="${esc(spec.description)}">
<meta property="og:image" content="https://carprism.tmhub.co.kr/images/${spec.heroImage}">
<meta property="og:url" content="https://carprism.tmhub.co.kr/articles/${spec.slug}.html">
<meta property="og:site_name" content="CarPrism">
<meta property="article:published_time" content="${iso}">
<meta property="article:section" content="${spec.sectionName}">
<meta property="article:tag" content="${tags.join(',')}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(spec.headlineShort)}">
<meta name="twitter:description" content="${esc(spec.description)}">
<meta name="twitter:image" content="https://carprism.tmhub.co.kr/images/${spec.heroImage}">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/article.css">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://carprism.tmhub.co.kr/articles/${spec.slug}.html" },
  "headline": ${JSON.stringify(spec.headline)},
  "description": ${JSON.stringify(spec.description)},
  "image": ["https://carprism.tmhub.co.kr/images/${spec.heroImage}"],
  "datePublished": "${iso}",
  "dateModified": "${iso}",
  "author": [{ "@type": "Person", "name": "김도균", "jobTitle": "기자", "url": "https://carprism.tmhub.co.kr/about.html#author" }],
  "publisher": { "@type": "Organization", "name": "CarPrism", "logo": { "@type": "ImageObject", "url": "https://carprism.tmhub.co.kr/images/logo.png", "width": 512, "height": 512 } }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://carprism.tmhub.co.kr/" },
    { "@type": "ListItem", "position": 2, "name": ${JSON.stringify(spec.headlineShort)}, "item": "https://carprism.tmhub.co.kr/articles/${spec.slug}.html" }
  ]
}
</script>
</head>
<body>

<div class="progress-bar" id="progressBar"></div>

<!-- ===== HEADER ===== -->
<header class="site-header" role="banner">
  <div class="header-inner wrap">
    <a href="../index.html" class="logo" aria-label="CarPrism 홈">
      <span class="logo-icon">C</span>
      <span class="logo-text">CAR<em>PRISM</em></span>
    </a>
    <nav class="main-nav" aria-label="주요 메뉴">
      <a href="../index.html" class="nav-link" id="nav-home">홈</a>
      <a href="../electric.html" class="nav-link" id="nav-electric">전기차</a>
      <a href="../news.html" class="nav-link" id="nav-news">자동차 뉴스</a>
      <a href="../reviews.html" class="nav-link" id="nav-review">리뷰</a>
      <a href="../domestic.html" class="nav-link" id="nav-domestic">국산차</a>
      <a href="../import.html" class="nav-link" id="nav-import">수입차</a>
    </nav>
    <button class="search-btn" id="searchBtn" aria-label="검색">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </button>
    <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="모바일 메뉴">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<nav class="mobile-nav" id="mobileNav" aria-label="모바일 메뉴">
  <a href="../index.html" class="nav-link">홈</a>
  <a href="../electric.html" class="nav-link">전기차</a>
  <a href="../news.html" class="nav-link">자동차 뉴스</a>
  <a href="../reviews.html" class="nav-link">리뷰</a>
  <a href="../domestic.html" class="nav-link">국산차</a>
  <a href="../import.html" class="nav-link">수입차</a>
</nav>

<!-- ===== MAIN ===== -->
<main>
  <div class="article-wrap">

    <!-- ── 메인 컬럼 ── -->
    <article class="article-main" itemscope itemtype="https://schema.org/NewsArticle" data-slug="${spec.slug}">
      <meta itemprop="datePublished" content="${iso}">

      <nav class="breadcrumb reveal" aria-label="현재 위치">
        <a href="../index.html">홈</a>
        <span class="breadcrumb-sep">›</span>
        <a href="../${spec.sectionHref}">${spec.sectionName}</a>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-current">${spec.headlineShort}</span>
      </nav>

      <header class="article-header reveal">
        <span class="article-cat ${spec.categoryClass}">${spec.categoryLabel}</span>
        <h1 class="article-title" itemprop="headline">
          ${spec.headline}
        </h1>
        <p class="article-subtitle">
          ${spec.subtitle}
        </p>
        <div class="article-meta">
          <div class="meta-author">
            <span class="author-avatar">김</span>
            <span class="author-name">김도균 기자</span>
          </div>
          <div class="meta-divider"></div>
          <time class="meta-item" datetime="${spec.date}">${koDate(spec.date)}</time>
          <div class="meta-divider"></div>
          <span class="meta-item">읽는 시간 약 ${mins}분</span>
        </div>
      </header>

      <div class="article-body reveal">

        <div class="article-img-wrap">
          <img src="../images/${spec.heroImage}" alt="${esc(spec.heroAlt)}" itemprop="image">
          <p class="article-img-caption">▲ ${spec.heroCaption}</p>
        </div>

${spec.body.replace(/<!--AD-->/g, AD_DISPLAY)}

${AD_MULTIPLEX}

      </div>

      <footer class="article-footer reveal">
        <div class="source-block">
          <p>
            <span class="source-icon">📄</span>
            <span class="source-label">참고:</span>
            <span class="source-links">
${sourceLinks}
            </span>
          </p>
          <p>
            <span class="source-icon">🖼</span>
            <span class="source-label">이미지 출처:</span> ${imageCredit}
          </p>
        </div>

        <div class="article-tags">
${tags.slice(0, 5).map(t => `          <a href="#" class="article-tag-item">${t}</a>`).join('\n')}
        </div>

        <div class="share-block">
          <span class="share-label">공유하기</span>
          <a href="#" class="share-btn share-btn--kakao" id="share-kakao">
            <span>💬</span> <span>카카오톡</span>
          </a>
          <a href="#" class="share-btn share-btn--twitter" id="share-twitter">
            <span>✕</span> <span>트위터</span>
          </a>
          <button class="share-btn share-btn--copy" id="share-copy" onclick="navigator.clipboard.writeText(location.href).then(()=>alert('링크가 복사되었습니다.'))">
            <span>🔗</span> <span>링크 복사</span>
          </button>
        </div>
      </footer>

    </article><!-- /.article-main -->

    <aside class="article-sidebar" aria-label="관련 정보">

      <div class="sidebar-block reveal" id="sidebar-related">
        <h2 class="sidebar-title">관련 기사</h2>
        <ul class="related-list" id="related-list"></ul>
      </div>

      <div class="sidebar-block reveal" id="sidebar-tags">
        <h2 class="sidebar-title">인기 태그</h2>
        <div class="pop-tags">
${tags.slice(0, 5).map(t => `          <a href="#" class="pop-tag">${t}</a>`).join('\n')}
        </div>
      </div>

    </aside><!-- /.article-sidebar -->

  </div><!-- /.article-wrap -->
</main>

<!-- ===== FOOTER ===== -->
<footer class="site-footer" role="contentinfo">
  <div class="footer-inner wrap">
    <div class="footer-brand">
      <a href="../index.html" class="footer-logo">
        <span class="footer-logo-icon">C</span>
        <span class="footer-logo-text">CAR<em>PRISM</em></span>
      </a>
      <p class="footer-desc">카프리즘은 국내외 주요 자동차 미디어의 최신 소식을 가장 빠르고 정확하게 전하는 자동차 전문 뉴스 사이트입니다.</p>
    </div>
    <div>
      <h3 class="footer-col-title">카테고리</h3>
      <ul class="footer-links">
        <li><a href="../electric.html">전기차</a></li>
        <li><a href="../news.html">자동차 뉴스</a></li>
        <li><a href="../reviews.html">리뷰</a></li>
        <li><a href="../domestic.html">국산차</a></li>
        <li><a href="../import.html">수입차</a></li>
        <li><a href="../archive.html">전체 기사</a></li>
      </ul>
    </div>
    <div>
      <h3 class="footer-col-title">사이트 정보</h3>
      <ul class="footer-links">
        <li><a href="../about.html">소개</a></li>
        <li><a href="../editorial.html">편집 지침</a></li>
        <li><a href="../about.html#contact">광고 문의</a></li>
        <li><a href="../about.html#contact">기사제보</a></li>
        <li><a href="../privacy.html">개인정보처리방침</a></li>
        <li><a href="../terms.html">이용약관</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom wrap">
    <p>© 2026 CarPrism. All rights reserved.</p>
  </div>
</footer>

<script src="../js/articles-data.js"></script>
<script src="../js/main.js"></script>
</body>
</html>
`;
}

function main() {
  const specPath = process.argv[2];
  if (!specPath) { console.error('usage: node scripts/build-article.js <spec.json>'); process.exit(1); }
  const raw = JSON.parse(fs.readFileSync(specPath, 'utf8'));
  const specs = Array.isArray(raw) ? raw : [raw];
  const dataEntries = [];

  for (const spec of specs) {
    const html = build(spec);
    const out = path.join(ROOT, 'articles', `${spec.slug}.html`);
    fs.writeFileSync(out, html, 'utf8');
    const imgs = (html.match(/<img src="\.\.\/images\//g) || []).length;
    console.log(`✓ ${spec.slug}.html  (이미지 ${imgs}장, ${html.split('\n').length}줄)`);
    if (imgs < 4) console.warn(`  ⚠ 이미지 ${imgs}장 — 최소 4장 규칙 위반`);
    dataEntries.push({
      slug: spec.slug,
      title: spec.headline,
      date: spec.date,
      image: spec.heroImage,
      categories: spec.categories,
      tags: spec.tags.slice(0, 5),
      badge: spec.badge,
      badgeClass: spec.badgeClass,
      source: spec.dataSource,
      desc: spec.description
    });
  }

  const dataOut = specPath.replace(/\.json$/, '.data.json');
  fs.writeFileSync(dataOut, JSON.stringify(dataEntries, null, 2), 'utf8');
  console.log(`\n→ articles-data 항목 ${dataEntries.length}건: ${dataOut}`);
}

main();
