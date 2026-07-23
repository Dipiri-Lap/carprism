// js/articles-data.js가 실제 articles/*.html 파일과 어긋나지 않았는지 확인하는 수동 검증 스크립트.
// 실행: node scripts/validate-articles-data.js
// 기사를 새로 발행하거나 수정한 뒤 가끔 돌려서 데이터 드리프트를 잡는 용도(자동 빌드 훅 아님).

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const articlesDir = path.join(root, 'articles');
const imagesDir = path.join(root, 'images');

// js/articles-data.js는 window.ARTICLES_DATA = [...] 형태의 브라우저 전역 스크립트이므로
// Node에서 그대로 eval해서 배열을 꺼낸다.
const window = {};
eval(fs.readFileSync(path.join(root, 'js', 'articles-data.js'), 'utf8'));
const data = window.ARTICLES_DATA;

let problems = 0;
function report(msg) {
  console.log('  ✗ ' + msg);
  problems++;
}

const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith('.html'));
const fileSlugs = new Set(files.map((f) => f.replace(/\.html$/, '')));
const dataSlugs = new Set(data.map((item) => item.slug));

console.log(`articles/ 파일 ${files.length}개, articles-data.js 항목 ${data.length}개 확인 중...\n`);

// 1. 파일은 있는데 데이터가 없는 경우 / 데이터는 있는데 파일이 없는 경우
for (const slug of fileSlugs) {
  if (!dataSlugs.has(slug)) report(`articles/${slug}.html 파일은 있지만 js/articles-data.js에 항목이 없음`);
}
for (const slug of dataSlugs) {
  if (!fileSlugs.has(slug)) report(`js/articles-data.js에 "${slug}" 항목이 있지만 articles/${slug}.html 파일이 없음`);
}

// 2. 각 데이터 항목의 title/date/image가 실제 파일 내용과 맞는지 확인
for (const item of data) {
  const filePath = path.join(articlesDir, `${item.slug}.html`);
  if (!fs.existsSync(filePath)) continue; // 위에서 이미 리포트함

  const html = fs.readFileSync(filePath, 'utf8');

  const titleMatch = html.match(/<title>(.*?)\s*\|\s*CarPrism<\/title>/);
  const fileTitle = titleMatch ? titleMatch[1] : null;
  if (fileTitle && fileTitle !== item.title) {
    report(`${item.slug}: title 불일치\n      data:  ${item.title}\n      file:  ${fileTitle}`);
  }

  const dateMatch = html.match(/article:published_time"\s+content="(\d{4}-\d{2}-\d{2})/);
  const fileDate = dateMatch ? dateMatch[1] : null;
  if (fileDate && fileDate !== item.date) {
    report(`${item.slug}: date 불일치 (data: ${item.date}, file: ${fileDate})`);
  }

  const imagePath = path.join(imagesDir, item.image);
  if (!fs.existsSync(imagePath)) {
    report(`${item.slug}: image "${item.image}"가 images/ 폴더에 없음`);
  }

  const slugAttrMatch = html.match(/data-slug="([^"]*)"/);
  if (!slugAttrMatch) {
    report(`${item.slug}: <article data-slug="..."> 속성이 없음(관련기사 렌더링 불가)`);
  } else if (slugAttrMatch[1] !== item.slug) {
    report(`${item.slug}: data-slug 값이 "${slugAttrMatch[1]}"로 어긋남`);
  }
}

console.log();
if (problems === 0) {
  console.log('✓ 문제 없음 — articles-data.js가 실제 기사 파일과 일치합니다.');
} else {
  console.log(`✗ ${problems}건 발견 — 위 내용을 확인해서 js/articles-data.js 또는 기사 파일을 고쳐주세요.`);
  process.exitCode = 1;
}
