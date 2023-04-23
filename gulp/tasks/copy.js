module.exports = () => {
  $.gulp.task(
    "copy",
    $.gulp.series(
      "favicon",
      "copy-fonts",
      "copy-images",
      "copy-video",
      "webp",
      "copy-icons-png",
      "copy-icons-svg",
      "copy-js"
    )
  );
};
