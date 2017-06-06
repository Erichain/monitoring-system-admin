/**
 * @task revStyles
 * Created by Erichain on 24/12/2016.
 */
const gulp = require('gulp');
const config = require('../../config');
const path = require('path');
const gulpRev = require('gulp-rev');
const gulpRevNapkin = require('gulp-rev-napkin');

gulp.task('revStyles', (cb) => {
  return gulp.src(path.join(config.root.dest, '/**/*.css'))
      .pipe(gulpRev())
      .pipe(gulp.dest(config.root.dest))
      .pipe(gulpRevNapkin({
        verbose: false
      }))
      .pipe(
          gulpRev.manifest(
              path.join(config.root.dest, 'rev-manifest.json'),
              { merge: true }
          )
      )
      .pipe(gulp.dest(''))
});