module.exports = () => {
    $.gulp.task('copy-js', () => {
        return $.gulp.src('./src/js/scripts.js')
            .pipe($.gulp.dest('./public/js'));
    });
};