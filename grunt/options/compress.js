// https://github.com/gruntjs/grunt-contrib-compress - Compress files and folders
module.exports = {
    delivery: {
        options: {
            archive: '<%= config.delivery %>/<%= pkg.name %>-SOURCE-<%= pkg.version %>.zip'
        },
        files: [{
            expand: true,
            cwd: '<%= config.dist %>',
            src: [
                '**/*',
                '!*.zip'
            ]
        }]
    }
};
