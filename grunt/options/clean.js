// https://github.com/gruntjs/grunt-contrib-clean - Clean files and folders
module.exports = {
    dist: '<%= config.dist %>',
    tmp: '<%= config.tmp %>',
    src_png: '<%= config.src_assets %>/images/png'
};
