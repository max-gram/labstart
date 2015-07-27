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
        files: [
          {expand: false, src: ['<%= config.src %>/index.html'], dest: '<%= config.dev %>/index.html', filter: 'isFile'},
          {expand: false, src: ['<%= config.src %>/com/libs/require.js'], dest: '<%= config.dev %>/js/require.js', filter: 'isFile'},
        ]
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
          'hostname': '<%= config.server %>',
          'keepalive': true
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: '.',
          appDir: './app',
          dir: './.tmp',
          mainConfigFile: './app/index.js',
          optimize: 'uglify',
          preserveLicenseComments: true,
          useStrict: true,
          removeCombined: true
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      'less': {
        'files': ['<%= config.src %>/**/*.less'],
        'tasks': ['less:dev']
      },
    },
  // CONFIG END
  });

  grunt.registerTask('default',[
    'clean:dev',
    'requirejs',
    'newer:less:dev',
    'connect',
  ]);
};
