const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );
const newer         = require( 'gulp-newer' );
const prune         = require( 'gulp-prune' );
const postcss       = require( 'gulp-postcss' );
const rename        = require( 'gulp-rename' );
const sass          = require( 'gulp-sass' );
const sourcemaps    = require( 'gulp-sourcemaps' );

gulp.task( 'build:scss', [ 'clean:scss' ], function () {
    return gulp.src( config.scss.src )
        // Wrap tasks in a sourcemap.
        .pipe(newer( config.scss.dest ))
        .pipe(prune( config.scss.dest ))
        .pipe( sourcemaps.init() )
        .pipe(sass())
        //.pipe(postcss())
        .pipe(rename(function(file) {
            file.dirname = file.dirname.replace('/scss', '/css');
        }))
        // Create sourcemap.
        .pipe( sourcemaps.write() )
    
        // Create styles.css
        .pipe( gulp.dest( config.scss.dest) )
} );
