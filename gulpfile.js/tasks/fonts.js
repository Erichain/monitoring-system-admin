/**
 * @task fonts
 * Created by Erichain on 24/12/2016.
 */
const config = require('../config');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const path = require('path');
const gulpChanged = require('gulp-changed');
const plumber = require('gulp-plumber');

const paths = {
  src: path.join(
      config.root.src,
      config.root.assets,
      config.tasks.fonts.src,
      `/**/*.{${config.tasks.fonts.extensions}}`
  ),
  dest: path.join(
      config.root.dest,
      config.root.assets,
      config.tasks.fonts.dest
  )
};

const fontsTask = (cb) => {
  return gulp.src([paths.src, '*!README.md'])
      .pipe(plumber())
      .pipe(gulpChanged(paths.dest))
      .pipe(gulp.dest(paths.dest))
      .pipe(browserSync.stream())
};

gulp.task('fonts', fontsTask);

module.exports = fontsTask;
