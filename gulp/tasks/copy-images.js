module.exports = () => {
  $.gulp.task("copy-images", () => {
    return $.gulp
      .src("./src/img/*.*")
      .pipe($.gp.newer("./public/img/"))
      .pipe(
        $.gp.imagemin([
          $.gp.imagemin.gifsicle({
            interlaced: true,
          }),
          $.gp.imagemin.mozjpeg({
            progressive: true,
          }),
          $.gp.imagemin.optipng({
            optimizationLevel: 3,
          }),
        ])
      )
      .pipe($.gulp.dest("./public/img/"));
  });
};
