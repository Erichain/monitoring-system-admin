/**
 * @util function get available tasks
 * Created by Erichain on 24/12/2016.
 */
const config = require('../config');
const tasks = {
  utilTasks: ['clean'],
  assetsTasks: ['fonts', 'images', 'static'],
  codeTasks: ['scripts', 'styles', 'html'],
  productionTasks: ['rev', 'sizeReport']
};

module.exports = {
  devTasks: [
    ...tasks.utilTasks,
    ...tasks.assetsTasks,
    ...tasks.codeTasks,
    'browserSync'
  ],
  productionTasks: [
    ...tasks.utilTasks,
    ...tasks.assetsTasks,
    ...tasks.codeTasks,
    ...tasks.productionTasks
  ]
};
