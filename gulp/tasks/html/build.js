const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );
const inject          = require( 'gulp-inject' );

gulp.task('build:html', [ 'clean:html' ], function () {
    const iSource = gulp.src(['./public/tailwind/assets/**/*.js', './public/tailwind/assets/**/*.css'], {read: false});

    return gulp.src(config.tailwind.html.src)
        .pipe(inject(iSource, {relative: true}))
        .pipe(gulp.dest(config.tailwind.html.dest))
});
