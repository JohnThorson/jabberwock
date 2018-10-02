const config        = require( process.cwd() + '/gulp/config' );
const inject        = require( 'gulp-inject' );
const gulp          = require( 'gulp' );
const changed       = require( 'gulp-changed' );

gulp.task('build:html', [ 'clean:html' ], function () {
    const injectSource = gulp.src(['./public/assets/**/*.js', './public/assets/**/*.css'], {read: false});

    return gulp.src(config.html.src)
        .pipe(changed(config.html.dest))
        .pipe(inject(injectSource, {relative: true}))
        .pipe(gulp.dest(config.html.dest))
});
