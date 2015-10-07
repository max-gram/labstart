var _sass = require('node-sass');
var importOnce = require('node-sass-import-once');

module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // CONFIG START
    config: {
      assets: 'assets',
      src: 'app',
      dev: '.tmp',
      dist: 'release',
      server: '127.0.0.1',
      port: 9000,
    },

    clean: {
      dev: ['<%= config.dev %>'],
      dist: ['<%= config.dist %>']
    },

    sass: {
      options: {
        sourceMap: true,
        includePaths: [
          '<%= config.src %>',
        ],
        outputStyle: 'expanded',

        importer: importOnce,
        importOnce: {
          index: true,
          // css: false,
          // bower: false
        },
      },
      dev: {
        files: [{
          expand: true,
          cwd: './',
          dest: '<%= config.dev %>/css/',
          src: [
            '<%= config.src %>/**/*.scss',
          ],
          ext: '.css'
        }]
      }
    },
  // CONFIG END
  });

  // grunt.registerTask('foo', '...', function(arg1, arg2) {
  //   var result = _sass.renderSync({
  //     // file: './app/com/scss/main.scss',
  //     outputStyle: 'expanded',
  //     sourceMap: true,
  //     includePaths: [ './app/scss/', './app/sections/landing/style.scss' ],
  //     importer: importOnce,
  //     importOnce: {
  //       index: false,
  //       css: false,
  //       bower: false
  //     },
  //     outFile: './.tmp/css/output.css'
  //   });

  //   console.log(result.css.toString());
  //   // console.log(result.map);
  //   // console.log(result.stats);
  // });

  grunt.registerTask('css', [
    'clean:dev',
    // 'foo'
    'sass',
  ]);
};
