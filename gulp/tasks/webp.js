module.exports = () => {
    $.gulp.task('webp',
            $.gulp.series(
                    'copy-images-webp',
                    'build-webp'
                    )
            );
};