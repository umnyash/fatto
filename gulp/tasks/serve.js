module.exports = () => {
    $.gulp.task('serve', () => {
        $.browserSync.init({
            server: {
                baseDir: "public"
            }
        });

        $.gulp.watch('public/**/*').on('change', $.browserSync.reload);
    });
};