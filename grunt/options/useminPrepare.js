// https://github.com/yeoman/grunt-usemin - Replaces references to non-optimized scripts or stylesheets into a set of HTML files (or any templates/views)
module.exports = {
    html: '<%= config.dist %>/index.html',
    options: {
        dest: '<%= config.dist %>',
        flow: {
            html: {
                steps: {
                    js: ['uglifyjs'],
                    css: ['cssmin']
                },
                post: {}
            }
        }
    }
};
