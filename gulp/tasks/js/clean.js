const config        = require( process.cwd() + '/gulp/config' );
const del           = require('del');
const gulp          = require( 'gulp' );

gulp.task( 'clean:js', function () {
    return del( config.js.dest );
} );
