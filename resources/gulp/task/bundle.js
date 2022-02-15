const {path, sync, gulp} = require("../config");
const purgecss = require('gulp-purgecss')
const rev = require('gulp-rev');
const del = require('del');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const {default: cleanJs} = require('gulp-uglify-es');

gulp.task('clean-bundle', () => {
    return del(path.dist.bundle);
})

gulp.task('bundle.css', () => {
    return gulp.src(path.dist.css + '/main.css')
        .pipe(rename('_bundle.css'))
        .pipe(rev({
            merge: true
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest(path.dist.bundle))
});

gulp.task('bundle.js', () => {
    return gulp.src([
        path.dist.js + '/main.js',
        path.dist.js + '/app.js'
    ])
        .pipe(concat('_bundle.js'))
        .pipe(cleanJs())
        .pipe(rev({
            merge: true
        }))
        .pipe(gulp.dest(path.dist.bundle))
});
