module.exports = () => {
    $.gulp.task('less', () => {
        return $.gulp.src('./src/less/styles.less')
            .pipe($.gp.less())
            .pipe($.gp.groupCssMediaQueries())
            .pipe($.gp.autoprefixer({
                cascade: false
            }))
            .pipe($.gp.cleanCss({
                level: 2
            }))
            .pipe($.gp.rename('styles.min.css'))
            .pipe($.gulp.dest('./public/css'));
    });
};

