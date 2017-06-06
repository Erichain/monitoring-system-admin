/**
 * @task scripts
 * Created by Erichain on 24/12/2016.
 */
const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../config');
const gulpIf = require('gulp-if');
const sourceMaps = require('gulp-sourcemaps');
const gulpUglify = require('gulp-uglify');
const gulpConcat = require('gulp-concat');
const path = require('path');
const stripeDebug = require('gulp-strip-debug');
const plumber = require('gulp-plumber');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const paths = {
  src: path.join(
      config.root.src,
      config.tasks.scripts.src,
      `/**/*.{${config.tasks.scripts.extensions}}`
  ),
  dest: path.join(config.root.dest, config.tasks.scripts.dest)
};

const scriptsTask = (cb) => {
  const bundler = browserify({
    entries: config.entry,
    debug: true,
    transform: [babelify]
  });

  return bundler.bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(plumber())
      .pipe(gulpIf(!global.production, sourceMaps.init()))
      .pipe(gulpIf(global.production, gulpConcat('app.js')))
      .pipe(gulpIf(global.production, stripeDebug()))
      .pipe(gulpIf(global.production, gulpUglify()))
      .pipe(gulpIf(!global.production, sourceMaps.write('.')))
      .pipe(gulp.dest(paths.dest))
      .pipe(browserSync.stream())
};

gulp.task('scripts', scriptsTask);

module.exports = scriptsTask;
