'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        package: grunt.file.readJSON('package.json'),
        directories: {
            tmp: './_tmp',
            build: './build',
            dist: './dist',
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
        jspm: {
            files: [
                {
                    expand: true,
                    cwd: '<%= directories.src %>',
                    src: ['jspm_packages'],
                    dest: '<%= directories.build %>'
                }
            ]
        }
    });

    // less
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.config('less', {
        development: {
            files: {
                '<%= directories.build %>/css/styles.css': ['<%= directories.src %>/**/*.less']
            }
        },
        production: {
            plugins: [
                new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                new (require('less-plugin-clean-css'))({})
            ],
            files: {
                '<%= directories.dist %>/css/styles.css': ['<%= directories.src %>/**/*.less']
            },
            compress: true
        }
    });

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.config('watch', {
        css: {
            files: [
                '<%= directories.src %>/app/**/*.less',
                '<%= directories.src %>/css/**/*.less',
                '<%= directories.src %>/modules/**/*.less'
            ],
            tasks: ['less:development']
        },
        app: {
            files: [
                ['**/*.js', '**/*.html', '!jspm_packages/**']
            ],
            options: {
                cwd: '<%= directories.src %>'
            },
            tasks: ['copy:build']
        }
    });

    // build task
    grunt.registerTask('build', [
        'clean:build',
        'less:development',
        'copy:jspm',
        'copy:build'
    ]);

    // default task
    grunt.registerTask('default', ['build', 'watch']);

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