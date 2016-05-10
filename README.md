## Preliminaries
1. Install [git](http://git-scm.com) as it is a bower dependency
2. Install [nodeJS](http://nodejs.org) incl. node package manager (npm)
3. Install [Grunt](http://gruntjs.com) Command Line Interface (grunt cli) globally
    - __*$ sudo npm install -g grunt-cli*__
4. Install [bower](http://bower.io) globally
    - __*$ sudo npm install -g bower*__
5. Install bower dependencies
    - __*$ bower install*__
    - If bower gives you GIT issues reconfigure git [(details)](http://stackoverflow.com/questions/21789683/howto-fix-bower-ecmderr#answer-21790275):  
    - $ git config --global url."https://".insteadOf git://
6. Install node modules within the project location
    - __*$ sudo npm install*__ 

## <a name="user-content-technology-stack"></a>Technology Stack
[NodeJS](http://nodejs.org) is used as the underyling core technology, that empowers the used tool chain.  
[Bower](http://bower.io) is used for dependency management to handle vendor libraries / frameworks.  
[Grunt](http://gruntjs.com) is used for FE automation tasks, e.g. building static HTML pages, linting the code, creating inline SVG and more.

## Preinstalled dependencies (via bower)
- handlebars v2.0.0 (*source/js/bower/handlebars*)
- modernizr v2.8.3 (*source/js/bower/modernizr*)
- jquery v1.11.1 (*source/js/bower/jquery*)
- bootstrap v3.3.1 (*source/js/bower/bootstrap*)

The dependencies can be adjusted via the command line or directly in the related *bower.json* file.

## <a name="user-content-grunt-commands"></a>Grunt Commands
1. __*$ grunt*__ starts a node webserver with live reload for development purposes on http://localhost:9001/
2. __*$ grunt dist*__ creates a production ready version of the project in the dist folder. this version can be used for client demos, internal feedback...
3. __*$ grunt delivery*__ runs the distribution task and puts all of the output in a ZIP archive with an incremental version number
5. __*$ grunt karma:unit*__ fire up karma test runner to execute unit tests 

## Architecture
### Grunt
The FE Quickstarter is driven by [Grunt](http://gruntjs.com) to have a running development environment in place in a very short amount of time.
The Grunt setup follows a modularized approach to keep it maintainable and organized.
All tasks are located in *grunt/tasks*. All tasks (node modules as well as custom tasks) are automatically loaded by GRUNT.  
All task options are located in *grunt/options*. The option files are named like the corresponding tasks. The options are automatically loaded by GRUNT.
More details about the Grunt tasks in use can be found [here](#user-content-grunt-tasks).

Interesting reads  
- http://thenittygritty.co/shared-grunt-configuration  
- http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html 

### Assemble
[Assemble](http://assemble.io) is a static site generator for Node.js, Grunt.js, and Yeoman, using the [Handlebars](http://handlebarsjs.com) template engine. The FE Quickstarter relies on Assemble to achieve a modularized setup. All modules / components are created as partials. Like "includes", partials are reusable fragments of code that can be included in a page and rendered. Mock up data can easily be incorporated as context for the partials by using Assemble's built in data provider mechanism. Make sure to check out the [documentation](http://assemble.io/docs/index.html).

### Bootstrap
[Bootstrap](http://getbootstrap.com) is included as a hard dependency to have a fast and proven responsive framework as a base layer.  
Nevertheless if it isn't required, just remove the dependency from the *bower.json* file, before installing. Make sure to remove BS import and includes from */source/styles/main.less* and */source/layouts/default.hbs*.

### CSS
In this version of the FE QS [Less](http://lesscss.org) is used as a CSS pre-processor. Less was chosen over [SASS](http://sass-lang.com) to get rid of the additional dependencies to [Ruby](https://www.ruby-lang.org/en/).  
More details on CSS usage within the [folder structure](#user-content-folder-structure) / functionality section.

### JavaScript
Module related JavaScript is placed together with it's module.
Currently there are no integrated module loaders like requireJS or Browserify.
Custom Javascript should follow the [Revealing Module Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript) as can be found in the Sample Module */sampleModule/sampleModule.js*. Of course other JS Design patterns can be used if required.
More details on JS usage within the [folder structure](#user-content-folder-structure) / functionality section.

### SVG Integration
[Grunticon](https://github.com/filamentgroup/grunticon) is used to produce embedded SVG / PNG URLs as well as fallback PNGs for older browsers. The original SVG files should be provided in the required dimensions, as the fallback PNGs will adopt these. The processing of monochrome as well as polychrome SVGs is supported. Color variations can automatically be created, if the SVG filenames are edited in the following way, e.g. :
*filename.colors-grey-red.svg*
The specific color values can be added and modified by editing the colors property within the corresponding Grunt task in this location */grunt/options/grunticon.js*

### TDD approach
[Karma](http://karma-runner.github.io/0.12/index.html) is used as the Test Runner with [Jasmine](http://jasmine.github.io) set up as the testing framework. It is included as a Grunt task and can be triggered by using the command line.
Type *$ grunt karma:unit* to fire it up.
All unit tests have to be located in *test/spec*. Each unit testing file has to be marked with the extension "*.spec.js" and has to be named like the component that should be tested, e.g. "slider.spec.js" for the "slider.js" component.
The most important part for improving the overall code quality is "WRITE TESTS FIRST!". This means you will start with writing tests that fail before you actually write a line of "real" code.
Have a look [here](http://www.youtube.com/watch?v=OzjogCFO4Zo) to get the concept of TDD.
A more detailed explanation as well as examples will follow.

### JS Doc
http://devnull.absolventa.de/2014/03/25/jsdoc-and-the-revealing-module-pattern/

###<a name="user-content-folder-structure"></a>Folder structure
All development is done within the __*source*__ and __*test*__ folders.  
The function of the subfolders within __*source*__ are as follows:

__*fonts*__  
Location for the Web Fonts

__*images*__  
Location for image assets. Also SVG files like logos etc., that are not related to modules are stored within a subfolder *images/svg*. Check out the [SVG Integration](#user-content-svg-integration) section for further details. All images will automatically be provided compressed and optimized when running the *Distribution* or *Delivery* Grunt tasks (see [*Grunt Commands*](#user-content-grunt-commands)).

__*js*__  
Vendor libraries / frameworks are located here.  
[Bower](#user-content-technology-stack) creates a folder *js/vendor* to install all specified dependencies. Manually downloaded libs should also be placed here.  
If JS is required, that isn't related to a specific module, it is placed within this general *js* folder. Details on how to create and place module related JS can be found in the modules section.  
There's also a Grunt task for creating pre-compiled templates of all Handlebars partials. This task creates a folder *js/templates* together with the file *templates.combined.js*. By integrating this file in your project you have access to all created partials. If required this can be used to e.g. dynamically render a navigation and fill it with data on client side. The included partials (if not all are required) can be specified in the related Grunt option */grunt/options/handlebars.js*

__*layouts*__  
This folder holds the Assemble layouts. Layouts are used for "wrapping" the content of individual HTML pages with common elements, such as the "head" and "footer" sections, which usually contain necessities such as "link" and "script" tags. Different layouts can be specified and assigned to pages. The content (pages) will replace the *{{> body}}* placeholder when rendered. For further details have a look at the Assemble [documentation](http://assemble.io/docs/Layouts.html).

__*modules*__  
All modules / components of a solution are created within this folder. Every module follows the same pattern.  
Folder structure, e.g. "Image Gallery":
- __*modules/image-gallery*__ (root folder for HTML (HBS) / JS / CSS (Less))
- __*modules/image-gallery/js*__ (module related JS)
- __*modules/image-gallery/less*__ (module related CSS (LESS))
- __*modules/image-gallery/assets*__ (module related images)
- __*modules/image-gallery/assets/svg*__ (module related icons)
- __*modules/image-gallery/data*__   (module related mockup data)

Usage of mock up data for [Grunt assemble](https://github.com/assemble/assemble. Data may be formatted in JSON, YAML, YAML front matter, or passed directly as an object.  
Example:  
If the *data* folder holds a file called sampleData.json, Assemble will treat it like a JSON object. A partial can get this object "sampleData" as context and access the data within it's definition.

*Set up the data object sampleData.json*

    {
        "content": "some sample data"
    }

*Provide the data object as context to a partial*

    {{> sample-module sampleData}}

*Access the data within the partial sample-module.hbs*

    <div class="sample-module">
        {{ this.content }}
    </div>

*Rendering of the partial*

    <div class="sample-module">
        some sample data
    </div>


__*pages*__  
This folder holds the Assemble pages. All files located here are rendered as static HTML pages to the location, specified in the related Grunt option */grunt/options/assemble.js*. Also check out the [documentation](http://assemble.io/docs/Pages.html).  
Example:  
If a file called *index.hbs* is created within the *pages* folder, Assemble will render it to the specified location as *index.html*. The rendered HTML page contains all included partials and gets the *default.hbs* layout as wrapper, if not specified otherwise.  

*Create a new file index.hbs*

    ---
    {
        ["layout"   : "otherLayout.hbs"],
        "title"    : "Project title",
        "site"     : {
            "title" : "Page title"
        }
    }
    ---
    <div class="container tpl-homepage">
        <section>
            <h1>Sapient Frontend Quick Starter</h1>
            <nav>
                <h2 class="navigation-headline">Navigation</h2>
                <ul class="navigation-list">
                    <li class="navigation-list__item">
                        <a href="#" target="_blank" class="navigation-list__item__link">Navigation List Item 1</a>
                    </li>
                </ul>
            </nav>
        </section>
    </div>

*Assemble searches the layout folder and applies the required layout (default.hbs if not specified otherwise). {{> body}} is replaced by the page content*

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1'>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <title>{{title}} | {{site.title}}</title>
        <link rel="shortcut icon" href="/images/favicon.ico">
        <link rel="stylesheet" href="styles/main.css">
        <script src="js/vendor/jquery/dist/jquery.js"></script>
    </head>
    <body>
        {{> body }}
    </body>
    </html>

*Rendered index.html*

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1'>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <title>SN-FE-QS | Index</title>
        <link rel="stylesheet" href="styles/main.css">
        <script src="js/vendor/jquery/dist/jquery.js"></script>
    </head>
    <body>
    <div class="container tpl-homepage">
        <section>
            <h1>Sapient Frontend Quick Starter</h1>
            <nav>
                <h2 class="navigation-headline">Navigation</h2>
                <ul class="navigation-list">
                    <li class="navigation-list__item">
                        <a href="#" target="_blank" class="navigation-list__item__link">Navigation List Item 1</a>
                    </li>
                </ul>
            </nav>
        </section>
    </div>
    </body>
    </html>

__*styles*__  
tbc

## <a name="user-content-grunt-tasks" href=""></a>Grunt Tasks
tbd

## <a name="user-content-npm" href=""></a>Useful NPM installs
-   [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
tbc
