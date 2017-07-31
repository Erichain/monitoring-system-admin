const Mock = require('mockjs');

module.exports = Mock.mock({
  labels: [10, 20, 30, 40, 50],
  datasets: [{
    label: 'of XXXX',
    data: [{
      x: 10,
      y: 10,
    }, {
      x: 20,
      y: 20,
    }, {
      x: 30,
      y: 15,
    }, {
      x: 40,
      y: 19,
    }, {
      x: 50,
      y: 15,
    }],
    backgroundColor: 'rgba(100, 100, 0, 0.1)',
    pointStyle: 'star',
    pointBackgroundColor: 'rgba(255, 0, 0, 1)',
  }],
});
