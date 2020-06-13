const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

const style = () => {
    return gulp
        .src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))

        .pipe(browserSync.stream())
}

exports.watch = () => {
    browserSync.init({
        server: { baseDir: '.' },
    })
    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}