/**
 * @task production
 * Created by Erichain on 24/12/2016.
 */
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const getAvailableTasks = require('../utils/getAvailableTasks');

gulp.task('build', (cb) => {
  global.production = true;
  gulpSequence(
      ...getAvailableTasks.productionTasks,
      cb
  );
});
