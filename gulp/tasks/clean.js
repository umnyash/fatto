module.exports = () => {
    $.gulp.task('clean', function () {
        return $.del('./public');
      });
};