const config        = require( process.cwd() + '/gulp/config' );
const del           = require('del');
const gulp          = require( 'gulp' );

gulp.task( 'clean:scss', function () {
    return del( config.scss.dest );
} );
