define(['swiper'], function (swiper) {
  // console.log('Landing file load');

  var landing = {
    init: function(){
      console.log('Landing Page Init');
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
      });
    },

  };

  return landing;
});
