const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const del = require('del');
const srcmaps = require('gulp-sourcemaps');
const less = require('gulp-less');


const styleFiles = [
    "./src/js/magnific/magnific-popup.css",
    "./src/js/slick/slick.css",
    "./src/js/slick/slick-theme.css",
    './src/css/main.less',
    './src/css/service.css'
]
const jsFiles = [
    "./src/js/jquery-1.11.0.min.js",
    "./src/js/jquery-migrate-1.2.1.min.js",
    "./src/js/slick/slick.min.js",
    "./src/js/magnific/jquery.magnific-popup.js",
    './src/js/main.js'
]

gulp.task('styles', () => {
    //шаблон для поиска файлов стилей
    return gulp.src(styleFiles)
    .pipe(srcmaps.init())
    .pipe(less()) 
    //объеденение файлов в один
    .pipe(concat('style.css'))

    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))

    .pipe(srcmaps.write('./'))
    //выходная папка для стилей
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
    return gulp.src(jsFiles)

    .pipe(concat('script.js')) 

    .pipe(uglify({
        toplevel: true
    }))

    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
}
);


gulp.task('del', ()=> {
    return del(['build/*'])
});

gulp.task('watch', ()=>{
    browserSync.init({
        server:{
            baseDir: "./"
        }
    });
    //следить за изменением файлов
    gulp.watch('./src/css/**/*.less', gulp.series('styles'))
    gulp.watch('./src/css/**/*.css', gulp.series('styles'))
    gulp.watch('./src/js/**/*.js', gulp.series('scripts'))
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('del', gulp.parallel('styles', 'scripts'), 'watch'));