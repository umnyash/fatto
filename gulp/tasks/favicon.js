module.exports = () => {
  $.gulp.task("favicon", () => {
    return $.gulp.src("./src/favicon/*.*").pipe($.gulp.dest("./public/"));
  });
};
