#!/usr/bin/env node
/**
 * 기사마다 "관련 기사" 링크를 정적 HTML로 미리 채운다.
 *
 * 배경: 기존에는 사이드바(#related-list)와 본문 하단(#related-inline-grid)이 비어 있고
 * 브라우저에서 JS(js/main.js)가 articles-data.js 를 순회해 채웠다. 정적 HTML 에는
 * 기사 간 링크가 거의 없어(다른 기사가 링크하지 않는 기사가 전체의 80%) 검색 크롤러가
 * 링크를 따라 기사를 발견하기 어려웠다.
 *
 * 방식:
 *  - 관련도 = 공통 태그 × 5 + 같은 배지 × 2 + 공통 카테고리 (main.js 의 기존 로직과 동일)
 *  - 한쪽 기사에 링크가 몰리지 않도록, 이미 많이 링크된 기사는 점수를 깎는다(인바운드 균형).
 *  - 기사당 사이드바 4개 + 본문 하단 3개 = 7개. 여러 번 반복 계산해 링크 수를 고르게 만든다.
 *  - 결과는 <!--REL:LIST:START-->…<!--REL:LIST:END--> 마커 사이에 쓰므로 재실행해도 안전하다.
 *
 * 사용법:
 *   node scripts/build-related.js            # 전체 기사에 적용
 *   node scripts/build-related.js --dry-run  # 파일을 쓰지 않고 통계만 출력
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ART = path.join(ROOT, 'articles');
const DRY = process.argv.includes('--dry-run');

const SIDEBAR_N = 4;
const INLINE_N = 3;
const TOTAL_N = SIDEBAR_N + INLINE_N;
const PASS_WEIGHTS = [0.15, 0.3, 0.5, 0.75, 1.0, 1.0]; // 인바운드 페널티 가중치(반복마다 강화)

// ── 데이터 로드 ──
global.window = {};
require(path.join(ROOT, 'js', 'articles-data.js'));
const all = global.window.ARTICLES_DATA;
const existing = new Set(fs.readdirSync(ART).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5)));
const items = all.filter((a) => existing.has(a.slug));
const bySlug = new Map(items.map((a) => [a.slug, a]));

function escText(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function escAttr(s) { return escText(s).replace(/"/g, '&quot;'); }

// 결정적인 순서/동점 처리를 위한 문자열 해시
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

// ── 제목·설명·태그 텍스트 유사도 (TF-IDF 코사인) ──
// 카테고리는 넓은 버킷이라 태그만으로는 "정말 비슷한 글"을 가리기 어렵다. 그래서 제목·설명·태그에서
// 뽑은 키워드의 겹침도를 함께 본다. (한국어 조사를 대충 떼어내는 간단한 토큰화)
const JOSA = /(으로|에서|에게|까지|부터|처럼|보다|이나|과|와|은|는|이|가|을|를|의|에|도|로|만)$/;
function tokens(a) {
  const text = [a.title, a.desc, (a.tags || []).join(' ')].join(' ');
  const out = new Set();
  for (let w of text.split(/[^0-9A-Za-z가-힣]+/)) {
    if (!w) continue;
    if (/[가-힣]/.test(w) && w.length > 2) w = w.replace(JOSA, '');
    if (w.length < 2) continue;
    out.add(w.toLowerCase());
  }
  return out;
}
const docTokens = new Map(items.map((a) => [a.slug, tokens(a)]));
const df = new Map();
docTokens.forEach((set) => set.forEach((t) => df.set(t, (df.get(t) || 0) + 1)));
const N_DOCS = items.length;
const vecs = new Map();
docTokens.forEach((set, slug) => {
  const v = new Map();
  let norm = 0;
  set.forEach((t) => {
    const d = df.get(t);
    if (d > N_DOCS * 0.2 || d < 2) return; // 너무 흔하거나 한 번만 나오는 토큰은 제외
    const w = Math.log(N_DOCS / d);
    v.set(t, w);
    norm += w * w;
  });
  vecs.set(slug, { v, norm: Math.sqrt(norm) || 1 });
});
function cosine(a, b) {
  const A = vecs.get(a.slug), B = vecs.get(b.slug);
  const [small, large] = A.v.size <= B.v.size ? [A, B] : [B, A];
  let dot = 0;
  small.v.forEach((w, t) => { const w2 = large.v.get(t); if (w2) dot += w * w2; });
  return dot / (A.norm * B.norm);
}

function relevance(a, b) {
  const tagsA = a.tags || [];
  const tagsB = new Set(b.tags || []);
  const sharedTags = tagsA.filter((t) => tagsB.has(t)).length;
  const sharedCats = (a.categories || []).filter((c) => (b.categories || []).includes(c)).length;
  const sameBadge = a.badge && b.badge && a.badge === b.badge ? 1 : 0;
  // 카테고리/태그/배지가 하나도 안 겹치면 텍스트가 비슷해도 후보에서 제외(0)
  const base = sharedTags * 5 + sameBadge * 2 + sharedCats;
  if (base === 0) return 0;
  return base + cosine(a, b) * 14;
}

// ── 후보 사전 계산: 기사마다 관련도 상위 후보(최대 60개) ──
const CAND_MAX = 60;
const cand = new Map();
for (const a of items) {
  const scored = [];
  for (const b of items) {
    if (a.slug === b.slug) continue;
    const r = relevance(a, b);
    if (r > 0) scored.push({ slug: b.slug, r });
  }
  // 관련도 내림차순, 같으면 최신순, 그래도 같으면 해시로 결정적 정렬
  scored.sort((x, y) => (y.r - x.r)
    || (new Date(bySlug.get(y.slug).date) - new Date(bySlug.get(x.slug).date))
    || (hash(a.slug + x.slug) - hash(a.slug + y.slug)));
  cand.set(a.slug, scored.slice(0, CAND_MAX));
}

// ── 인바운드 균형을 맞춘 선택 ──
const picks = new Map(items.map((a) => [a.slug, []]));
const inbound = new Map(items.map((a) => [a.slug, 0]));
const order = [...items].sort((x, y) => hash(x.slug) - hash(y.slug)).map((a) => a.slug);

PASS_WEIGHTS.forEach((w) => {
  for (const slug of order) {
    // 이전 선택 회수
    for (const p of picks.get(slug)) inbound.set(p, inbound.get(p) - 1);
    const chosen = cand.get(slug)
      .map((c) => ({ slug: c.slug, score: c.r - w * inbound.get(c.slug) }))
      .sort((x, y) => (y.score - x.score) || (hash(slug + x.slug) - hash(slug + y.slug)))
      .slice(0, TOTAL_N)
      .map((c) => c.slug);
    picks.set(slug, chosen);
    for (const p of chosen) inbound.set(p, inbound.get(p) + 1);
  }
});

// ── 링크가 부족한 기사 보정 ──
// 관련도 상위 후보만 보면 일부 기사는 누구에게도 뽑히지 않는다. 그런 기사는 자신과 관련도가 있는
// 기사(같은 카테고리·태그)의 마지막 관련 링크 자리를 하나 받아 가되, 링크를 넘겨주는 쪽 기사도
// 최소치(MIN_INBOUND) 아래로 떨어지지 않게 한다.
const MIN_INBOUND = 3;
function repairOrphans() {
  let changed = 0;
  const low = () => items.filter((a) => inbound.get(a.slug) < MIN_INBOUND)
    .sort((x, y) => (inbound.get(x.slug) - inbound.get(y.slug)) || (hash(x.slug) - hash(y.slug)));
  for (let round = 0; round < 6; round++) {
    const targets = low();
    if (!targets.length) break;
    let progressed = false;
    for (const x of targets) {
      // x 와 관련도가 있는 기사들 중 관련도 높은 순 → 링크 여유가 있는 기사부터
      const sources = items
        .filter((a) => a.slug !== x.slug && !picks.get(a.slug).includes(x.slug))
        .map((a) => ({ a, r: relevance(a, x) }))
        .filter((o) => o.r > 0)
        .sort((p, q) => (q.r - p.r) || (hash(x.slug + p.a.slug) - hash(x.slug + q.a.slug)));
      for (const { a } of sources) {
        if (inbound.get(x.slug) >= MIN_INBOUND) break;
        const list = picks.get(a.slug);
        // 넘겨줄 자리: 뒤쪽(본문 하단 3개) 중 인바운드가 가장 높은 기사 (최소치 위에 있어야 함)
        let bestIdx = -1, bestIn = MIN_INBOUND;
        for (let i = SIDEBAR_N; i < list.length; i++) {
          const inn = inbound.get(list[i]);
          if (inn > bestIn) { bestIn = inn; bestIdx = i; }
        }
        if (bestIdx < 0) continue;
        inbound.set(list[bestIdx], inbound.get(list[bestIdx]) - 1);
        list[bestIdx] = x.slug;
        inbound.set(x.slug, inbound.get(x.slug) + 1);
        changed++; progressed = true;
      }
    }
    if (!progressed) break;
  }
  return changed;
}
const repaired = repairOrphans();

// ── 통계 ──
const counts = [...inbound.values()].sort((a, b) => a - b);
const q = (p) => counts[Math.min(counts.length - 1, Math.floor(counts.length * p))];
const noPick = [...picks.values()].filter((p) => p.length < TOTAL_N).length;
console.log(`대상 기사 ${items.length}편 (기사당 관련 링크 ${TOTAL_N}개)`);
console.log(`인바운드 링크 수: 최소 ${counts[0]} / 25% ${q(0.25)} / 중앙값 ${q(0.5)} / 75% ${q(0.75)} / 최대 ${counts[counts.length - 1]}`);
console.log(`인바운드 0개: ${counts.filter((c) => c === 0).length}편, 2개 이하: ${counts.filter((c) => c <= 2).length}편`);
console.log(`관련 후보가 ${TOTAL_N}개 미만인 기사: ${noPick}편, 보정으로 교체한 링크: ${repaired}개`);

// --sample <slug> ... : 해당 기사들의 관련 기사 선택 결과를 출력하고 종료 (점검용)
const si = process.argv.indexOf('--sample');
if (si >= 0) {
  process.argv.slice(si + 1).filter((x) => !x.startsWith('--')).forEach((slug) => {
    const a = bySlug.get(slug);
    if (!a) { console.log('없는 기사: ' + slug); return; }
    console.log('■ ' + a.title.slice(0, 56) + ' [' + a.categories.join(',') + ']');
    picks.get(slug).forEach((p, i) => {
      const b = bySlug.get(p);
      console.log((i < SIDEBAR_N ? '  사이드   ▸ ' : '  본문하단 ▸ ') + b.title.slice(0, 54) + ' [' + b.categories.join(',') + ']');
    });
  });
  process.exit(0);
}

if (DRY) { console.log('(dry-run: 파일을 쓰지 않았습니다)'); process.exit(0); }

// ── HTML 생성/삽입 ──
function sidebarItem(it) {
  return `
      <li>
        <a href="${it.slug}.html" class="related-item">
          <div class="related-thumb">
            <img src="../images/${it.image}" alt="${escAttr(it.title)}" loading="lazy">
          </div>
          <div class="related-info">
            <span class="related-title">${escText(it.title)}</span>
            <span class="related-date">${it.date.replace(/-/g, '.')}</span>
          </div>
        </a>
      </li>`;
}
function inlineCard(it) {
  return `
        <a href="${it.slug}.html" class="related-inline-card">
          <div class="related-inline-thumb">
            <img src="../images/${it.image}" alt="${escAttr(it.title)}" loading="lazy">
          </div>
          <span class="related-inline-card-title">${escText(it.title)}</span>
        </a>`;
}

const UL_OPEN = '<ul class="related-list" id="related-list">';
const GRID_OPEN = '<div class="related-inline-grid" id="related-inline-grid">';

function fill(html, open, closeTag, name, content) {
  const start = `<!--REL:${name}:START-->`;
  const end = `<!--REL:${name}:END-->`;
  const marked = new RegExp(`${start}[\\s\\S]*?${end}`);
  if (marked.test(html)) return html.replace(marked, () => `${start}${content}\n${end}`);
  const emptyRe = new RegExp(`${open.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*${closeTag.replace(/[/]/g, '\\/')}`);
  if (!emptyRe.test(html)) return null;
  return html.replace(emptyRe, () => `${open}${start}${content}\n${end}${closeTag}`);
}

let written = 0, skipped = [];
for (const a of items) {
  const file = path.join(ART, `${a.slug}.html`);
  let html = fs.readFileSync(file, 'utf8');
  const list = picks.get(a.slug).map((s) => bySlug.get(s));
  const side = list.slice(0, SIDEBAR_N);
  const inl = list.slice(SIDEBAR_N, TOTAL_N);

  let out = fill(html, UL_OPEN, '</ul>', 'LIST', side.map(sidebarItem).join(''));
  if (out === null) { skipped.push(a.slug); continue; }
  out = fill(out, GRID_OPEN, '</div>', 'INLINE', inl.map(inlineCard).join(''));
  if (out === null) { skipped.push(a.slug); continue; }
  if (out !== html) { fs.writeFileSync(file, out); written++; }
}
console.log(`기사 ${written}편 갱신, 건너뜀 ${skipped.length}편`);
if (skipped.length) skipped.slice(0, 10).forEach((s) => console.warn('  skip: ' + s));
