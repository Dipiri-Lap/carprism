#!/usr/bin/env node
/**
 * build-article.js 가 만든 <spec>.data.json 을 받아
 *   1) js/articles-data.js 배열 맨 앞에 항목 삽입 (slug 중복 시 교체)
 *   2) sitemap.xml 에 <url> 추가 + lastmod 갱신
 * 까지 처리한다.
 *
 * 사용법: node scripts/publish-articles.js <spec.data.json>
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'js', 'articles-data.js');
const SITEMAP = path.join(ROOT, 'sitemap.xml');
const BASE = 'https://carprism.tmhub.co.kr';

function entryToJs(e) {
  const j = (v) => JSON.stringify(v);
  return `  {
    slug: ${j(e.slug)},
    title: ${j(e.title)},
    date: ${j(e.date)},
    image: ${j(e.image)},
    categories: [${e.categories.map(j).join(', ')}],
    tags: [${e.tags.map(j).join(', ')}],
    badge: ${j(e.badge)},
    badgeClass: ${j(e.badgeClass)},
    source: ${j(e.source)},
    desc: ${j(e.desc)}
  }`;
}

function updateData(entries) {
  let src = fs.readFileSync(DATA, 'utf8');
  const m = /window\.ARTICLES_DATA = \[\r?\n/.exec(src);
  if (!m) throw new Error('articles-data.js 구조를 찾지 못했습니다');
  const marker = m[0];
  const EOL = marker.endsWith('\r\n') ? '\r\n' : '\n';

  // 기존에 같은 slug 가 있으면 제거 (재발행 대응)
  for (const e of entries) {
    const re = new RegExp(`\\r?\\n  \\{\\r?\\n    slug: "${e.slug}",[\\s\\S]*?\\r?\\n  \\},`, 'g');
    if (re.test(src)) {
      src = src.replace(re, '');
      console.log(`  · 기존 항목 교체: ${e.slug}`);
    }
  }

  const insertAt = src.indexOf(marker) + marker.length;
  const block = (entries.map(entryToJs).join(',\n') + ',\n').replace(/\n/g, EOL);
  src = src.slice(0, insertAt) + block + src.slice(insertAt);
  fs.writeFileSync(DATA, src, 'utf8');
  console.log(`✓ articles-data.js — ${entries.length}건 추가`);
}

function updateSitemap(entries) {
  let xml = fs.readFileSync(SITEMAP, 'utf8');
  const today = entries[0].date;

  for (const e of entries) {
    const loc = `${BASE}/articles/${e.slug}.html`;
    if (xml.includes(loc)) {
      console.log(`  · sitemap 이미 존재: ${e.slug}`);
      continue;
    }
    const block = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${e.date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    xml = xml.replace('</urlset>', block + '</urlset>');
  }

  // 홈/목록 페이지 lastmod 를 오늘로 갱신
  for (const p of ['/', '/index.html', '/news.html', '/domestic.html', '/import.html', '/electric.html', '/reviews.html', '/archive.html']) {
    const re = new RegExp(`(<loc>${BASE.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}${p.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}</loc>\\s*<lastmod>)[^<]*(</lastmod>)`, 'g');
    xml = xml.replace(re, `$1${today}$2`);
  }

  fs.writeFileSync(SITEMAP, xml, 'utf8');
  console.log(`✓ sitemap.xml — ${entries.length}건 반영, 목록 페이지 lastmod ${today}`);
}

const file = process.argv[2];
if (!file) { console.error('usage: node scripts/publish-articles.js <spec.data.json>'); process.exit(1); }
const entries = JSON.parse(fs.readFileSync(file, 'utf8'));
updateData(entries);
updateSitemap(entries);
console.log('\n다음: node scripts/validate-articles-data.js && node scripts/prerender-lists.js');
