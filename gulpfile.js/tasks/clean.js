/**
 * @task clean
 * Created by Erichain on 24/12/2016.
 */
const gulp = require('gulp');
const config = require('../config');
const del = require('del');

const cleanTask = (cb) => {
  del([config.root.dest]).then((paths) => {
    cb();
  });
};

gulp.task('clean', cleanTask);

module.exports = cleanTask;
