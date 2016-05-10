module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('build', [
        'clean:dist',
        'assemble:dist',
        'useminPrepare',
        'uglify:generated',
        'copy:moduleimg',
        'copy:modulesvg',
        'svgmin',
        'grunticon:tmp',
        'sass:dist',
        'sass:styleguide',
        'autoprefixer:dist',
        'copy:dist',
        //'imagemin:dist',
        'handlebars:templates',
        'usemin',
        'styledown:dist',
        'jsdoc:dist',
        'copy:styleguide'
    ]);
};
