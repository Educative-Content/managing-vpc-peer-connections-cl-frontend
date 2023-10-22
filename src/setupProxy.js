// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://<Provide Endpoint DNS Name Here>:3000', // Specify the target URL where your API is hosted
      changeOrigin: true,
    })
  );
};
