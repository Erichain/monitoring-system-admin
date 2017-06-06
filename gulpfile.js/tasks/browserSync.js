/**
 * @task browserSync
 * Created by Erichain on 24/12/2016.
 */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('../config');
const path = require('path');

const browserSyncTask = () => {
  browserSync.init(config.tasks.browserSync);

  let watchableTasks = [
    'fonts',
    'images',
    'scripts',
    'html',
    'styles'
  ];

  watchableTasks.forEach((taskName) => {
    let files = path.join(
        config.root.src,
        config.tasks[taskName].src,
        `/**/*.{${config.tasks[taskName].extensions}}`
    );

    let watchTaskName = `watch${taskName[0]
        .toUpperCase()
        .concat(taskName.slice(1))}`;

    gulp.task(watchTaskName, [taskName], (done) => {
          browserSync.reload();
          done();
        }
    );

    gulp.watch(files, [watchTaskName]);
  });
};

gulp.task('browserSync', browserSyncTask);

module.exports = browserSyncTask;
