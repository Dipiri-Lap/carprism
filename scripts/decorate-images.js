#!/usr/bin/env node
/**
 * 기사 본문 <img> 에 실제 크기(width/height)와 지연 로딩을 붙인다.
 *
 * 왜 필요한가
 *  - width/height 가 없으면 지연 로딩된 이미지가 뒤늦게 자리를 차지하며 본문을 밀어낸다(CLS).
 *  - 크기를 명시하면 브라우저가 미리 자리를 비워 두므로 흔들림이 사라진다.
 *  - css/article.css 의 .article-img-wrap img 에 height:auto 가 있어 비율은 그대로 유지된다.
 *
 * 히어로 이미지는 첫 화면에 필요하므로 loading="lazy" 를 걸지 않는다.
 *
 * 사용법
 *   node scripts/decorate-images.js                 # articles/ 전체
 *   node scripts/decorate-images.js slug1 slug2 ...  # 특정 기사만
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const ART = path.join(ROOT, 'articles');
const IMG = path.join(ROOT, 'images');

const IMG_TAG = /<img src="\.\.\/images\/([^"]+)"([^>]*)>/g;

const dimCache = new Map();

async function dimensions(file) {
  if (dimCache.has(file)) return dimCache.get(file);
  const p = path.join(IMG, file);
  if (!fs.existsSync(p)) { dimCache.set(file, null); return null; }
  try {
    const md = await sharp(p).metadata();
    const d = { w: md.width, h: md.height };
    dimCache.set(file, d);
    return d;
  } catch (e) {
    dimCache.set(file, null);
    return null;
  }
}

async function decorate(slug) {
  const p = path.join(ART, slug + '.html');
  const src = fs.readFileSync(p, 'utf8');

  // 히어로는 문서에 처음 등장하는 본문 이미지다
  const first = IMG_TAG.exec(src);
  IMG_TAG.lastIndex = 0;
  const heroFile = first ? first[1] : null;

  const tags = [...src.matchAll(IMG_TAG)];
  let out = src;
  let added = 0;
  let missing = [];

  for (const m of tags) {
    const [tag, file, attrs] = m;
    const d = await dimensions(file);
    if (!d) { missing.push(file); continue; }

    let next = tag;
    if (!/width=/.test(attrs)) {
      next = next.replace(' itemprop="image"', ` width="${d.w}" height="${d.h}" itemprop="image"`);
    }
    if (file !== heroFile && !/loading=/.test(attrs)) {
      next = next.replace('itemprop="image"', 'itemprop="image" loading="lazy" decoding="async"');
    }
    if (next !== tag) { out = out.replace(tag, next); added += 1; }
  }

  if (out !== src) fs.writeFileSync(p, out, 'utf8');
  return { slug, total: tags.length, added, missing };
}

(async () => {
  const args = process.argv.slice(2);
  const slugs = args.length
    ? args.map((a) => a.replace(/\.html$/, ''))
    : fs.readdirSync(ART).filter((f) => f.endsWith('.html')).map((f) => f.replace(/\.html$/, ''));

  let touched = 0, imgs = 0;
  const missingAll = new Set();

  for (const slug of slugs) {
    const r = await decorate(slug);
    imgs += r.total;
    if (r.added) { touched += 1; console.log(`✓ ${r.slug}  (${r.added}/${r.total}장 보정)`); }
    r.missing.forEach((f) => missingAll.add(f));
  }

  console.log(`\n기사 ${slugs.length}건 · 이미지 ${imgs}장 확인 — ${touched}건 수정`);
  if (missingAll.size) {
    console.warn(`⚠ 파일을 찾지 못한 이미지 ${missingAll.size}건:`);
    [...missingAll].slice(0, 10).forEach((f) => console.warn('   ' + f));
  }
})();
