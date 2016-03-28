var gulp = require('gulp');
var connect = require('gulp-connect');
var rework = require('gulp-rework');
var browserify = require('gulp-browserify');

gulp.task('build', function() {
  gulp.src('./src/js/app.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('./public/js/build'));
});

gulp.task('precompile-css', function () {
  return gulp.src('node_modules/angular-instafeed/public/css/style.css')
      .pipe(rework())
      .pipe(gulp.dest('./public/css'));
});

gulp.task('connect', function() {
  connect.server({
    root : 'public',
    livereload : true
  });
});

gulp.task('default', ['build', 'connect', 'precompile-css']);