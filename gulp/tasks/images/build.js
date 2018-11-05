const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );
const newer         = require( 'gulp-newer' );
const prune         = require( 'gulp-prune' );

gulp.task('build:images', function () {
    return gulp.src(config.images.src)
      .pipe(newer(config.images.dest))
      .pipe(prune(config.images.dest))
      .pipe(gulp.dest(config.images.dest));
} );
