 
 
/**
 * SERVE TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';
 
  gulp.task('copy:media', function () {
    return gulp.src(conf.copy.media.src)
      .pipe(gulp.dest(conf.copy.media.dest))    
      .pipe(conf.browserSync.stream());      
  })

  gulp.task('copy:scripts', function () {
    return gulp.src(conf.copy.scripts.src)
      .pipe(gulp.dest(conf.copy.scripts.dest))    
      .pipe(conf.browserSync.stream());      
  })

  gulp.task('copy:pdf', function () {
    return gulp.src(conf.copy.pdf.src)
      .pipe(gulp.dest(conf.copy.pdf.dest))    
      .pipe(conf.browserSync.stream());      
  })


  /**
   * Copy files
   * @task {copy}
   * @group {Processing}
   */
  gulp.task('copy', $.sequence('copy:media','copy:scripts', 'copy:pdf'));
}