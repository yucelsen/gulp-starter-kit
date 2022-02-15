const {path, gulp, sync} = require("../config");
const imagemin = require('gulp-imagemin');

gulp.task('minify.img', () => {
    return gulp.src(path.source.images + '/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest(path.dist.images))
        .pipe(sync.stream());
});
