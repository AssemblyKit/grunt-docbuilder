/*
 * grunt-docbuilder
 * https://github.com/AssemblyKit/grunt-docbuilder
 *
 * Copyright (c) 2013 Claudio Silva
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt)
{
  require ('time-grunt') (grunt);

  // Project configuration.
  grunt.initConfig ({

    jshint: {
      all:     [
        'Gruntfile.js',
        'tasks/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }

  });

  // Load this plugin's task(s).
  grunt.loadTasks ('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks ('grunt-contrib-jshint');

  // By default, lint and run all tests.
  grunt.registerTask ('default', ['jshint']);

};