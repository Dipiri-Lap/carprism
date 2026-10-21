#!/usr/bin/env node
/**
 * 발행 전 기사 품질 점검(경고 전용) — docs/article-guidelines.md 의 체크리스트를 자동화한 것.
 * validate-articles-data.js 가 "데이터와 파일의 일치"를 보는 반면, 이 스크립트는 "기사 자체의 구조"를 본다.
 *
 * 사용법
 *   node scripts/lint-article.js <slug> [slug...]     지정한 기사
 *   node scripts/lint-article.js --date=2026-10-21    그날 날짜로 발행된 기사 전체
 *   node scripts/lint-article.js --all                전체(오래 걸리고 경고가 많이 나온다)
 *
 * 종료 코드: 오류(✗)가 있으면 1, 경고(△)만 있으면 0. 경고는 사람이 판단한다(스팸 점검이 아니라 놓친 것 확인용).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const window = {};
eval(fs.readFileSync(path.join(ROOT, 'js', 'articles-data.js'), 'utf8'));
const DATA = window.ARTICLES_DATA;

const args = process.argv.slice(2);
let slugs = [];
for (const a of args) {
  if (a === '--all') slugs = DATA.map((d) => d.slug);
  else if (a.startsWith('--date=')) slugs.push(...DATA.filter((d) => d.date === a.slice(7)).map((d) => d.slug));
  else slugs.push(a.replace(/\.html$/, ''));
}
if (!slugs.length) {
  console.log('사용법: node scripts/lint-article.js <slug...> | --date=YYYY-MM-DD | --all');
  process.exit(0);
}

const GENERIC_H2 = /^(개요|정리|마무리|결론|요약|들어가며|소개|마치며|총정리|기본 정보|참고)$/;
const RISKY_PHRASES = [
  [/광고(를)?\s*(클릭|눌러|눌러서)|광고 (좀 )?보(고|세요)/, '광고 클릭 유도로 읽힐 수 있는 문구'],
  [/선착순|오늘이 가장 (싸|쌉)|지금 아니면|마지막 기회|놓치면 후회/, '허위 긴급성·희소성 문구'],
  [/(직접|제가|저는)\s*(써|타|몰아|시승|구매|가)\s*(보니|봤|본)|써 ?보니|타 ?보니|다녀와 ?보니/, '1인칭 경험 표현(실제 경험·시승 근거가 없으면 허위 후기)'],
  [/90%만 공개|나머지는 (유료|댓글)|댓글을 남기면/, '정보를 숨기거나 댓글을 유도하는 문구'],
];

let errors = 0;
let warns = 0;

function lint(slug) {
  const file = path.join(ROOT, 'articles', slug + '.html');
  if (!fs.existsSync(file)) {
    console.log(`✗ ${slug}: 파일이 없다`);
    errors++;
    return;
  }
  const html = fs.readFileSync(file, 'utf8');
  const bodyStart = html.indexOf('<div class="article-body');
  const bodyEnd = html.indexOf('<footer class="article-footer');
  const body = bodyStart >= 0 ? html.slice(bodyStart, bodyEnd > bodyStart ? bodyEnd : undefined) : html;
  const out = [];
  const err = (m) => { out.push('  ✗ ' + m); errors++; };
  const warn = (m) => { out.push('  △ ' + m); warns++; };

  const title = ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '').replace(/<[^>]+>/g, '').trim();

  // 1. 제목: 숫자·인용구·의문형 중 하나, 건조한 '총정리' 금지
  if (!/[0-9]/.test(title) && !/["'“”‘’?]/.test(title)) warn('제목에 숫자·인용구·의문형이 없다(후킹 요소 부족)');
  if (/총정리/.test(title)) warn('제목에 "총정리" — 건조한 제목 금지 규칙');

  // 2. H2: 5개 이상, 밋밋한 소제목 점검
  const sumIdx = body.indexOf('class="summary-box"');
  const h2all = [...body.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)];
  const h2s = h2all.map((m) => m[1].replace(/<[^>]+>/g, '').trim());
  // 정리 박스(summary-box) 안의 H2 는 '정리·요약' 이어도 허용한다
  const h2body = h2all.filter((m) => sumIdx < 0 || m.index < sumIdx).map((m) => m[1].replace(/<[^>]+>/g, '').trim());
  if (h2s.length < 5) warn(`H2 ${h2s.length}개 (5개 이상 권장)`);
  const plain = h2body.filter((t) => GENERIC_H2.test(t.replace(/^[0-9]+[.)]\s*/, '')));
  if (plain.length) warn(`밋밋한 H2: ${plain.join(' / ')} → 질문·수치·키워드가 들어간 소제목으로`);

  // 3. 이미지: 본문 img 수 (히어로 포함)
  const imgs = (body.match(/<img /g) || []).length;
  if (imgs < 4) err(`이미지 ${imgs}장 (최소 4장)`);
  else if (imgs < 8) warn(`이미지 ${imgs}장 (목표 8장 이상)`);
  const noAlt = [...body.matchAll(/<img [^>]*>/g)].filter((m) => !/alt="[^"]{4,}"/.test(m[0])).length;
  if (noAlt) warn(`alt 가 없거나 너무 짧은 이미지 ${noAlt}장`);

  // 4. 내부 링크 2~4개 (본문 영역, 광고·관련기사 제외)
  const internal = new Set([...body.matchAll(/href="(?:\.\.\/articles\/)?([a-z0-9_-]+)\.html"/gi)].map((m) => m[1]).filter((s) => s !== slug));
  if (internal.size < 2) warn(`내부 링크 ${internal.size}개 (2~4개 권장)`);
  else if (internal.size > 6) warn(`내부 링크 ${internal.size}개 (많다)`);

  // 5. 표 뒤 해설 한 줄: 표 래퍼 다음이 <p> 인지
  const tables = [...body.matchAll(/<\/table>\s*<\/div>\s*([\s\S]{0,60})/g)];
  const noNote = tables.filter((m) => !/^<p[ >]/.test(m[1].trim())).length;
  if (tables.length && noNote) warn(`표 ${tables.length}개 중 ${noNote}개는 바로 뒤에 해설 문단이 없다(왜 이런 차이가 나는지 한 줄)`);

  // 6. 정보 증분 대리 지표: 표 또는 info/checkpoint 박스가 하나는 있어야 한다
  if (!tables.length && !/class="(info-box|checkpoint-box)/.test(body)) warn('표·info-box·checkpoint-box 가 모두 없다(정보 증분 요소 부족)');

  // 7. 구조 요소
  if (!/id="summary"|class="summary-box/.test(body)) warn('summary-box 가 없다');
  if (!/adsbygoogle/.test(body)) warn('본문 광고 자리가 없다');
  if (!/class="cta-box"/.test(body)) warn('CTA 박스(다음에 볼 기사)가 없다 — spec.cta 로 추가');

  // 7-1. '카프리즘 시선' 해석 박스 규칙: 2문단 이하, 구매 권유 금지
  const insight = (body.match(/<div class="insight-box">([\s\S]*?)<\/div>/) || [])[1];
  if (insight) {
    const paras = (insight.match(/<p(?![^>]*insight-title)[^>]*>/g) || []).length;
    if (paras > 2) warn(`카프리즘 시선 박스 문단 ${paras}개(1~2문단)`);
    if (/사(야|지 말아야) (한다|합니다)|추천(한다|합니다|드립니다)|비추천|무조건/.test(insight.replace(/<[^>]+>/g, ''))) warn('카프리즘 시선 박스에 구매 권유·단정 표현');
  }
  if ((body.match(/class="insight-box"/g) || []).length > 1) warn('카프리즘 시선 박스는 기사당 1개');

  // 8. 도입부 첫 문단 길이
  const firstP = (body.match(/<p[^>]*>([\s\S]*?)<\/p>/) || [])[1] || '';
  const sentences = firstP.replace(/<[^>]+>/g, '').split(/[.?!]\s/).filter((s) => s.trim().length > 4).length;
  if (sentences > 4) warn(`도입부 첫 문단이 ${sentences}문장(2~3문장 권장)`);

  // 9. 위험 문구
  const text = body.replace(/<[^>]+>/g, ' ');
  for (const [re, label] of RISKY_PHRASES) {
    const m = text.match(re);
    if (m) warn(`${label}: "${m[0]}"`);
  }

  // 10. 긴 문단 (5문장 이상)
  const longP = [...body.matchAll(/<p>([\s\S]*?)<\/p>/g)].filter((m) => m[1].replace(/<[^>]+>/g, '').split(/[.?!]\s/).filter((s) => s.trim().length > 4).length >= 6).length;
  if (longP) warn(`6문장 이상 문단 ${longP}개(2~3문장 권장)`);

  console.log(`${out.length ? '▸' : '✓'} ${slug}`);
  out.forEach((l) => console.log(l));
}

slugs.forEach(lint);
console.log(`\n점검 ${slugs.length}편: 오류 ${errors}, 경고 ${warns}`);
process.exit(errors ? 1 : 0);
