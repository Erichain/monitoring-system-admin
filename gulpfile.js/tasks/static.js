/**
 * @task static
 * Created by Erichain on 24/12/2016.
 */
const config = require('../config');
const gulp = require('gulp');
const path = require('path');
const gulpChanged = require('gulp-changed');
const plumber = require('gulp-plumber');

const paths = {
  src: [
    path.join(config.root.src, config.tasks.static.src, '/**'),
    path.join(`!${config.root.src}`, config.tasks.static.src, '/README.md')
  ],
  dest: path.join(config.root.dest, config.tasks.static.dest)
};

const staticTask = (cb) => {
  return gulp.src(paths.src)
      .pipe(plumber())
      .pipe(gulpChanged(paths.dest))
      .pipe(gulp.dest(paths.dest));
};

gulp.task('static', staticTask);

module.exports = staticTask;
