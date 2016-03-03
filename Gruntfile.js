'use strict';

var _ = require('lodash');

module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        package: pkg,
        directories: {
            tmp: './_tmp',
            build: './build',
            dist: './dist',
            module: '<%= directories.src %>/modules/' + _.camelCase(pkg.name),
            src: './src'
        }
    });

    grunt.file.setBase('./');

    // clean
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.config('clean', {
        tmp: {
            src: ['<%= directories.tmp %>']
        },
        build: {
            src: ['<%= directories.build %>']
        },
        dist: {
            src: ['<%= directories.dist %>']
        }
    });

    // copy
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.config('copy', {
        build: {
            files: [
                {
                    expand: true,
                    cwd: '<%= directories.src %>',
                    src: ['**/*.js', '**/*.html'],
                    dest: '<%= directories.build %>',
                    filter: filterJspmPackages
                }
            ]
        },
        'dist-app': {
            // copy HTML only in case templateUrl is being used
            // (and obviously we want HTML pages in general)
            files: [
                {
                    expand: true,
                    cwd: '<%= directories.src %>',
                    src: ['*', '**/*.html', 'jspm_packages/**'],
                    dest: '<%= directories.dist %>'
                }
            ]
        },
        jspm: {
            files: [
                {
                    expand: true,
                    cwd: '<%= directories.src %>',
                    src: ['jspm_packages/**'],
                    dest: '<%= directories.build %>'
                }
            ]
        }
    });

    // jspm
    grunt.loadNpmTasks('grunt-jspm');
    grunt.config('jspm', {
        'dist-app': {
            options: {
                // need to implement grunt-processhtml or something similar prior to setting to true
                sfx: false
            },
            files: {
                '<%= directories.dist %>/build.js': '<%= directories.src %>/app/app.js'
            }
        },
        'dist-module': {
            options: {
                sfx: false,
                minify: false
            },
            files: [
                {
                    src: ['<%= directories.module %>/module.js'],
                    dest: (grunt.option('target') || '<%= directories.dist %>') + '/<%= package.name %>.js'
                }
            ]
        }
    });

    // less
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.config('less', {
        build: {
            files: {
                '<%= directories.build %>/css/styles.css': ['<%= directories.src %>/**/*.less']
            }
        },
        'dist-app': {
            files: {
                '<%= directories.dist %>/css/styles.css': ['<%= directories.src %>/**/*.less']
            },
            options: {
                plugins: [
                    new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                    new (require('less-plugin-clean-css'))({})
                ],
                compress: true
            }
        },
        'dist-module': {
            files: [
                {
                    src: ['<%= directories.module %>/**/*.less'],
                    dest: (grunt.option('target') || '<%= directories.dist %>') + '/<%= package.name %>.min.css'
                }
            ],
            options: {
                plugins: [
                    new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                    new (require('less-plugin-clean-css'))({})
                ],
                compress: true
            }
        }
    });

    // uglify
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.config('uglify', {
        'dist-module': {
            options: {
                sourceMap: true,
                screwIE8: true
            },
            files: [
                {
                    // requires jspm:dist-module to be done
                    src: [(grunt.option('target') || '<%= directories.dist %>') + '/<%= package.name %>.js'],
                    dest: (grunt.option('target') || '<%= directories.dist %>') + '/<%= package.name %>.min.js'
                }
            ]
        }
    });

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.config('watch', {
        app: {
            files: [
                ['**/*.js', '**/*.html', '!jspm_packages/**']
            ],
            options: {
                cwd: '<%= directories.src %>'
            },
            tasks: ['copy:build']
        },
        'css-build': {
            files: [
                '<%= directories.src %>/app/**/*.less',
                '<%= directories.src %>/css/**/*.less',
                '<%= directories.src %>/modules/**/*.less'
            ],
            tasks: ['less:build']
        },
        'css-dist': {
            files: [
                '<%= directories.src %>/modules/**/*.less'
            ],
            tasks: ['less:dist-module']
        },
        'module-dist': {
            files: [
                '<%= directories.module %>/**'
            ],
            tasks: ['jspm:dist-module', 'uglify:dist-module']
        }
    });

    // stubs a build.js for development
    grunt.registerTask('stub-app', "Stubbing build.js", function () {
        grunt.file.write(grunt.config('directories.build') + '/build.js', "'use strict';");
    });

    // build task
    grunt.registerTask('build', [
        'clean:build',
        'less:build',
        'copy:jspm',
        'copy:build',
        'stub-app'
    ]);

    // default dist task
    grunt.registerTask('dist', ['dist-module']);

    grunt.registerTask('dist-app', [
        'clean:dist',
        'less:dist-app',
        'copy:dist-app',
        'jspm:dist-app'
    ]);

    grunt.registerTask('dist-module', [
        'clean:dist',
        'less:dist-module',
        'jspm:dist-module',
        'uglify:dist-module'
    ]);

    // default task
    grunt.registerTask('sync', [
        'build',
        'watch:css-dist',
        'watch:module-dist'
    ]);

    // default task
    grunt.registerTask('default', [
        'build',
        'watch:css-build',
        'watch:app'
    ]);

    //////////////////////////////////////////////// private functions ////////////////////////////////////////////////

    /**
     * Filters out
     * @param {string} src
     * @returns {boolean}
     */
    function filterJspmPackages(src)
    {
        return src.indexOf('src/jspm_packages') === -1;
    }
};