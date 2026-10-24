// images/ 를 Cloudflare R2(img.tmhub.co.kr/carprism/) 에 올린다. gamesite 의 tools/r2-upload.js 를 바탕으로 함.
// 외부 의존성 없이 node 내장 crypto/fetch 로 SigV4 서명.
//
// 사용법:
//   node scripts/r2-upload.js                       드라이런(대상 집계)
//   node scripts/r2-upload.js --write               미업로드·변경분 업로드
//   node scripts/r2-upload.js --write --limit 20
//   node scripts/r2-upload.js --write --only a.webp,b.webp
//   node scripts/r2-upload.js --verify              매니페스트 전체를 HEAD 로 ETag(md5) 대조
//
// 안전장치: 버킷은 gamesite 와 공유하므로 모든 키는 반드시 `carprism/` 로 시작해야 하며
// 그 밖의 키에는 요청 자체를 보내지 않는다. 업로드 기록은 r2-manifest.json (gitignore 하지 않음, 커밋 대상).
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'images');
const MANIFEST = path.join(ROOT, 'r2-manifest.json');
const PREFIX = 'carprism/';
const BASE_URL = 'https://img.tmhub.co.kr/' + PREFIX;
const WRITE = process.argv.includes('--write');
const VERIFY = process.argv.includes('--verify');
const arg = (n) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : null; };
const LIMIT = arg('--limit') ? Number(arg('--limit')) : Infinity;
const ONLY = arg('--only') ? new Set(arg('--only').split(',')) : null;
const CONCURRENCY = 8;
const MIME = { webp: 'image/webp', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', avif: 'image/avif' };

function loadEnv() {
  const out = {};
  const p = path.join(ROOT, 'r2.env');
  if (fs.existsSync(p)) for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return out;
}
const E = { ...loadEnv(), ...process.env };
const ACCOUNT = E.R2_ACCOUNT_ID, KEY = E.R2_ACCESS_KEY_ID, SECRET = E.R2_SECRET_ACCESS_KEY, BUCKET = E.R2_BUCKET;
if ((WRITE || VERIFY) && !(ACCOUNT && KEY && SECRET && BUCKET)) {
  console.error('오류: r2.env 에 R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY / R2_BUCKET 가 필요합니다.');
  process.exit(1);
}
const HOST = ACCOUNT ? `${ACCOUNT}.r2.cloudflarestorage.com` : '';
const sha256 = (b) => crypto.createHash('sha256').update(b).digest('hex');
const hmac = (k, d) => crypto.createHmac('sha256', k).update(d).digest();

function sign(method, key, body, contentType) {
  if (!key.startsWith(PREFIX) || key.includes('..')) throw new Error('carprism/ 밖의 키는 허용하지 않음: ' + key);
  const amzDate = new Date().toISOString().replace(/[:-]|\.\d{3}/g, '');
  const dateStamp = amzDate.slice(0, 8);
  const payloadHash = sha256(body || '');
  const uri = '/' + [BUCKET, ...key.split('/')].map(encodeURIComponent).join('/');
  const headers = { host: HOST, 'x-amz-content-sha256': payloadHash, 'x-amz-date': amzDate };
  if (contentType) headers['content-type'] = contentType;
  const names = Object.keys(headers).sort();
  const canonical = [method, uri, '', names.map((h) => `${h}:${headers[h]}\n`).join(''), names.join(';'), payloadHash].join('\n');
  const scope = `${dateStamp}/auto/s3/aws4_request`;
  const sts = ['AWS4-HMAC-SHA256', amzDate, scope, sha256(Buffer.from(canonical))].join('\n');
  let k = hmac('AWS4' + SECRET, dateStamp); k = hmac(k, 'auto'); k = hmac(k, 's3'); k = hmac(k, 'aws4_request');
  headers.Authorization = `AWS4-HMAC-SHA256 Credential=${KEY}/${scope}, SignedHeaders=${names.join(';')}, Signature=${crypto.createHmac('sha256', k).update(sts).digest('hex')}`;
  return { url: `https://${HOST}${uri}`, headers };
}

const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
const save = () => fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 0), 'utf8');

function collect() {
  return fs.readdirSync(IMG_DIR).filter((f) => MIME[(f.split('.').pop() || '').toLowerCase()] && (!ONLY || ONLY.has(f)))
    .map((f) => ({ file: f, abs: path.join(IMG_DIR, f), key: PREFIX + f, type: MIME[f.split('.').pop().toLowerCase()] }));
}
function needsUpload(it) {
  const r = manifest[it.file];
  if (!r) return true;
  const st = fs.statSync(it.abs);
  return r.size !== st.size || r.mtime !== Math.floor(st.mtimeMs);
}

(async () => {
  if (VERIFY) {
    let bad = 0, n = 0;
    const entries = Object.entries(manifest).filter(([f]) => !ONLY || ONLY.has(f));
    const queue = [...entries];
    await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
      while (queue.length) {
        const [f, r] = queue.shift();
        const abs = path.join(IMG_DIR, f);
        try {
          const { url, headers } = sign('HEAD', r.key);
          const res = await fetch(url, { method: 'HEAD', headers });
          const etag = (res.headers.get('etag') || '').replace(/"/g, '');
          const md5 = fs.existsSync(abs) ? crypto.createHash('md5').update(fs.readFileSync(abs)).digest('hex') : null;
          if (!res.ok || (md5 && etag !== md5)) { bad++; if (bad <= 10) console.error(`  [불일치] ${f} HTTP ${res.status} etag=${etag} md5=${md5}`); }
        } catch (e) { bad++; console.error(`  [오류] ${f} ${e.message}`); }
        n++;
      }
    }));
    console.log(`검증 ${n}개, 불일치 ${bad}개`);
    process.exit(bad ? 1 : 0);
  }
  const all = collect();
  const todo = all.filter(needsUpload).slice(0, LIMIT);
  const bytes = todo.reduce((s, i) => s + fs.statSync(i.abs).size, 0);
  console.log(`전체 ${all.length}개 / 업로드 기록 ${Object.keys(manifest).length}개 / 이번 대상 ${todo.length}개 (${(bytes / 1048576).toFixed(0)}MB)`);
  console.log(`공개 URL: ${BASE_URL}{파일명}`);
  if (!WRITE) return console.log('\n(드라이런 — 실제 업로드는 --write)');
  let done = 0, failed = 0;
  const queue = [...todo];
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const it = queue.shift();
      try {
        const body = fs.readFileSync(it.abs);
        const { url, headers } = sign('PUT', it.key, body, it.type);
        const res = await fetch(url, { method: 'PUT', body, headers });
        if (!res.ok) throw new Error(`HTTP ${res.status} ${(await res.text()).slice(0, 120)}`);
        const st = fs.statSync(it.abs);
        manifest[it.file] = { key: it.key, size: st.size, mtime: Math.floor(st.mtimeMs) };
        done++;
      } catch (e) { failed++; if (failed <= 5) console.error(`  [FAIL] ${it.file} — ${e.message}`); }
      if ((done + failed) % 200 === 0) { save(); console.log(`  진행 ${done + failed}/${todo.length}`); }
    }
  }));
  save();
  console.log(`\n완료 — 성공 ${done}개, 실패 ${failed}개. 매니페스트: r2-manifest.json`);
})();
