var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// so when you write `gulp` is just runs this shit
gulp.task('default', ['serve', 'sass']);


// syncs your changes with chrome
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch(['./main.scss'], ['sass']);
  gulp.watch(['./main.js', './index.html']).on('change', browserSync.reload);
});


// compiles from sass... css is awful. this just makes nesting easier.
gulp.task('sass', function() {
  return gulp.src("main.scss")
    .pipe(sass())
    .on('error', onError)
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

var onError = function(err) {
  console.log(err);
};
