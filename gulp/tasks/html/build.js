const config        = require( process.cwd() + '/gulp/config' );
const inject        = require( 'gulp-inject' );
const gulp          = require( 'gulp' );
const newer         = require( 'gulp-newer' );
const prune         = require( 'gulp-prune' );
const rename        = require( 'gulp-rename' );

gulp.task('build:html', [ 'clean:html' ], function () {
    const injectSource = gulp.src(['./public/assets/**/*.js', './public/assets/**/*.css'], {read: false});

    return gulp.src(config.html.src)
        .pipe(newer(config.html.dest))
        .pipe(prune(config.html.dest))
        //.pipe(inject(injectSource, {relative: true}))
        .pipe(rename(function(file) {
            file.dirname = file.dirname.replace('/html', '');
        }))
        .pipe(gulp.dest(config.html.dest))
});
