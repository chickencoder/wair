// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');
var node = require('gulp-nodemon');

gulp.task('sass', function(){
  gulp.src('./temps/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./static/css'));
});

gulp.task('start', function(){
  node({
    script: 'app.js',
    ext: 'js html css',
    watch: 'temps'
  });
});

gulp.task('sass:watch', function(){
  gulp.watch('./temps/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch', 'start']);
