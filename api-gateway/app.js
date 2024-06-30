const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/user', createProxyMiddleware({ target: 'http://user-service:3000', changeOrigin: true }));
app.use('/payment', createProxyMiddleware({ target: 'http://payment-service:3000', changeOrigin: true }));
app.use('/vpn', createProxyMiddleware({ target: 'http://vpn-service:3000', changeOrigin: true }));

app.listen(3000, () => console.log('API Gateway running on port 3000'));
