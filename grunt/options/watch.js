// https://github.com/gruntjs/grunt-contrib-watch - Watches files for changes and runs tasks based on the changed files
module.exports = {
    options: {
        livereload: true
    },
    assemble: {
        options: {
            livereload: false,
            event: [ 'changed', 'added', 'deleted' ]
        },
        files: [
            '<%= config.src %>/**/*.{md,hbs,yml,json}'
        ],
        tasks: [ 'assemble:tmp' ]
    },
    js: {
        options: {
            event: [ 'changed', 'added', 'deleted' ]
        },
        files: [
            '<%= config.src %>/js/*.js',
            '<%= config.src %>/modules/**/*.js'
        ],
        tasks: [
            'jshint'
        ]
    },
    sass: {
        options: {
            livereload: false,
            event: [ 'changed', 'added', 'deleted' ]
        },
        files: [
            '<%= config.src %>/styles/**/*.scss',
            '<%= config.src_modules %>/**/*.scss'
        ],
        tasks: [
            'sass:tmp',
            'sass:styleguide'
        ]
    },
    icons: {
        options: {
            event: [ 'changed', 'added', 'deleted' ]
        },
        files: [
            '<%= config.src_assets %>/images/svg/**/*.svg',
            '<%= config.src_modules %>/**/*.svg'
        ],
        tasks: [
            'clean:src_png',
            'svgmin',
            'copy:modulesvg',
            'grunticon:tmp',
            'sass:tmp'
        ]
    },
    styleguide: {
        options: {
            livereload: false,
        },
        files: [
            '<%= config.styleguide %>/**/*.md',
            '<%= config.styleguide %>/**/*.css',
            '<%= config.styleguide %>/**/*.js'
        ],
        tasks: [
            'sass:styleguide',
            'styledown:tmp'
        ]
    },
    jsdoc: {
        options: {
            livereload: false,
        },
        files: [
            './README.md'
        ],
        tasks: [ 'jsdoc' ]
    },
    livereload: {
        files: [
            '<%= config.tmp %>/**/*'
        ]
    }
};
