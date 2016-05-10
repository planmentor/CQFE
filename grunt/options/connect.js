// https://github.com/gruntjs/grunt-contrib-connect - The actual grunt server settings
module.exports = {
    options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
    },
    livereload: {
        options: {
            open: true,
            base: [
                '<%= config.tmp %>',
                '<%= config.src %>',
                '<%= config.styleguide %>'
            ]
        }
    }
};
