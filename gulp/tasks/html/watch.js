const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );

gulp.task( 'watch:html', function () {
    gulp.watch( config.tailwind.html.src, [ 'build:html' ] );
} );