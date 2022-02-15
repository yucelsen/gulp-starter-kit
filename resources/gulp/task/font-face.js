const {path, gulp, font, source} = require("../config");
const ttf2woff2 = require('gulp-ttf2woff2');
const ttf2woff = require('gulp-ttf2woff');

gulp.task('fontface.woff', (cb) => {
    if (font != null) {
        return gulp.src([source + '/fonts/' + font + '/**/*.ttf'])
            .pipe(ttf2woff())
            .pipe(ttf2woff2())
            .pipe(gulp.dest(path.dist.fonts + '/' + font));
    } else {
        console.log('Undefined font!');
        return cb();
    }
});
