/**
 * @task styles
 * Created by Erichain on 24/12/2016.
 */
const gulp = require('gulp');
const config = require('../config');
const browserSync = require('browser-sync');
const gulpSass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const path = require('path');
const cssnano = require('gulp-cssnano');
const autoPrefixer = require('gulp-autoprefixer');
const gulpIf = require('gulp-if');
const gulpConcat = require('gulp-concat');
const plumber = require('gulp-plumber');

const paths = {
  src: path.join(
      config.root.src,
      config.tasks.styles.src,
      `/**/*.{${config.tasks.styles.extensions}}`
  ),
  dest: path.join(config.root.dest, config.tasks.styles.dest)
};

const stylesTask = (cb) => {
  return gulp.src(paths.src)
      .pipe(plumber())
      .pipe(gulpIf(!global.production, sourceMaps.init()))
      .pipe(gulpSass(config.tasks.styles.sass).on('error', gulpSass.logError))
      .pipe(autoPrefixer(config.tasks.styles.autoprefixer))
      .pipe(gulpIf(global.production, gulpConcat('app.css')))
      .pipe(gulpIf(global.production, cssnano({ autoprefixer: false })))
      .pipe(gulpIf(!global.production, sourceMaps.write('.')))
      .pipe(gulp.dest(paths.dest))
      .pipe(browserSync.stream())
};

gulp.task('styles', stylesTask);

module.exports = stylesTask;
