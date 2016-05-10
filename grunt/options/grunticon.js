// https://github.com/filamentgroup/grunticon - A mystical CSS icon solution
module.exports = {
    options: {
        // optional grunticon config properties

        // CSS filenames
        datasvgcss: '../../styles/generic/icons-svg.css',
        datapngcss: '../../styles/generic/icons-png.css',
        urlpngcss:  '../../styles/generic/icons-oldie.css',

        // preview HTML filename
        previewhtml: 'preview.html',

        // path to the template that will be used for the preview.html
        previewTemplate: '<%= config.src %>/layouts/grunticon-preview.hbs',

        // folder name (within dest) for png output
        pngfolder: 'png/',

        // prefix for CSS classnames
        cssprefix: '.icon-',

        defaultWidth: '300px',
        defaultHeight: '200px',

        // define vars that can be used in filenames if desirable, like foo.colors-primary-secondary.svg
        colors: {
            black: '#000',
            white: '#fff',
            red: '#cd0533'
        }
    },
    tmp: {
        files: [{
            expand: true,
            dot: true,
            flatten: true,
            cwd: '<%= config.src_assets %>/images/svg',
            src: '**/*.svg',
            dest: '<%= config.src_assets %>/images'
        }]
    }
};
