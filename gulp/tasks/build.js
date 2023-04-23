module.exports = () => {
  $.gulp.task('build',
          $.gulp.series(
                  'clean',
                  'concat-js',
                  'libs-css',
                  'less',
                  'pug',
                  'sprite-svg',
                  'copy',
                  'libs-js'
                  )
          );
};
