module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch('./smartgrid.js', $.gulp.series('grid'));
        $.gulp.watch('./src/template/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./src/less/**/*.less', $.gulp.series('less'));
        $.gulp.watch('./src/js/libs/*.js', $.gulp.series('concat-js', 'libs-js'));
        $.gulp.watch('./src/js/scripts.js', $.gulp.series('copy-js'));
        $.gulp.watch('./src/css/**/*.css', $.gulp.parallel('copy-css', 'libs-css'));
        $.gulp.watch('./src/fonts/**/*.*', $.gulp.series('copy-fonts'));
        $.gulp.watch('./src/img/*.*', $.gulp.series('copy-images'));
        $.gulp.watch('./src/img/webp/*.*', $.gulp.series('webp'));
        $.gulp.watch('./src/img/icons/svg/sprite/*.svg', $.gulp.series('sprite-svg'));
        $.gulp.watch('./src/img/icons/svg/*.svg', $.gulp.series('copy-icons-svg'));
        $.gulp.watch('./src/img/icons/png/*.png', $.gulp.series('copy-icons-png'));
    });
};