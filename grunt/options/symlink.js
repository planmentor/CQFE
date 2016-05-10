// https://github.com/gruntjs/grunt-contrib-symlink - Create symbolic links
module.exports = {
    all: {
        src: '<%= config.doc %>/index.html',
        dest: '<%= config.tmp %>/doc/index.html'
    }
};
