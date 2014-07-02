module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: 'dist'
    },
    less: {
      compile: {
        options: {
          strictMath: false,
          paths: ["less"]
        },
        files: {
          "dist/css/rhs.css": "less/rhs.less"
        }
      },
      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          "dist/css/rhs.min.css": "dist/css/rhs.css"
        }
      }
    }
  });

  // Load the plugins that provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

  // Distribution
  grunt.registerTask('dist', ['clean', 'less']);

  // Default task(s).
  grunt.registerTask('default', ['dist']);

};
