const {path, sync, gulp} = require("../config");
const args   = require('yargs').argv;
const rename = require('gulp-rename');
const template = require('gulp-template');

gulp.task('generate', () => {
    const type                = process.argv[4];
    const name                = process.argv[6];
    const js                = process.argv[8];
    const componentPathStatus = process.argv[10];
    const componentPath = `${path.source.components}/${name}`;

    console.log(process.argv);
    console.log(args);

    switch (args['type']) {
        case 'page' : {
            gulp.src('./resources/gulp/template/pug-page.template')
                .pipe(rename(name + '.pug'))
                .pipe(template({
                    name: name
                }))
                .pipe(gulp.dest(path.source.html));
            break;
        }
        case 'component' : {
            gulp.src('./resources/gulp/template/pug-component.template')
                .pipe(rename(name + '.pug'))
                .pipe(template({
                    name: name
                }))
                .pipe(gulp.dest(componentPath));

            gulp.src('./resources/gulp/template/scss.template')
                .pipe(rename(name + '.scss'))
                .pipe(template({
                    name: name
                }))
                .pipe(gulp.dest(componentPath));

            if (args['js']) {
                gulp.src('./resources/gulp/template/js.template')
                    .pipe(rename(name + '.js'))
                    .pipe(template({
                        name: name.replace(/-([a-z])/g, function (g) {
                            return g[1].toUpperCase();
                        })
                    }))
                    .pipe(gulp.dest(componentPath));
            }
            break;
        }
        case 'js' : {
            gulp.src('./resources/gulp/template/js.template')
                .pipe(rename(name + '.js'))
                .pipe(template({
                    name: name.replace(/-([a-z])/g, function (g) {
                        return g[1].toUpperCase();
                    })
                }))
                .pipe(gulp.dest(path.source.js));
            break;
        }
        default : {
            return;
        }
    }

});
