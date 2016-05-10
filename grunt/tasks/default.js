module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('default', [
        'clean:tmp',
        'assemble:tmp',
        'copy:moduleimg',
        'copy:modulesvg',
        'svgmin',
        'grunticon:tmp',
        'less:tmp',
        'less:styleguide',
        'autoprefixer:tmp',
        'handlebars:templates',
        'styledown:tmp',
        'jsdoc:tmp',
        'connect',
        'watch'
    ]);
};
