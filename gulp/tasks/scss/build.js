const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );
const newer         = require( 'gulp-newer' );
const postcss       = require( 'gulp-postcss');
const sass          = require( 'gulp-sass' );
const sourcemaps    = require( 'gulp-sourcemaps' );

gulp.task( 'build:scss', [ 'clean:scss' ], function () {
    return gulp.src( config.scss.src )
        // Wrap tasks in a sourcemap.
        .pipe(newer(config.scss.dest))
        .pipe( sourcemaps.init() )
        .pipe(sass())
        .pipe(postcss())
        // Create sourcemap.
        .pipe( sourcemaps.write() )
    
        // Create styles.css
        .pipe( gulp.dest( config.scss.dest) )
} );
