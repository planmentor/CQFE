// https://github.com/gruntjs/grunt-contrib-htmlmin - Minify HTML
module.exports = {
    dist: {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: [{
            expand: true,
            cwd: '<%= config.dist %>/',
            src: '**/*.html',
            dest: '<%= config.dist %>/'
        }]
    }
};
