var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('serve', function() {
    var server = gls('server.config.js');
    server.start().then(function(result) {
        console.log('Server exited with result:', result);
        process.exit(result.code);
    });
    gulp.watch(['static/**/*.css', 'static/**/*.html'], function(file) {
        server.notify.apply(server, [file]);
    });
    gulp.watch('server.js', server.start);
});