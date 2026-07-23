// 로컬 전용 CORS 프록시 (collector.html이 뉴스 원문을 가져올 때 사용)
// cors-anywhere/http-proxy 의존성에 critical SSRF 취약점(GHSA-r3jv-xfgx-gj24)이 있어 제거하고,
// Node 내장 http/https만으로 동일한 역할을 하는 최소 구현으로 교체했다.
const http = require('http');
const https = require('https');
const { URL } = require('url');

const HOST = '127.0.0.1';
const PORT = 8080;

const server = http.createServer((req, res) => {
  const targetUrl = decodeURIComponent(req.url.slice(1)); // 맨 앞 '/' 제거

  let target;
  try {
    target = new URL(targetUrl);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid target URL');
    return;
  }
  if (target.protocol !== 'http:' && target.protocol !== 'https:') {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Only http/https targets are allowed');
    return;
  }

  const client = target.protocol === 'https:' ? https : http;
  const proxyReq = client.request(target, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' } }, (proxyRes) => {
    res.writeHead(proxyRes.statusCode || 502, {
      'Content-Type': proxyRes.headers['content-type'] || 'text/plain',
      'Access-Control-Allow-Origin': '*',
    });
    proxyRes.pipe(res);
  });

  proxyReq.on('error', (err) => {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Proxy error: ' + err.message);
  });
  proxyReq.end();
});

server.listen(PORT, HOST, () => {
  console.log(`Running local CORS proxy on http://${HOST}:${PORT}`);
});
