module.exports = function(grunt) {

	// add the plugins from package.json
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js': ['_/components/js/*.js']
				} //files
			} //uglify
		}, //uglify
		watch: {
			options: { livereload: true },
      scripts: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      }, // scripts
      html: {
      	files: ['*.html']
      }
		} // watch
	}); //initconfig
	grunt.registerTask('default', 'watch');
} //exports 