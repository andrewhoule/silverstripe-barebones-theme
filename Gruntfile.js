/*!
 * Project Name Here Gruntfile
 * projecturlhere
 * @author Author Name and Email Here
 */
 
module.exports = function(grunt) {

// load all grunt tasks
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.initConfig({
 
	pkg: grunt.file.readJSON('package.json'),

	/* ==========================================================================
	   Set project object
	   ========================================================================== */

	project: {
	  	assets: 'assets',
	  	css: 'css',
	  	js: 'js'
	},

	/* ==========================================================================
	   SASS
	   ========================================================================== */

	sass: {
	  	dev: {
	    	options: {
	      	style: 'compressed',
	      	compass: true
	    	},
	    	files: {
	      	'<%= project.css %>/style.css': '<%= project.assets %>/sass/style.scss'
	    	}
	  	}
	},

	/* ==========================================================================
	   Watch
	   ========================================================================== */

	watch: {
	  	sass: {
	    	files: '<%= project.assets %>/sass/{,*/}*.{scss,sass}',
	    	tasks: ['sass:dev']
	  	}
	}	

});

/* ==========================================================================
   Default task Run `grunt` on the command line
   ========================================================================== */
	   
grunt.registerTask('default',['sass:dev','watch']);
 
};