const {path, gulp} = require("../config");
const async = require('async');
const iconfont = require('gulp-iconfont');
const consolidate = require('gulp-consolidate');

gulp.task('icon.svg', (done) => {
    const iconStream = gulp.src(path.source.svg + '/*.svg')
        .pipe(iconfont({
            fontName: 'icon-font',
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'], // default, 'woff2' and 'svg' are available
            normalize: true,
            fontHeight: 1001, // Tried lot of values, <1000 and also 10000, and 100000 :P but no success
            centerHorizontally: true
        }));

    async.parallel([
        function handleGlyphs(cb) {
            iconStream.on('glyphs', function (glyphs) {
                gulp.src(`${path.source.svg}/_icon-font.scss`)
                    .pipe(consolidate('lodash', {
                        glyphs: glyphs,
                        fontName: 'icon-font',
                        fontPath: '../fonts/icon-font/',
                        className: 'fi.fi',
                    }))
                    .pipe(gulp.dest(path.source.css + '/theme'))
                    .on('finish', cb);
            });
        },
        function handleFonts(cb) {
            iconStream
                .pipe(gulp.dest(`${path.dist.fonts}/icon-font`))
                .on('finish', cb);
        }
    ], done);
});
