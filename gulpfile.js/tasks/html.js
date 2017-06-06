/**
 * @task html
 * Created by Erichain on 24/12/2016.
 */
const config = require('../config');
const browserSync = require('browser-sync');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const path = require('path');
const render = require('gulp-nunjucks-render');
const plumber = require('gulp-plumber');
// const gulpData = require('gulp-data');
// const fs = require('fs');

if (!config.tasks.html) {
  return;
}

const excludePath = path.normalize(`!**/{${config.tasks.html.excludeFolders}}/**`);

const paths = {
  src: [
    path.join(
        config.root.src, config.tasks.html.src,
        `/**/*.{${config.tasks.html.extensions}}`
    ),
    excludePath
  ],
  dest: path.join(config.root.dest, config.tasks.html.dest)
};

/*const getData = (file) => {
 let dataPath = path.resolve(
 config.root.src,
 config.tasks.html.src,
 config.tasks.html.dataFile
 );
 return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
 };*/

const htmlTask = (cb) => {
  return gulp.src(paths.src)
      .pipe(plumber())
      .pipe(render({
        path: [path.join(config.root.src, config.tasks.html.src)],
        envOptions: {
          watch: false
        }
      }))
      .pipe(gulpIf(global.production, htmlmin(config.tasks.html.htmlmin)))
      .pipe(gulp.dest(paths.dest))
      .pipe(browserSync.stream())
};

gulp.task('html', htmlTask);

module.exports = htmlTask;
