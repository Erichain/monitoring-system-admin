/**
 * @task serve
 * Created by Erichain on 24/12/2016.
 */
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const getAvailableTasks = require('../utils/getAvailableTasks');

gulp.task('serve', (cb) => {
  gulpSequence(
      ...getAvailableTasks.devTasks,
      cb
  );
});
