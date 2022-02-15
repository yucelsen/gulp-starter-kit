const {path, gulp} = require("../config");
const cleanCss = require('gulp-clean-css');
const autoprefixer = require("gulp-autoprefixer");

gulp.task('minify.css', () => {
    return gulp.src(path.dist.css + '/**/*.css')
        .pipe(cleanCss())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest(path.dist.css))
});
