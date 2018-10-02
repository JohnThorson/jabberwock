const config        = require( process.cwd() + '/gulp/config' );
const del           = require('del');
const gulp          = require( 'gulp' );

gulp.task( 'clean:html', function () {

    return del( [
        config.html.dest + '/**/*',
        '!./public/assets',
        '!./public/assets/**/*'
    ] );
} );
