const express = require('express');
const barData = require('./bar-chart-data');
const app = express();

app.get('/', (req, res) => {
  res.send('Request success!');
});

app.listen(3333, function () {
  console.log('Mock server is listening on http://localhost:3333');
});
