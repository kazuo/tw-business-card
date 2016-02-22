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

	// less
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.config('less', {
		development: {
			files: {
				'<%= directories.src %>/css/styles.css': ['<%= directories.src %>/**/*.less']
			}
		},
		production: {}
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
		}
	});

	// default tasks
	grunt.registerTask('default', ['watch']);
};