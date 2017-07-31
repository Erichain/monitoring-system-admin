const express = require('express');
const barData = require('./bar-chart-data');
const lineData = require('./line-chart-data');
const polarAreaData = require('./polar-area-chart-data');
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

app.get('/data/line', (req, res) => {
  res.send(JSON.stringify(lineData));
});

app.get('/data/polarArea', (req, res) => {
  res.send(JSON.stringify(polarAreaData));
});

app.listen(2333, function () {
  console.log('Mock server is listening on http://localhost:2333');
});
