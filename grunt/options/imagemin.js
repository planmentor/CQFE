// https://github.com/gruntjs/grunt-contrib-imagemin - Minify PNG and JPEG images
module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= config.src_assets %>/images',
            src: '{,*/}*.{gif,jpeg,jpg,png}',
            dest: '<%= config.dist_assets %>/images'
        }]
    }
};
