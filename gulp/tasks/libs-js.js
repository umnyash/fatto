module.exports = () => {
    $.gulp.task('libs-js', () => {
        return $.gulp.src('./src/js/libs.js')
            .pipe($.gp.rigger())
            .pipe($.gp.rename('libs.min.js'))
            .pipe($.gulp.dest('./public/js'));
    });
};


