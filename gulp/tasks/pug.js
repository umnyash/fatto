module.exports = () => {
    $.gulp.task('pug', () => {
        return $.gulp.src('./src/template/*.pug')
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('./public'));
    });
};