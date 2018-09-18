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
    },
    sassdoc: {
        dest: 'public/assets/' + sitename + '/sassdoc'
    },
    scss: {
        src: 'src/scss/**/*.scss',
        dest: 'public/assets/' + sitename + '/stylesheets'
    },
    static: {
        src: 'src/html/pages/**/*.hbs',
        dest: 'dist',
        partials: ['src/html/includes', 'src/html/layouts'],
        helpers: '../../../helpers.js' //TODO: Make this absoulte not relative
    },
    tailwind: {
        scss: { src: './tailwind/scss/**/*.scss', dest: './public/tailwind/assets' },
        html: { src: './tailwind/html/**/*.html', dest: './public/tailwind'}
    }
};