module.exports = () => {
  $.gulp.task("copy-images-webp", () => {
    return $.gulp
      .src("./src/img/webp/*.*")
      .pipe($.gp.newer("./public/img/"))
      .pipe(
        $.gp.imagemin([
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
