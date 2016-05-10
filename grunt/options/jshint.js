// https://github.com/gruntjs/grunt-contrib-jshint - Validate files with JSHint
module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: [
        '<%= config.src %>/js/*.js',
        '<%= config.src_modules %>/**/*.js',
        '!**/vendor/**/*.js'
    ]
};
