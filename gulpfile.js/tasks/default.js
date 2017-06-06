/**
 * @task default
 * Created by Erichain on 24/12/2016.
 */
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const config = require('../config');

const tasks = {
  assetsTasks: ['fonts', 'iconFont', 'images', 'svgSprite'],
  codeTasks: ['html', 'scripts', 'styles'],
  wholeTasks: []
};

if (config.env === 'production') {
  tasks.wholeTasks = [
    ...tasks.assetsTasks,
    'styles',
    'webpack:production',
    'html'
  ];
} else {
  tasks.wholeTasks = [...tasks.assetsTasks, ...tasks.codeTasks];
}

const defaultTask = (cb) => {
  gulpSequence('clean', ...tasks.wholeTasks, 'static', 'watch', cb)
};

gulp.task('default', defaultTask);

module.exports = defaultTask;
