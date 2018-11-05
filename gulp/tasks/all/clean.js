const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );

gulp.task( 'clean:all', [ 'clean:scss', 'clean:html'] );
