global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    smartgrid: require('smart-grid'),
    path: {
        config: require('./gulp/config'),
        js: './src/js/libs/*.js'
    }
};

$.path.config.forEach(function (path) {
    require(path)();
});

