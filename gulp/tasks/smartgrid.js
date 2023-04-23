module.exports = () => {
    $.gulp.task('grid', () => {
        delete require.cache[require.resolve('./smartgrid.js')];
        let gridOptions = require('../../smartgrid.js');
        $.smartgrid('src/less/global', gridOptions);
    });
};