'use strict';

var _ = require('lodash');

module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        package: pkg,
        directories: {
            build:  _.get(pkg, 'directories.build') || _.get(pkg, 'jspm.directories.build') || './build',
            dist: _.get(pkg, 'directories.dist') || _.get(pkg, 'jspm.directories.dist') || './dist',
            src: _.get(pkg, 'directories.src') || _.get(pkg, 'jspm.directories.src') || './src'
        }
    });

    grunt.file.setBase('./');

    // clean
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.config('clean', {
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
                    src: ['**'],
                    dest: grunt.option('target') || '<%= directories.build %>'
                }
            ]
        }
    });

    // jspm
    grunt.loadNpmTasks('grunt-jspm');
    grunt.config('jspm', {
        dist: {
            options: {
                sfx: true,
                minify: false
            },
            files: [
                {
                    src: ['<%= directories.src %>/module.js'],
                    dest: (grunt.option('target') || '<%= directories.dist %>') + '/<%= package.name %>.js'
                }
            ]
        }
    });

    // karma
    grunt.loadNpmTasks('grunt-karma');
    grunt.config('karma', {
        options: {
            basePath: '',
            frameworks: ['chai', 'jspm', 'mocha'],
            reporters: ['spec'],
            jspm: {
                loadFiles: ['src/**/*.js', 'test/**/*.spec.js'],
                serveFiles: [
                    'src/**/!(*.spec).js',
                    'src/**/*.html',
                    'src/**/*.css'
                ],
                config: 'config.js'
            },
            colors: true,
            concurrency: Infinity
        },
        unit: {
            options: {
                port: 9999,
                browsers: ['PhantomJS'],
                autoWatch: false,
                singleRun: true
            }
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
        dist: {
            files: [
                {
                    src: ['<%= directories.src%>/styles/*.less'],
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
        },
        src: {
            files: {
                '<%= directories.src %>/styles/styles.css': ['<%= directories.src %>/**/*.less']
            },
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
        dist: {
            options: {
                sourceMap: true,
                screwIE8: true
            },
            files: [
                {
                    // requires jspm:dist to be done
                    src: [(grunt.option('target') || '<%= directories.dist %>') + '/<%= package.name %>.js'],
                    dest: (grunt.option('target') || '<%= directories.dist %>') + '/<%= package.name %>.min.js'
                }
            ]
        }
    });

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.config('watch', {
        css: {
            files: [
                '<%= directories.src %>/**/*.less'
            ],
            tasks: ['less:build']
        },
        build: {
            files: [
                '<%= directories.src %>/**'
            ],
            tasks: ['less:src', 'copy:build']
        }
    });

    // build task
    grunt.registerTask('build', [
        'karma:unit',
        'clean:build',
        'less:src',
        'copy:build'
    ]);

    // default dist task
    grunt.registerTask('dist', [
        'karma:unit',
        'clean:dist',
        'less:dist',
        'jspm:dist',
        'uglify:dist'
    ]);

    // default task
    grunt.registerTask('default', [
        'build',
        'watch:build'
    ]);
};