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
      // server: '10.3.1.41',
      port: 9000,
    },

    licensechecker: {
      options: {
        'warn': true,
        'outFile': null,
        'acceptable': [
          'MIT',
          'MIT/X11',
          'BSD',
          'ISC',
          'BSD-3'
        ],
        'include': [
          'dependencies',
          'devDependencies',
          'peerDependencies'
        ]
      }
    },

    clean: {
      dev: ['<%= config.dev %>'],
      dist: ['<%= config.dist %>']
    },

    copy:{
      dev:{
        'src': '<%= config.src %>/index.html',
        'dest': '<%= config.dev %>/index.html',
        'filter': 'isFile'
      },

      dist:{
        'src': '<%= config.src %>/index.html',
        'dest': '<%= config.dist %>/index.html',
        'filter': 'isFile'
      }
    },

    less: {
      dev: {
        'options': {
          'plugins' : [ new (require('less-plugin-autoprefix'))({browsers : [ "last 2 versions" ]}) ],
          'compress': true,
          'cleancss': false,
          'sourceMap': true,
          'sourceMapFilename': '<%= config.dev %>/css/main.css.map',
          'sourceMapURL': 'main.css.map',
          'sourceMapBasepath': '<%= config.dev %>',
          'sourceMapRootpath': '/'
        },
        'files': {
          '<%= config.dev %>/css/main.css': '<%= config.src %>/com/less/main.less'
        },
      },
      dist: {
        'options': {
          'plugins' : [ new (require('less-plugin-autoprefix'))({browsers : [ "last 2 versions" ]}) ],
          'compress': true,
          'cleancss': true,
        },
        'files': {
          '<%= config.dist %>/css/main.css': '<%= config.src %>/com/less/main.less'
        }
      }
    },

    connect: {
      devServer: {
        'options': {
          'base': '<%= config.dev %>/',
          'port': '<%= config.port %>',
          'hostname': '<%= config.server %>'
        }
      }
    },

    browserify: {
      dev: {
        'src': '<%= config.src %>/index.js',
        'dest': '<%= config.dev %>/js/bundle.js',
        'options': {
          'debug': true,
          'watch': true,
          'verbose': true,
          'open': true,
          'browserifyOptions': {
            'debug': true
          }
        }
      },
      dist: {
        'src': '<%= config.src %>/index.js',
        'dest': '<%= config.dist %>/js/bundle.js',
        'options': {
          'debug': false,
          'verbose': false
        }
      }
    },

    // jshint: {
    // TODO: ADD BROWSERIFY Compability
    //   all: {
    //     'src': '<%= config.src %>/**/*.js'
    //   }
    // },

    watch: {
      options: {
        livereload: true
      },
      'less': {
        'files': ['<%= config.src %>/**/*.less'],
        'tasks': ['less:dev']
      },
      'browserify': {
        'files': [
          '<%= config.src %>/**/*.js',
          '*.js'
        ],
        // 'tasks': ['newer:jshint:all','browserify:dev']
        'tasks': ['browserify:dev']
      }
    },
  // CONFIG END
  });

  grunt.registerTask('default',[
    'check-modules',
    'licensechecker',
    'clean:dev',
    'copy:dev',
    'newer:less:dev',
    'newer:browserify:dev',
    'connect',
    'watch'
  ]);
};
