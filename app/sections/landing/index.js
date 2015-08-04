var Swiper = require('../../com/libs/swiper/swiper.js');

var LandingPage = {
  init: function(){
    this.setSwiper();
  },

  setSwiper: function(){
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });
  }
};

module.exports = LandingPage;
