const sass = require('gulp-sass')(require('node-sass'));
const sourcemaps = require('gulp-sourcemaps');
const {path, sync, gulp} = require("../config");

gulp.task('scss', () => {
    return gulp.src(path.source.css + '/**/*.scss')
        // .pipe(sourcemaps.init({}))
        // .pipe(plugins.sassGlob())
        .pipe(sass().on('error', sass.logError))
        // .pipe(plugins.sass({ includePaths: ['~', 'node_modules'] }).on('error', plugins.sass.logError))
        // .pipe(plugins.autoprefixer())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.css))
        .pipe(sync.stream());
});
