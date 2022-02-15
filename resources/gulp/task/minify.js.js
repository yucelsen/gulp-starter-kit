const {path, gulp} = require("../config");
const cleanJs = require('gulp-uglify-es').default;
const strip = require('gulp-strip-comments');

gulp.task('minify.js', () => {
    return gulp.src(path.dist.js + '/**/*.js')
        .pipe(cleanJs())
        .pipe(strip())
        .pipe(gulp.dest(path.dist.js))
});
