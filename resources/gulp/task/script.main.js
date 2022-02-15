const {path, sync, gulp} = require("../config");
const concat = require('gulp-concat');

gulp.task('main.js', () => {
    return gulp.src(path.node_modules)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.dist.js))
        .pipe(sync.stream());
});
