/**
 * gulpfile main file
 * with all the tasks including in the sub folders
 * @author Erichain
 * @date 2016-12-24
 */
const requireDir = require('require-dir');

// require all the tasks
requireDir('./tasks', {
  recurse: true
});
