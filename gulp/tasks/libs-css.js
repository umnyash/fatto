module.exports = () => {
    $.gulp.task('libs-css', () => {
        return $.gulp.src('./src/css/libs/*.css')
            .pipe($.gp.concatCss('libs.css'))
            .pipe($.gp.cleanCss({
                level: 2
            }))
            .pipe($.gulp.dest('./src/css'));
    });
};