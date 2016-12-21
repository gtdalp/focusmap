var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build', function () {
    gulp.src(['./build/*.js'])
        .pipe(uglify())
        .pipe(rename('focusmap.min.js'))
        .pipe(gulp.dest('./dist/js/'));
})