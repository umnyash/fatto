module.exports = () => {
    $.gulp.task('copy-video', () => {
        return $.gulp.src('./src/video/*.*')
            .pipe($.gulp.dest('./public/video'));
    });
};


