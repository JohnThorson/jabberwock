const sitename = 'jabberwok';

module.exports = {
    project: './public',
    html: {
        dest: './public',
        src: './src/**/*.html'
    },
    js: {
        dest: './public/assets/js',
        src: './src/**/*.js'
    },
    scss: {
        dest: './public/assets/css',
        src: './src/**/*.scss'
    }
};