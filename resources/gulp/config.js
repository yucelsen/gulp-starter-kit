const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const sourcePath = './resources/assets';
const distPath = './public';

module.exports = {
    gulp: gulp,
    sync: browserSync,
    url: 'gulp-starter-kit.local',
    font: null,
    sourcePath: sourcePath,
    distPath: distPath,
    path: {
        node_modules: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
        ],
        source: {
            html: `${sourcePath}/pug`,
            css: `${sourcePath}/scss`,
            js: `${sourcePath}/js`,
            images: `${sourcePath}/images`,
            fonts: `${sourcePath}/fonts/**/*.ttf`,
            svg: `${sourcePath}/icon`,
            components: `${sourcePath}/components`
        },
        dist: {
            html: distPath,
            css: `${distPath}/assets/css`,
            js: `${distPath}/assets/js`,
            images: `${distPath}/assets/images`,
            fonts: `${distPath}/assets/fonts`,
            bundle: `${distPath}/assets/bundle`,
        },
        watchPath: {
            scss: [
                `${sourcePath}/**/*.scss`
            ],
            pug: [
                `${sourcePath}/**/*.pug`
            ],
            js: [
                `${sourcePath}/**/*.js`
            ]
        }
    }
}