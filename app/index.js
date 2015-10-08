requirejs.config({
  baseUrl: '',

  paths: {
    'requirejs': './com/libs/require',
    'swiper': './com/libs/swiper/swiper',
    'landing': './sections/landing/index',
    'page': './sections/landing/page',
  },

  modules: [{
    name: 'index',
    exclude: ['swiper'],
    include: ['requirejs']
  }],
});

require(['landing'], function (landing) {
  'use strict';

  console.log('APP INITIALIZED');

  landing.init();
});
