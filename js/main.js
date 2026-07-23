// ─────────────────────────────────────────────
//  홈페이지 히어로 슬라이더 / 최신 기사 리스트 자동 렌더링
//  (js/articles-data.js 기준 — 반드시 이 reveal 애니메이션 스캔보다 먼저 실행되어야 함)
// ─────────────────────────────────────────────
(function() {
  const data = window.ARTICLES_DATA;
  if (!data) return;

  const sortedByDate = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

  // 히어로 슬라이더
  const track = document.getElementById('sliderTrack');
  const dotsWrap = document.getElementById('sliderDots');
  if (track) {
    const HERO_COUNT = 8;
    const heroItems = sortedByDate.slice(0, HERO_COUNT);

    track.innerHTML = heroItems.map((item, i) => `
      <div class="slide" role="group" aria-label="슬라이드 ${i + 1}">
        <div class="slide-image">
          <img src="images/${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="slide-content">
          <span class="slide-cat slide-cat--${item.badgeClass === 'cat-sales' ? 'gold' : 'blue'}">${item.badge}</span>
          <h2 class="slide-title">${item.title}</h2>
          <p class="slide-desc">${item.desc}</p>
          <p class="slide-meta">편집팀 &nbsp;·&nbsp; ${item.date.replace(/-/g, '.')} &nbsp;·&nbsp; <span class="slide-source">원문: ${item.source}</span></p>
          <a href="articles/${item.slug}.html" class="slide-btn">기사 읽기 →</a>
        </div>
      </div>
    `).join('');

    if (dotsWrap) {
      dotsWrap.innerHTML = heroItems.map((_, i) => `
        <button class="dot${i === 0 ? ' dot--active' : ''}" id="dot-${i}" role="tab" aria-selected="${i === 0}" aria-label="슬라이드 ${i + 1}"></button>
      `).join('');
    }
  }

  // 최신 기사 리스트
  const latestList = document.querySelector('#articles .article-list');
  if (latestList) {
    const LATEST_COUNT = 15;
    const latestItems = sortedByDate.slice(0, LATEST_COUNT);

    latestList.innerHTML = latestItems.map((item) => `
      <li>
        <a href="articles/${item.slug}.html" class="article-row reveal">
          <div class="row-thumb">
            <img src="images/${item.image}" alt="${item.title}" loading="lazy" width="120" height="80">
          </div>
          <div class="row-info">
            <span class="cat-label ${item.badgeClass}">${item.badge}</span>
            <h3 class="row-title">${item.title}</h3>
            <p class="row-meta">${item.date.replace(/-/g, '.')} · 원문: ${item.source}</p>
          </div>
        </a>
      </li>
    `).join('');
  }
})();

// 스크롤 진행률 바
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = percent + '%';
});

// 섹션 등장 애니메이션
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach((el) => observer.observe(el));

// 모바일 메뉴 토글
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav    = document.getElementById('mobileNav');
if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('is-open');
    mobileMenuBtn.setAttribute('aria-expanded', mobileNav.classList.contains('is-open'));
  });
  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('is-open');
    }
  });
}

// ─────────────────────────────────────────────
//  히어로 슬라이더
// ─────────────────────────────────────────────
(function () {
  const track    = document.getElementById('sliderTrack');
  const prevBtn  = document.getElementById('sliderPrev');
  const nextBtn  = document.getElementById('sliderNext');
  const dotsWrap = document.getElementById('sliderDots');
  const progBar  = document.getElementById('sliderProgressBar');

  if (!track) return;

  const slides  = track.querySelectorAll('.slide');
  const total   = slides.length;
  const DURATION = 5000; // ms
  let current   = 0;
  let autoTimer = null;

  /* 슬라이드 이동 */
  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    // 도트 업데이트
    dotsWrap.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('dot--active', i === current);
      d.setAttribute('aria-selected', i === current ? 'true' : 'false');
    });

    resetProgress();
  }

  /* 진행 바 애니메이션 */
  function resetProgress() {
    progBar.style.transition = 'none';
    progBar.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progBar.style.transition = `width ${DURATION}ms linear`;
        progBar.style.width = '100%';
      });
    });
  }

  /* 자동 재생 */
  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), DURATION);
    resetProgress();
  }
  function stopAuto() {
    clearInterval(autoTimer);
    progBar.style.transition = 'none';
  }

  // 화살표 버튼
  prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

  // 도트 버튼
  dotsWrap.querySelectorAll('.dot').forEach((dot, i) => {
    dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
  });

  // 마우스 오버 시 일시정지
  const heroEl = track.closest('.hero-slider');
  heroEl.addEventListener('mouseenter', stopAuto);
  heroEl.addEventListener('mouseleave', startAuto);

  // 터치/드래그 스와이프
  let startX = 0;
  track.addEventListener('pointerdown', (e) => { startX = e.clientX; stopAuto(); });
  track.addEventListener('pointerup',   (e) => {
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    startAuto();
  });

  // 초기화
  startAuto();
})();

// ─────────────────────────────────────────────
//  기사 리스트 페이지네이션 (페이지 내 모든 .article-list 공통 적용)
// ─────────────────────────────────────────────
(function() {
  const ITEMS_PER_PAGE = 5;

  document.querySelectorAll('.article-list').forEach((list) => {
    const items = Array.from(list.children).filter((el) => el.tagName === 'LI');
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    if (totalPages <= 1) return;

    let currentPage = 1;

    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    pagination.setAttribute('role', 'navigation');
    pagination.setAttribute('aria-label', '페이지 이동');
    pagination.innerHTML =
      '<a href="#" class="page-prev" style="display:none; margin-right: 12px;">← 이전</a>' +
      '<span class="page-info"></span>' +
      '<a href="#" class="page-next" style="margin-left: 12px;">다음 →</a>';
    list.insertAdjacentElement('afterend', pagination);

    const prevBtn = pagination.querySelector('.page-prev');
    const nextBtn = pagination.querySelector('.page-next');
    const infoText = pagination.querySelector('.page-info');

    function showPage(page) {
      currentPage = page;
      const start = (page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;

      items.forEach((item, idx) => {
        item.style.display = (idx >= start && idx < end) ? 'block' : 'none';
      });

      infoText.textContent = `${currentPage} / ${totalPages}페이지`;
      prevBtn.style.display = currentPage === 1 ? 'none' : 'inline-block';
      nextBtn.style.display = currentPage === totalPages ? 'none' : 'inline-block';
    }

    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        showPage(currentPage - 1);
        list.scrollIntoView({ behavior: 'smooth' });
      }
    });
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
        list.scrollIntoView({ behavior: 'smooth' });
      }
    });

    showPage(1);
  });
})();

// ─────────────────────────────────────────────
//  사이드바 인기 기사 랜덤 셔플
// ─────────────────────────────────────────────
(function() {
  const hotList = document.querySelector('.hot-list');
  if (!hotList) return;

  const items = Array.from(hotList.querySelectorAll('li'));
  
  // Fisher-Yates Shuffle
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  // Re-append to DOM in random order
  items.forEach(item => hotList.appendChild(item));
})();

// ─────────────────────────────────────────────
//  검색 오버레이 (헤더 검색 버튼)
// ─────────────────────────────────────────────
(function() {
  const searchBtn = document.getElementById('searchBtn');
  const data = window.ARTICLES_DATA;
  if (!searchBtn || !data) return;

  const inArticles = location.pathname.includes('/articles/');
  const prefix = inArticles ? '../' : '';

  const style = document.createElement('style');
  style.textContent = `
    .search-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.6); z-index: 9999; display: none; align-items: flex-start; justify-content: center; padding: 8vh 20px; }
    .search-overlay.is-open { display: flex; }
    .search-panel { background: #fff; width: 100%; max-width: 560px; border-radius: 12px; padding: 20px; max-height: 74vh; display: flex; flex-direction: column; }
    .search-panel-head { display: flex; align-items: center; gap: 10px; }
    .search-panel-head input { flex: 1; border: 1px solid #ddd; border-radius: 8px; padding: 10px 14px; font-size: 15px; font-family: inherit; }
    .search-panel-close { border: none; background: none; font-size: 20px; cursor: pointer; line-height: 1; padding: 4px 8px; }
    .search-results { margin-top: 14px; overflow-y: auto; }
    .search-result-item { display: flex; gap: 12px; padding: 10px 4px; text-decoration: none; color: inherit; border-radius: 8px; }
    .search-result-item:hover { background: #f5f5f5; }
    .search-result-item img { width: 72px; height: 48px; object-fit: cover; border-radius: 6px; flex-shrink: 0; }
    .search-result-title { display: block; font-size: 14px; font-weight: 600; line-height: 1.4; }
    .search-result-date { display: block; font-size: 12px; color: #888; margin-top: 4px; }
    .search-empty { padding: 20px 4px; color: #888; font-size: 14px; text-align: center; }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.className = 'search-overlay';
  overlay.id = 'searchOverlay';
  overlay.innerHTML = `
    <div class="search-panel">
      <div class="search-panel-head">
        <input type="text" id="searchInput" placeholder="기사 제목, 태그로 검색" aria-label="기사 검색">
        <button type="button" class="search-panel-close" id="searchClose" aria-label="검색 닫기">✕</button>
      </div>
      <div class="search-results" id="searchResults"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const input = overlay.querySelector('#searchInput');
  const results = overlay.querySelector('#searchResults');
  const closeBtn = overlay.querySelector('#searchClose');

  function render(query) {
    const q = query.trim().toLowerCase();
    if (!q) { results.innerHTML = ''; return; }

    const matches = data.filter((item) => {
      if (item.title.toLowerCase().includes(q)) return true;
      return item.tags.some((tag) => tag.toLowerCase().includes(q));
    }).slice(0, 8);

    if (matches.length === 0) {
      results.innerHTML = '<p class="search-empty">검색 결과가 없습니다.</p>';
      return;
    }

    results.innerHTML = matches.map((item) => `
      <a class="search-result-item" href="${prefix}articles/${item.slug}.html">
        <img src="${prefix}images/${item.image}" alt="${item.title}" loading="lazy">
        <span>
          <span class="search-result-title">${item.title}</span>
          <span class="search-result-date">${item.date.replace(/-/g, '.')}</span>
        </span>
      </a>
    `).join('');
  }

  function openOverlay() {
    overlay.classList.add('is-open');
    input.value = '';
    results.innerHTML = '';
    setTimeout(() => input.focus(), 0);
  }
  function closeOverlay() {
    overlay.classList.remove('is-open');
  }

  searchBtn.addEventListener('click', openOverlay);
  closeBtn.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOverlay(); });
  input.addEventListener('input', () => render(input.value));
})();

// ─────────────────────────────────────────────
//  관련 기사 자동 렌더링 (기사 상세 페이지 사이드바)
// ─────────────────────────────────────────────
(function() {
  const relatedList = document.getElementById('related-list');
  const articleEl = document.querySelector('.article-main[data-slug]');
  const data = window.ARTICLES_DATA;
  if (!relatedList || !articleEl || !data) return;

  const currentSlug = articleEl.getAttribute('data-slug');
  const current = data.find((item) => item.slug === currentSlug);
  if (!current) return;

  function sharedCategoryCount(item) {
    return item.categories.filter((cat) => current.categories.includes(cat)).length;
  }

  const related = data
    .filter((item) => item.slug !== currentSlug)
    .sort((a, b) => {
      const scoreDiff = sharedCategoryCount(b) - sharedCategoryCount(a);
      if (scoreDiff !== 0) return scoreDiff;
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, 3);

  relatedList.innerHTML = related.map((item) => `
    <li>
      <a href="${item.slug}.html" class="related-item">
        <div class="related-thumb">
          <img src="../images/${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="related-info">
          <span class="related-title">${item.title}</span>
          <span class="related-date">${item.date.replace(/-/g, '.')}</span>
        </div>
      </a>
    </li>
  `).join('');
})();

