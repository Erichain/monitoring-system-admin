/**
 * @task revUpdateReferences
 * Created by Erichain on 24/12/2016.
 */
const gulp = require('gulp');
const config = require('../../config');
const path = require('path');
const gulpRevReplace = require('gulp-rev-replace');

gulp.task('revUpdateReferences', (cb) => {
  let manifest = gulp.src(path.join(config.root.dest, '/rev-manifest.json'));

  return gulp.src(path.join(config.root.dest, '/**/*.{css,js}'))
      .pipe(gulpRevReplace({
        manifest: manifest
      }))
      .pipe(gulp.dest(config.root.dest));
});
