const {path, sync, gulp} = require("../config");
const concat = require('gulp-concat');

gulp.task('app.js', () => {
    return gulp.src([
        path.source.js + '/**/*.js',
        path.source.components + '/**/*.js',
    ])
        // .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.js))
        .pipe(sync.stream());
});
