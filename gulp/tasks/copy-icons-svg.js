module.exports = () => {
    $.gulp.task('copy-icons-svg', () => {
        return $.gulp.src('./src/img/icons/svg/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gulp.dest('./public/img/icons'));
    });
};