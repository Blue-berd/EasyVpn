const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/pay', async (req, res) => {
  const paymentData = req.body;
  try {
    const response = await axios.post('https://payu.com/api/payment', paymentData);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Payment failed');
  }
});

app.listen(3000, () => console.log('Payment Service running on port 3000'));


// # User Service
// cd user-service
// docker build -t jaysardar/user-service:latest .

// # Payment Service
// cd ../payment-service
// docker build -t jaysardar/payment-service:latest .

// # VPN Service
// cd ../vpn-service
// docker build -t jaysardar/vpn-service:latest .

// # API Gateway
// cd ../api-gateway
// docker build -t jaysardar/api-gateway:latest .

// # VPN Frontend
// cd ../vpn-frontend
// docker build -t jaysardar/vpn-frontend:latest .
// docker push jaysardar/user-service:latest
// docker push jaysardar/payment-service:latest
// docker push jaysardar/vpn-service:latest
// docker push jaysardar/api-gateway:latest
// docker push jaysardar/vpn-frontend:latest