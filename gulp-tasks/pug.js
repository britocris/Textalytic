
/**
 * HTML TASKS
 */

var path = require('path');
module.exports = function (gulp, $, conf) {
  'use strict';

  gulp.task('pug', function () {
    return gulp.src(conf.pug.src)
      .pipe($.data(function() {
        return require('../src/data.json')
      }))
      .pipe($.debug())
      .pipe($.pug({
        pretty: true
      }))
      .pipe(gulp.dest(conf.pug.dest))
      .pipe(conf.browserSync.stream());
  });

};