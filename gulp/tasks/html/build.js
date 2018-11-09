const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );

gulp.task('build:html', [ 'clean:html' ], function () {
    return gulp.src(config.tailwind.html.src)
        .pipe(gulp.dest(config.html.dest))
});
