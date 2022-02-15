const {path, sync, gulp} = require("../config");
const pug = require('gulp-pug');

gulp.task('pug', () => {
    return gulp.src(`${path.source.html}/*.pug`)
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(path.dist.html))
        .pipe(sync.stream());
});
