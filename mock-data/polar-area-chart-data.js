const Mock = require('mockjs');

module.exports = Mock.mock({
  labels: [10, 20, 30, 40, 50],
  datasets: [{
    label: 'of XXXX',
    data: [10, 20, 30, 40, 50],
    backgroundColor: [
      'green',
      'blue',
      'red',
      'yellow',
      'orange',
    ],
  }],
});
