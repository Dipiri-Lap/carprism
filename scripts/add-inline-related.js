#!/usr/bin/env node
/**
 * 이미 발행된 articles/*.html 본문 하단(마지막 멀티플렉스 광고 아래)에
 * "함께 보면 좋은 기사" 인라인 블록을 일괄 삽입한다.
 *
 * 모바일에서는 .article-sidebar가 본문 전체 아래로 밀려나기 때문에
 * 사이드바 관련 기사만으로는 노출이 거의 안 된다. build-article.js는
 * 이 블록을 신규 기사에 자동으로 넣도록 이미 수정했고, 이 스크립트는
 * 그 이전에 발행된 기존 기사에 같은 블록을 소급 적용한다.
 *
 * 이미 블록이 있는 파일은 건너뛴다(재실행해도 안전).
 *
 * 사용법: node scripts/add-inline-related.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ART = path.join(ROOT, 'articles');

const MARKER = 'id="related-inline"';
const BLOCK = `
        <div class="related-inline reveal" id="related-inline">
          <h2 class="related-inline-title">함께 보면 좋은 기사</h2>
          <div class="related-inline-grid" id="related-inline-grid"></div>
        </div>
`;

// 멀티플렉스 광고(slot 2907599434) 스크립트가 끝난 직후, article-body를
// 닫는 첫 </div> 앞에 삽입한다. 모든 기사가 build-article.js로 생성돼
// 이 패턴이 정확히 1번씩만 등장한다(사전에 grep으로 확인됨).
const ANCHOR = /(data-ad-slot="2907599434"><\/ins>\s*<script>\s*\(adsbygoogle = window\.adsbygoogle \|\| \[\]\)\.push\(\{\}\);\s*<\/script>\s*\n)(\s*<\/div>)/;

function process(file) {
  const p = path.join(ART, file);
  const src = fs.readFileSync(p, 'utf8');
  if (src.includes(MARKER)) return 'skip';

  const m = ANCHOR.exec(src);
  if (!m) return 'no-match';

  const out = src.slice(0, m.index) + m[1] + BLOCK + m[2] + src.slice(m.index + m[0].length);
  fs.writeFileSync(p, out, 'utf8');
  return 'patched';
}

const files = fs.readdirSync(ART).filter((f) => f.endsWith('.html'));
let patched = 0, skipped = 0, noMatch = [];

for (const f of files) {
  const r = process(f);
  if (r === 'patched') patched += 1;
  else if (r === 'skip') skipped += 1;
  else noMatch.push(f);
}

console.log(`총 ${files.length}개 중 ${patched}건 삽입, ${skipped}건 이미 존재(건너뜀)`);
if (noMatch.length) {
  console.warn(`⚠ 앵커를 찾지 못한 ${noMatch.length}건:`);
  noMatch.slice(0, 20).forEach((f) => console.warn('   ' + f));
}
