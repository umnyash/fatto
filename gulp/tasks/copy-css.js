module.exports = () => {
    $.gulp.task('copy-css', () => {
        return $.gulp.src('./src/css/*.css')
            .pipe($.gulp.dest('./public/css'));
    });
};