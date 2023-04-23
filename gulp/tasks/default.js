module.exports = () => {
    $.gulp.task('default',
            $.gulp.series(
                    'clean',
                    'concat-js',
                    'libs-css',
                    'less',
                    'pug',
                    'sprite-svg',
                    'copy',
                    'libs-js',
                    $.gulp.parallel(
                            'watch',
                            'serve'
                            )
                    )
            );
};