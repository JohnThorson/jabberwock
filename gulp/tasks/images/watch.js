const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );

gulp.task( 'watch:images', function () {
    gulp.watch( config.images.src, [ 'build:images' ] );
} );
