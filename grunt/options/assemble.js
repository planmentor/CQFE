// https://github.com/assemble/assemble - Static site generator using the Handlebars template engine
module.exports = {
    options: {
        assets:    '<%= config.dist %>/images',
        layout:    'default.hbs',
        layoutdir: '<%= config.src %>/layouts',
        data:      '<%= config.src_modules %>/**/data/*.{json,yml}',
        partials: [
            '<%= config.src_modules %>/**/*.hbs',
            '<%= config.src_assets %>/images/svg{,*/}*.svg'
        ]
    },
    dist: {
        files: [{
            flatten: true,
            expand: true,
            cwd: '<%= config.src %>/pages',
            src: ['*.hbs', 'dist/**/*.hbs'],
            dest: '<%= config.dist %>/'
        }]
    },
    tmp: {
        files: [{
            flatten: true,
            expand: true,
            cwd: '<%= config.src %>/pages',
            src: ['*.hbs', 'tmp/**/*.hbs'],
            dest: '<%= config.tmp %>/'
        }]
    }
};
