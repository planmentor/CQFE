// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-08-08 using
// generator-karma 0.8.3

module.exports = function(config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine-ajax', 'jasmine-jquery', 'jasmine'],

        // list of files / patterns to load in the browser
        files: [],

        // list of files / patterns to exclude
        exclude: [],

        reporters: [
            'html'
        ],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
        ],

        // Which plugins to enable
        plugins: [,
            'karma-jasmine-ajax',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-jasmine-html-reporter',
            'karma-jasmine-jquery'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
            '/': 'http://0.0.0.0:9000/',
        // },
        // URL root prevent conflicts with the site root
        urlRoot: '_karma_'
    });
};
