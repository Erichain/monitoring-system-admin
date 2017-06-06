/**
 * @task rev-*
 * Created by Erichain on 24/12/2016.
 */
const gulp = require('gulp');
const config = require('../../config');
const gulpSequence = require('gulp-sequence');

if (!config.tasks.production.rev) {
  return;
}

const revTask = (cb) => {
  gulpSequence(
      'revAssets',
      'revUpdateReferences',
      'revStyles',
      'updatePages',
      cb
  );
};

gulp.task('rev', revTask);

module.exports = revTask;
