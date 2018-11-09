const sitename = 'jabberwok';

module.exports = {
    project: './public',
    fonts: {
        src: 'src/fonts/**',
        dest: 'public/assets/' + sitename + '/fonts'
    },
    docs: {
        src: 'src/documents/**',
        dest: 'public/assets/' + sitename + '/documents'
    },
    images: {
        src: 'src/images/**',
        dest: 'public/assets/' + sitename + '/images'
    },
    html: {
        src: 'src/html/**',
        dest: 'public'
    },
    js: {
        src: 'src/javascript/**/*.js',
        dest: 'public/assets/' + sitename + '/javascript'
    }
    scss: {
        src: 'src/scss/**/*.scss',
        dest: 'public/assets/' + sitename + '/stylesheets'
    }
};