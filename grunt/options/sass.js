// https://github.com/gruntjs/grunt-contrib-connect - The actual grunt server settings
module.exports = {

    dist: {
        options: {
            style: 'nested',
            loadPath: '../'
        },
        files: {
            '<%= config.dist %>/styles/main.css': '<%= config.src %>/styles/main.scss'
        }
    },
    tmp: {
        options: {
            loadPath: '../'
        },
        files: {
            '<%= config.tmp %>/styles/main.css': '<%= config.src %>/styles/main.scss'
        }
    },
    styleguide: {
        options: {
            loadPath: '../'
        },
        files: {
            '<%= config.styleguide %>/main.css': '<%= config.src %>/styles/main.scss'
        }
    }

};

