const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );

gulp.task( 'watch:all', [ 'watch:scss', 'watch:html'] );