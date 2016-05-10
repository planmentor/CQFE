module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('delivery', [
        'build',
        'compress',
        'bump'
    ]);
};
