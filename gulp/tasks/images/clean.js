const config        = require( process.cwd() + '/gulp/config' );
const del           = require('del');
const gulp          = require( 'gulp' );

gulp.task( 'clean:images', function () {
    return del( config.images.dest );
} );
