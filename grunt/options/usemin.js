// https://github.com/yeoman/grunt-usemin - Replaces references to non-optimized scripts or stylesheets into a set of HTML files (or any templates/views)
module.exports = {
    html: ['<%= config.dist %>/{,*/}*.html'],
    css: ['<%= config.dist %>/styles/{,*/}*.css'],
    options: {
        assetsDirs: ['<%= config.dist %>', '<%= config.dist_assets %>/images']
    }
};
