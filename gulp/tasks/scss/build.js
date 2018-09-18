const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );
const postcss       = require( 'gulp-postcss');
const sass          = require( 'gulp-sass' );
const sourcemaps    = require( 'gulp-sourcemaps' );
const tailwind      = require( 'tailwindcss');

gulp.task( 'build:scss', [ 'clean:scss' ], function () {
    return gulp.src( config.tailwind.scss.src )
        // Wrap tasks in a sourcemap.
        .pipe( sourcemaps.init() )
        .pipe(sass())
        .pipe(postcss([
            tailwind('./tailwind.config.js')
        ]))
        // Create sourcemap.
        .pipe( sourcemaps.write() )
    
        // Create styles.css
        .pipe( gulp.dest( config.tailwind.scss.dest) )
} );
