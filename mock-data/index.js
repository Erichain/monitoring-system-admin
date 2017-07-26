const express = require('express');
const barData = require('./bar-chart-data');
const app = express();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(allowCrossDomain);

app.get('/', () => {
  res.send('Request Success!');
});

app.get('/data/bar', (req, res) => {
  res.send(JSON.stringify(barData));
});

app.listen(2333, function () {
  console.log('Mock server is listening on http://localhost:2333');
});
