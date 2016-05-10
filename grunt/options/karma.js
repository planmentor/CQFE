// https://github.com/karma-runner/grunt-karma - Karma configuration file
module.exports = {
    unit: {
        configFile: '<%= config.test %>/karma.conf.js',
        keepalive: true,
        singleRun: false,
        options: {
            files: [
                '<%= config.src %>/js/bower/jquery/dist/jquery.min.js',
                '<%= config.src %>/js/*.js',
                '<%= config.src_modules %>/**/*.js',
                '<%= config.test %>/fixtures/*-fixtures.html',
                '<%= config.test %>/spec/*.spec.js'
            ]
        }
    }
};
