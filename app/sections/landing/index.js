var Swiper = require('../../com/libs/swiper/swiper.js');

var LandingPage = {
  init: function(){
    this.setSwiper();
  },

  setSwiper: function(){
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: '.swiper-pagination',

      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',

      // And if we need scrollbar
      // scrollbar: '.swiper-scrollbar',
    });
  }
};

module.exports = LandingPage;
