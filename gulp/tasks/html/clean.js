const config        = require( process.cwd() + '/gulp/config' );
const del           = require('del');
const gulp          = require( 'gulp' );
const gutil         = require( 'gulp-util' );

/**
 * Delete all html files created by the build:html task
 */
gulp.task( 'clean:html', function () {

    return del( [
        config.tailwind.html.dest + '/**/*',
        '!./public/tailwind/assets',
        '!./public/tailwind/assets/**/*'
    ] );
} );
