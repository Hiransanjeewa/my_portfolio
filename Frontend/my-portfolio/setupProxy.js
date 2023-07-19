const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // The endpoint on your frontend from which you want to proxy requests
    createProxyMiddleware({
      target: 'http://52.5.41.86:8080', // The URL of your backend server
      changeOrigin: true,
      secure: false, // Set to 'false' if your backend server does not use HTTPS
      headers: {
        Host: '52.5.41.86:8080' // Set the correct host header value here
      },
    })
  );
};