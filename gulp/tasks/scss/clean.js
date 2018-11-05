const config        = require( process.cwd() + '/gulp/config' );
const del           = require('del');
const gulp          = require( 'gulp' );
const gutil         = require( 'gulp-util' );

/**
 * Delete style.css and style.min.css before we minify and optimize
 */
gulp.task( 'clean:scss', function () {
    gutil.log("Cleaning Directory: " + config.scss.dest);
    return del( config.scss.dest );
} );
