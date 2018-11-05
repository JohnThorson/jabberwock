const config            = require( process.cwd() + '/gulp/config' );
const path              = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob              = require('glob');

module.exports = {
	context: __dirname,
	entry: {
        bundle: './src/framework/javascript/app'
    },
	plugins: [
		new CopyWebpackPlugin([

            // Copy directory contents to {output}/to/directory/
            { from: './src/framework/javascript/vendor/', to: './vendor' }

		], {
            ignore: [
                // Doesn't copy any files with a txt extension
                '*.txt'
            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
		})
    ],
    output: {
		path: path.resolve(config.js.src),
        filename: '[name].js',
        publicPath: 'public'
    }
};