const jsFiles = [
    $.path.js
];

module.exports = () => {
    $.gulp.task('concat-js', () => {
        return $.gulp.src(jsFiles)
            .pipe($.gp.plumber())
            .pipe($.gp.babel({
                presets: ['@babel/preset-env']
            }))
            .pipe($.gp.concat('concat.js'))
            .pipe($.gp.uglify())
            .pipe($.gulp.dest('./src/js'));
    });
};