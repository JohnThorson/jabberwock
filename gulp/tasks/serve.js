const browserSync   = require( 'browser-sync' );
const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );
const nodemon       = require( 'gulp-nodemon');
const reload        = browserSync.reload;

/**
 * Starts up an express server with nodemon.
 *
 * https://www.npmjs.com/package/express
 * https://www.npmjs.com/package/gulp-nodemon
 *
 */
gulp.task('server', function (cb) {
    var called = false;
    return nodemon({
      script: 'bin/www',
      ignore: [
        'gulpfile.js',
        'webpack.config.js',
        'src/',
        'dist/',
        'public/',
        'node_modules/'
      ]
    })
    .on('start', function () {
      if (!called) {
        called = true;
        cb();
      }
    })
    .on('restart', function () {
      setTimeout(function () {
        reload({ stream: false });
      }, 1000);
    });
});