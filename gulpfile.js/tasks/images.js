/**
 * @task images
 * Created by Erichain on 24/12/2016.
 */
const config = require('../config');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const path = require('path');
const gulpChanged = require('gulp-changed');
const minifyImg = require('gulp-imagemin');
const plumber = require('gulp-plumber');

const paths = {
  src: path.join(
      config.root.src,
      config.root.assets,
      config.tasks.images.src,
      `/**/*.{${config.tasks.images.extensions}}`
  ),
  dest: path.join(
      config.root.dest,
      config.root.assets,
      config.tasks.images.dest
  )
};

const imagesTask = (cb) => {
  return gulp.src([paths.src, '*!README.md'])
      .pipe(plumber())
      .pipe(gulpChanged(paths.dest))
      .pipe(minifyImg())
      .pipe(gulp.dest(paths.dest))
      .pipe(browserSync.stream())
};

gulp.task('images', imagesTask);

module.exports = imagesTask;
