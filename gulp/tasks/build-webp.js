module.exports = () => {
  $.gulp.task("build-webp", () => {
    return $.gulp
      .src("./src/img/webp/*.*")
      .pipe($.gp.imagemin())
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
      .pipe($.gp.webp({ quality: 90, method: 6 }))
      .pipe($.gulp.dest("./public/img/webp/"));
  });
};
