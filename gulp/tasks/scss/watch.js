const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );

gulp.task( 'watch:scss', function () {
    gulp.watch( config.scss.src, [ 'build:scss' ] );
} );
