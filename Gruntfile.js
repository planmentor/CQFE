// Call Grunt configuration
module.exports = function(grunt) {
    'use strict';

    var
    // Basic utility library which allows you to extend an object by appending all of the properties from each object in a list
        xtend = require('xtend'),
        // Node module contains utilities for handling and transforming file paths
        path = require('path'),
        // Grunt plugin that lets you break up your Gruntfile config by task
        loadConfig = require('load-grunt-config'),
        // Generic Grunt config object
        config = {
            src: 'source',
            src_bower: 'source/js/bower',
            src_assets: 'source/assets',
            src_modules: 'source/modules',
            dist: 'dist',
            dist_assets: 'dist/assets',
            delivery: 'delivery',
            tmp: '.tmp',
            test: 'test',
            styleguide: 'styleguide'
        };

    // Measure time of grunt tasks. Can help when optimizing build times
    require('time-grunt')(grunt);
    // A JIT(Just In Time) plugin loader for Grunt
    require('jit-grunt')(grunt)({
        customTasksDir: 'grunt/tasks'
    });

    /**
     * Require each configuration file, concatenate and extend generic config object
     * Automatically load any tasks listed in the devDependencies (requirement "grunt-" prefix)
     * Configuration files location "grunt/options"
     */
    config = xtend({}, loadConfig(grunt, {
        configPath: path.join(__dirname, 'grunt/options'),
        init: false,
        data: {
            config: config,
            pkg: grunt.file.readJSON('package.json')
        }
    }));

    // Call initConfig with your final configuration object
    grunt.initConfig(config);
};
