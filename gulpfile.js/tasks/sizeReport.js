/**
 * @task sizeReport
 * Created by Erichain on 24/12/2016.
 */
const config = require('../config');
const gulp = require('gulp');
const sizeReport = require('gulp-sizereport');
const plumber = require('gulp-plumber');

const sizeReportTask = (cb) => {
  return gulp.src([`${config.root.dest}/**/*`, '*!rev-manifest.json'])
      .pipe(plumber())
      .pipe(sizeReport({
        gzip: true
      }));
};

gulp.task('sizeReport', sizeReportTask);

module.exports = sizeReportTask;
