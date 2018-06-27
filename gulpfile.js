var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('app/assets/css/src/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/assets/css/build'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('sync', function() {
  sync.init({
    server: {
      baseDir: 'app',
      index: "index.htm"
    },
  });
});

// Javascript 
gulp.task('scripts', function() {  
  return gulp.src('app/assets/js/src/**/*.js')
    .pipe(gulp.dest('app/assets/js/build'))
    .pipe(sync.reload({
      stream: true
    }))
});

// Gulp watch syntax
gulp.task('watch', ['sync' , 'sass', 'scripts'], function() {
  gulp.watch('app/assets/css/src/*.scss', ['sass']); 
  gulp.watch('app/*.htm', sync.reload); 
  gulp.watch('app/assets/js/src/*.js', ['scripts']);
});