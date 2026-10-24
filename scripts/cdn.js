// 이미지 주소를 R2 CDN(img.tmhub.co.kr/carprism/) 주소로 바꾸는 공용 모듈.
// R2 에 올라간 파일(r2-manifest.json 에 있는 것)만 바꾸므로 업로드 전 이미지는 로컬 경로로 남는다.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://img.tmhub.co.kr/carprism/';
const KEEP_LOCAL = /^(favicon|logo)/; // 파비콘·로고는 도메인 루트 기준 경로를 유지한다

let manifest = null;
function loadManifest() {
  if (!manifest) {
    const p = path.join(ROOT, 'r2-manifest.json');
    manifest = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {};
  }
  return manifest;
}

const RE = /(?<![A-Za-z0-9_\-.:/])(?:https:\/\/carprism\.tmhub\.co\.kr\/|(?:\.\.\/)+|\/)?images\/([A-Za-z0-9_.\-]+\.(?:webp|png|jpe?g|avif))/g;

// 텍스트 안의 images/<파일> 참조를 CDN 주소로 치환한다. { text, changed } 반환.
function cdnize(text) {
  const m = loadManifest();
  let changed = 0;
  const out = text.replace(RE, (all, file) => {
    if (!m[file] || KEEP_LOCAL.test(file)) return all;
    changed++;
    return BASE + file;
  });
  return { text: out, changed };
}

module.exports = { BASE, cdnize, loadManifest };
