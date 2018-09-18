const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );

gulp.task( 'build:all', [ 'build:scss', 'build:html'] );
