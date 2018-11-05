module.exports = {
    project: './public',
    html: {
        dest: './public',
        src: './src/**/html/**'
    },
    js: {
        dest: './public/assets',
        src: './src/**/javascript/**/*.js'
    },
    scss: {
        dest: './public/assets',
        src: './src/**/scss/**/*.scss'
    },
    images: {
        dest: './public/assets/images',
        src: './src/images/**'
    }
};