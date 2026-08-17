// 에버그린 기사를 수정했을 때 "수정일"만 갱신하는 스크립트.
// 발행일(datePublished / article:published_time / articles-data.js의 date)은 건드리지 않는다.
//
// 하는 일 3가지
//   1. articles/<slug>.html 의 JSON-LD "dateModified" 갱신
//   2. 기사 본문 메타줄에 <time class="meta-item meta-updated"> 수정일 표기 삽입/갱신
//   3. sitemap.xml 의 해당 <url> 블록 <lastmod> 갱신
//
// 사용법
//   node scripts/update-modified-date.js <slug> [<slug> ...]           오늘 날짜로
//   node scripts/update-modified-date.js <slug> --date=2026-09-01      날짜 지정
//   node scripts/update-modified-date.js <slug> --time=14:30           시각 지정(기본 09:00)
//   node scripts/update-modified-date.js --evergreen                   에버그린 배지 전체
//   node scripts/update-modified-date.js <slug> --dry                  미리보기(파일 수정 안 함)
//   node scripts/update-modified-date.js <slug> --no-visible           화면 표기는 건드리지 않음
//
// 예)
//   node scripts/update-modified-date.js vehicle-tax-annual-prepayment-discount-guide

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ARTICLES = path.join(ROOT, 'articles');
const SITEMAP = path.join(ROOT, 'sitemap.xml');

// 에버그린으로 간주하는 배지 (홈 팁 섹션 화이트리스트와 동일)
const EVERGREEN_BADGES = ['DRIVING TIPS', 'POLICY UPDATE', 'EV POLICY', 'GUIDE'];

// ── 인자 파싱 ────────────────────────────────────────────────
const argv = process.argv.slice(2);
const flags = {};
const slugs = [];
for (const a of argv) {
  if (a.startsWith('--')) {
    const [k, v] = a.slice(2).split('=');
    flags[k] = v === undefined ? true : v;
  } else {
    slugs.push(a.replace(/\.html$/, ''));
  }
}

function todayKST() {
  // 서버 로케일에 관계없이 KST 기준 날짜를 뽑는다
  const d = new Date(Date.now() + 9 * 3600 * 1000);
  return d.toISOString().slice(0, 10);
}

const date = flags.date || todayKST();
const time = flags.time || '09:00';
const dry = !!flags.dry;
const visible = !flags['no-visible'];

if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.error(`✗ --date 형식이 잘못됐습니다: ${date} (YYYY-MM-DD)`);
  process.exit(1);
}
if (!/^\d{2}:\d{2}$/.test(time)) {
  console.error(`✗ --time 형식이 잘못됐습니다: ${time} (HH:MM)`);
  process.exit(1);
}

const iso = `${date}T${time}:00+09:00`;
const [y, m, d] = date.split('-').map(Number);
const kdate = `${y}년 ${m}월 ${d}일`;

// 미래 날짜는 검색엔진이 무시하거나 불이익을 줄 수 있어 확인을 받는다
if (date > todayKST() && !flags.force) {
  console.error(`✗ 지정한 수정일(${date})이 오늘(${todayKST()})보다 미래입니다.`);
  console.error('  의도한 것이면 --force 를 붙여 다시 실행하세요.');
  process.exit(1);
}

// ── 대상 결정 ────────────────────────────────────────────────
function loadData() {
  const window = {};
  eval(fs.readFileSync(path.join(ROOT, 'js', 'articles-data.js'), 'utf8'));
  return window.ARTICLES_DATA;
}

let targets = slugs;
if (flags.evergreen) {
  const data = loadData();
  const found = data.filter((x) => EVERGREEN_BADGES.includes(x.badge)).map((x) => x.slug);
  targets = targets.concat(found);
  console.log(`--evergreen: 배지 [${EVERGREEN_BADGES.join(', ')}] 기사 ${found.length}건 선택\n`);
}
targets = [...new Set(targets)];

if (!targets.length) {
  console.log('대상 slug이 없습니다.\n');
  console.log('  node scripts/update-modified-date.js <slug> [--date=YYYY-MM-DD] [--time=HH:MM] [--dry]');
  console.log('  node scripts/update-modified-date.js --evergreen');
  process.exit(1);
}

console.log(`수정일을 ${iso} 로 갱신합니다${dry ? ' (--dry: 미리보기)' : ''}\n`);

// ── 기사 파일 갱신 ───────────────────────────────────────────
let okCount = 0;
const problems = [];
const doneSlugs = [];

for (const slug of targets) {
  const file = path.join(ARTICLES, `${slug}.html`);
  if (!fs.existsSync(file)) {
    problems.push(`${slug}: articles/${slug}.html 파일이 없음`);
    continue;
  }

  let html = fs.readFileSync(file, 'utf8');
  const before = html;
  const changed = [];

  // 1) JSON-LD dateModified — datePublished는 그대로 둔다
  const dmRe = /("dateModified":\s*")([^"]+)(")/;
  const dmMatch = html.match(dmRe);
  if (!dmMatch) {
    problems.push(`${slug}: JSON-LD "dateModified" 항목을 찾지 못함`);
    continue;
  }
  if (dmMatch[2] !== iso) {
    html = html.replace(dmRe, `$1${iso}$3`);
    changed.push(`dateModified ${dmMatch[2]} → ${iso}`);
  }

  // 수정일이 발행일보다 앞서면 건너뛴다 (--evergreen 일괄 실행 시 거꾸로 갱신되는 사고 방지)
  const pub = (html.match(/"datePublished":\s*"([^"]+)"/) || [])[1];
  if (pub && iso < pub) {
    problems.push(`${slug}: 지정한 수정일(${iso})이 발행일(${pub})보다 앞서므로 건너뜀`);
    continue;
  }

  // 2) 화면 표기 — 이미 있으면 갱신, 없으면 읽는 시간 뒤에 삽입
  if (visible) {
    const upRe = /<time class="meta-item meta-updated" datetime="[^"]*">[^<]*<\/time>/;
    const newTag = `<time class="meta-item meta-updated" datetime="${date}">최종 수정 ${kdate}</time>`;
    if (upRe.test(html)) {
      const cur = html.match(upRe)[0];
      if (cur !== newTag) {
        html = html.replace(upRe, newTag);
        changed.push('화면 수정일 표기 갱신');
      }
    } else {
      // <span class="meta-item">읽는 시간 약 N분</span> 바로 뒤에 붙인다
      const readRe = /(<span class="meta-item">읽는 시간[^<]*<\/span>)/;
      if (readRe.test(html)) {
        html = html.replace(readRe, `$1\n          <div class="meta-divider"></div>\n          ${newTag}`);
        changed.push('화면 수정일 표기 삽입');
      } else {
        problems.push(`${slug}: 메타줄(읽는 시간)을 찾지 못해 화면 표기는 건너뜀`);
      }
    }
  }

  if (html === before) {
    console.log(`  - ${slug}  (이미 최신, 변경 없음)`);
    continue;
  }

  if (!dry) fs.writeFileSync(file, html, 'utf8');
  console.log(`  ✓ ${slug}`);
  changed.forEach((c) => console.log(`      ${c}`));
  okCount++;
  doneSlugs.push(slug);
}

// ── sitemap.xml lastmod 갱신 ─────────────────────────────────
if (doneSlugs.length && fs.existsSync(SITEMAP)) {
  let xml = fs.readFileSync(SITEMAP, 'utf8');
  const beforeXml = xml;
  let hit = 0;
  const miss = [];

  for (const slug of doneSlugs) {
    // 해당 <url> 블록 안의 <lastmod>만 바꾼다
    const re = new RegExp(
      `(<loc>[^<]*/articles/${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.html</loc>[\\s\\S]{0,400}?<lastmod>)([^<]+)(</lastmod>)`
    );
    if (re.test(xml)) {
      xml = xml.replace(re, `$1${iso}$3`);
      hit++;
    } else {
      miss.push(slug);
    }
  }

  if (!dry && xml !== beforeXml) fs.writeFileSync(SITEMAP, xml, 'utf8');
  console.log(`\nsitemap.xml: lastmod ${hit}건 갱신${dry ? ' (미리보기)' : ''}`);
  miss.forEach((s) => problems.push(`${s}: sitemap.xml에서 <url> 블록을 찾지 못함`));
}

// ── 결과 ─────────────────────────────────────────────────────
console.log(`\n기사 ${okCount}건 갱신 / 대상 ${targets.length}건`);
if (problems.length) {
  console.log('\n⚠ 확인 필요:');
  problems.forEach((p) => console.log('  - ' + p));
  process.exitCode = 1;
} else {
  console.log('✓ 문제 없음');
}
if (!dry && okCount) {
  console.log('\n다음 단계: node scripts/prerender-lists.js  (목록·RSS 스냅샷 갱신)');
}
