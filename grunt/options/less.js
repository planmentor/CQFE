// https://github.com/gruntjs/grunt-contrib-less - Compiles LESS to CSS and generates necessary files if requested
module.exports = {
    options: {
        paths: [
            '<%= config.src_bower %>/bootstrap/less',
            '<%= config.src_modules %>'
        ]
    },
    dist: {
        options: {
            compress: true,
            rootpath: '../'
        },
        files: {
            '<%= config.dist %>/styles/main.css': '<%= config.src %>/styles/main.less'
        }
    },
    tmp: {
        options: {
            rootpath: '../'
        },
        files: {
            '<%= config.tmp %>/styles/main.css': '<%= config.src %>/styles/main.less',
            '<%= config.tmp %>/styles/icons.svg.css': '<%= config.src %>/styles/icons.svg.less',
            '<%= config.tmp %>/styles/icons.png.css': '<%= config.src %>/styles/icons.png.less',
            '<%= config.tmp %>/styles/icons.oldie.css': '<%= config.src %>/styles/icons.oldie.less'
        }
    },
    styleguide: {
        options: {
            rootpath: '../'
        },
        files: {
            '<%= config.styleguide %>/main.css': '<%= config.src %>/styles/main.less'
        }
    }
};
