module.exports = function(grunt) {

  grunt.initConfig({

    // Project configuration
    pkg: grunt.file.readJSON('package.json'),

    // Compile Sass
    sass: {
      options: {
        sourceMap: true,
        sourceComments: false
      },
      dist: {
        files: {
          'css/main.css': 'sass/stylesheets/main.scss'
        }
      }
    },

    // Watch and build
    watch: {
      sass: {
        files: 'sass/**/*.scss',
        tasks: ['sass', 'cssmin']
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrevision: 1,
        sourceMap: true,
        keepSpecialComments: 0,
        mode: 'brotoli'
      },
      target: {
        files: {
          'css/app.min.css': ['css/bootstrap.min.css', 'css/font-awesome.min.css', 'css/jotform.css', 'css/plyr.css', 'css/main.css']
        }
      }
    },
    uglify: {
      options: {
      beautify: false,
      mangle: false,
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    },
      min: {
        files: {
          'js/app.min.js': ['js/jquery', 'js/bootstrap.js']
        }
      }
    }

  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');

  // Run tasks
  grunt.registerTask('default', ['sass']);

};
