const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

app.post('/connect', (req, res) => {
  const { userId } = req.body;
  exec(`openvpn --config /etc/openvpn/${userId}.conf`, (err, stdout, stderr) => {
    if (err) {
      res.status(500).send('Connection failed');
    } else {
      res.send('Connected');
    }
  });
});

app.listen(3000, () => console.log('VPN Service running on port 3000'));
