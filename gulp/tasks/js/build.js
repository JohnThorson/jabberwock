const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );
const gutil         = require( 'gulp-util');
const merge         = require( 'webpack-merge');
const webpack       = require( 'webpack' );
const webpackConfig = require( process.cwd() + '/webpack.config.js');
const path          = require( 'path');

/**
 * Bundle JavaScript - use require(./[yourscript]);)
 *
 * https://www.npmjs.com/package/webpack
 */
gulp.task('build:js', [ 'clean:js' ], function(callback) {
    // Setup custom config for task
    var localConfig = merge(webpackConfig, {
        mode: 'development',
        devtool: 'inline-source-maps'
    });

    // run webpack
    webpack(localConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        
        callback();
    });
});