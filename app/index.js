'use strict';
var domready = require('detect-dom-ready');
var LandingP = require('./sections/landing');

domready(function() {
  console.log('APP INITIALIZED');
  LandingP.init();
});
