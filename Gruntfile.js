var _sass = require('node-sass');
var importOnce = require('node-sass-import-once');

console.log(importOnce)

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
        // includePaths: [
        //   '<%= config.src %>/com/scss/',
        //   '<%= config.src %>/sections/landing',
        //   '<%= config.src %>/sections/page',
        // ],
        // files: './app/com/scss/main.scss',
        outputStyle: 'expanded',
        // importer: function(url, prev, done) {
        //   console.log('->> ', url) //, prev);
        // },

        importer: importOnce,
        // importOnce: {
        //   // index: true,
        //   // css: false,
        //   // bower: false
        // },
      },
      dev: {
        // files: {'./app/com/scss/main.scss': './.tmp/out/main.css'}
        files: [{
          expand: true,
          cwd: './',
          dest: '<%= config.dev %>/css/',
          // src: './app/com/scss/main.scss',
          src: [
            './app/com/scss/main.scss',
            './app/com/scss/sub.scss',
          ],
          ext: '.css'
        }]
      }
    },
  // CONFIG END
  });

  grunt.registerTask('foo', '...', function(arg1, arg2) {
    var result = _sass.renderSync({
      file: './app/com/scss/main.scss',
      outputStyle: 'expanded',
      sourceMap: true,
      // importer: function(url, prev, done) {
      //   console.log('->> ', url) //, prev);
      // },


      // includePaths: [ './app/scss/', './app/sections/landing/style.scss' ],
      importer: importOnce,
      // importOnce: {
      //   index: false,
      //   css: false,
      //   bower: false
      // },
      outFile: './.tmp/css/output.css'
    });

    console.log( result.css.toString() );
    // console.log(result.map);
    // console.log(result.stats);
  });

  grunt.registerTask('css', [
    'clean:dev',
    // 'foo'
    'sass:dev',
  ]);
};
