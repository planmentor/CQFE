// https://github.com/krampstudio/grunt-jsdoc - Generate javascript doc by running jsdoc3
module.exports = {
    dist: {
        src: ['<%= config.src %>/js/*.js', '<%= config.src %>/modules/**/*.js', './README.md'],
        options: {
            destination: '<%= config.dist %>/doc',
            template : 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
            configure : '.jsdocconfig'
        }
    },
    tmp: {
        src: ['<%= config.src %>/js/*.js', '<%= config.src %>/modules/**/*.js', './README.md'],
        options: {
            destination: '<%= config.tmp %>/doc',
            template : 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
            configure : '.jsdocconfig'
        }
    }
};
