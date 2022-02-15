const {path, sync, gulp, url} = require("../config");

gulp.task('serve', (done) => {
    sync.init({
        notify: false,
        proxy: url,
        host: url,
        open: 'external',
        files: [
            './resources/views/**/*.blade.php'
        ]
    });

    gulp.watch(path.watchPath.scss, gulp.series('scss'));
    gulp.watch(path.watchPath.pug, gulp.series('pug'));
    gulp.watch(path.watchPath.js, gulp.series('app.js'));
    gulp.watch(path.source.images, gulp.series('minify.img'));
    gulp.watch(path.source.svg, gulp.series('icon.svg'));

    done();
});
