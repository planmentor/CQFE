// https://github.com/sindresorhus/grunt-svgmin - Minify SVG using SVGO
module.exports = {
    options: {
        plugins: [
            {
                cleanupIDs: false
            }
        ]
    },
    all: {
        files: [{
            expand: true,
            cwd: '<%= config.src_assets %>/images',
            src: '**/*.svg',
            dest: '<%= config.src_assets %>/images'
        }]
    }
};
