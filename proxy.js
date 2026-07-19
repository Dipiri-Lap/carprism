const cors_proxy = require('cors-anywhere');

// 로컬 8080 포트에서 CORS 프록시 구동
const host = '127.0.0.1';
const port = 8080;

cors_proxy.createServer({
    originWhitelist: [], // 모든 오리진 허용
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
