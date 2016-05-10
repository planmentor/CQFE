// https://github.com/nDmitry/grunt-autoprefixer - Add vendor prefixed styles
module.exports = {
    options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        cascade: false
    },
    tmp: {
        files: [{
            expand: true,
            cwd: '<%= config.tmp %>/styles/',
            src: '**/*.css',
            dest: '<%= config.tmp %>/styles/'
        }]
    },
    dist: {
        files: [{
            expand: true,
            cwd: '<%= config.dist %>/styles/',
            src: '**/*.css',
            dest: '<%= config.dist %>/styles/'
        }]
    }
};
