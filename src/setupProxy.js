const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://47.243.123.248:5000',
      changeOrigin: true,
    })
  );
};