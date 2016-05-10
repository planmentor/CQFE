// https://github.com/gruntjs/grunt-contrib-handlebars - Precompile Handlebars templates to JST file
module.exports = {
    templates: {
        options: {
            namespace: 'HBS.templates',
            partialsUseNamespace: true,
            processName: function (filePath) {
                'use strict';

                var fileParts = filePath.split('/'),
                    fileNameParts = fileParts[fileParts.length - 1].split('.');

                return fileNameParts[0];
            }
        },
        files: {
                '<%= config.src %>/js/templates/templates.combined.js': [
                '<%= config.src_modules %>/**/*.hbs',
                '!<%= config.src_modules %>/generic/common-js.hbs'
            ]
        }
    }
};
