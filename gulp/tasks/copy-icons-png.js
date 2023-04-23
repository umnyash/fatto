module.exports = () => {
    $.gulp.task('copy-icons-png', () => {
        return $.gulp.src('./src/img/icons/png/*.png')
            .pipe($.gp.newer('./public/img/icons'))
            .pipe($.gp.imagemin([
                $.gp.imagemin.optipng({
                    optimizationLevel: 3
                })
            ]))
            .pipe($.gulp.dest('./public/img/icons'));
    });
};