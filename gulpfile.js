const browserSync   = require( 'browser-sync' );
const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );
const gutil         = require( 'gulp-util' );
const reload        = browserSync.reload;
const requireDir    = require( 'require-dir' );
 
requireDir('./gulp/tasks', { recurse: true });

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

/**
 * Process tasks and reload browsers on file changes.
 *
 * https://www.npmjs.com/package/browser-sync
 */
gulp.task( 'watch', ['server'], function () {
    // Kick off BrowserSync.
    browserSync( {
      'open': true,             // Open project in a new tab?
      'injectChanges': true,     // Auto inject changes instead of full reload
      'proxy': 'localhost:3030',    // Use http://_s.com:3000 to use BrowserSync
      'watchOptions': {
        'debounceDelay': 2000  // Wait 2 second before injecting
      }
    } );
  
    // Run tasks when files change.
    gulp.watch( config.scss.src, [ 'build:css' ] );
    gulp.watch( config.html.src, [ 'reload:html' ] );
} );
 
// There's some issue with browserSync.stream on build:markup, this is a workaround, but I would like to know the exact issue.
gulp.task( 'reload:html', [ 'build:html' ], function (done) {
    browserSync.reload();
    done(); //wait for build to complete
}); 