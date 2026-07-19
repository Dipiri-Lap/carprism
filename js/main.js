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
//  최신 기사 페이지네이션
// ─────────────────────────────────────────────
(function() {
  const list = document.querySelector('#articles .article-list');
  if (!list) return;

  const items = list.querySelectorAll('li');
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  let currentPage = 1;

  const prevBtn = document.getElementById('pagePrev');
  const nextBtn = document.getElementById('pageNext');
  const infoText = document.getElementById('pageInfo');

  function showPage(page) {
    currentPage = page;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    items.forEach((item, idx) => {
      if (idx >= start && idx < end) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    if (infoText) {
      infoText.textContent = `${currentPage} / ${totalPages}페이지`;
    }

    if (prevBtn) {
      prevBtn.style.display = currentPage === 1 ? 'none' : 'inline-block';
    }
    if (nextBtn) {
      nextBtn.style.display = currentPage === totalPages ? 'none' : 'inline-block';
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        showPage(currentPage - 1);
        document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
        document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  showPage(1);
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

