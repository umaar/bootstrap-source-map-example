module.exports = function(grunt) {
	'use strict';

	require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		less: {
			dev: {
				options: {
					sourceMap: true,
					sourceMapFilename: 'bootstrap.map'
				},
				files: {
					'less/bootstrap.css': 'less/bootstrap.less'
				}
			}
		},
		watch: {
			all: {
				files: ['less/**/*.less'],
				tasks: ['less'],
			}
		}
	});

	grunt.registerTask('default', ['less', 'watch']);
};
