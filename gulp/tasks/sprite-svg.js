module.exports = () => {
    $.gulp.task('sprite-svg', () => {
        return $.gulp.src('./src/img/icons/svg/sprite/*.svg')
                .pipe($.gp.svgmin({
                    js2svg: {
                        pretty: true
                    }
                }))
                .pipe($.gp.cheerio({
                    run: function ($) {
                        $('[fill]').removeAttr('fill');
                        $('[stroke]').removeAttr('stroke');
                        $('[style]').removeAttr('style');
                    },
                    parserOptions: {xmlMode: true}
                }))
                .pipe($.gp.replace('&gt;', '>'))
                .pipe($.gp.svgstore({inlineSvg: true}))
                .pipe($.gp.rename('sprite.svg'))
                .pipe($.gulp.dest('./public/img/icons'));
    });
};