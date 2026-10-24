// 발행 마지막 단계: 새 이미지를 R2 에 올리고(r2-upload --write), 사이트 파일의 이미지 주소를 CDN 주소로 바꾼다.
// 사용: node scripts/cdn-sync.js            (전체)  /  node scripts/cdn-sync.js --check  (바꿀 것만 집계)
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { cdnize } = require('./cdn.js');

const ROOT = path.join(__dirname, '..');
const CHECK = process.argv.includes('--check');
const SKIP = new Set(['node_modules', '.git', 'scratchpad', 'scratchpad_dl', 'images', 'ref', 'imgs_travel_g2', 'test', 'docs', 'dl3', 'collector', 'templates']);

if (!CHECK) {
  execFileSync('node', [path.join(__dirname, 'r2-upload.js'), '--write'], { cwd: ROOT, stdio: 'inherit' });
  // 업로드 기록이 바뀌었으니 매니페스트를 다시 읽게 한다
  delete require.cache[require.resolve('./cdn.js')];
}
const { cdnize: cz } = CHECK ? { cdnize } : require('./cdn.js');

let files = 0, refs = 0;
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) { if (!SKIP.has(f)) walk(p); continue; }
    if (!/\.(html|xml)$/.test(f) && !(d.endsWith('js') && f === 'articles-data.js')) continue;
    const src = fs.readFileSync(p, 'utf8');
    const { text, changed } = cz(src);
    if (changed) { refs += changed; files++; if (!CHECK) fs.writeFileSync(p, text, 'utf8'); }
  }
})(ROOT);
console.log(`${CHECK ? '변경 대상' : '변경 완료'}: 파일 ${files}개, 이미지 참조 ${refs}곳`);
