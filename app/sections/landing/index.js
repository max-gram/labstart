var Hammer = require('../../com/libs/hammer/hammer.js');

var LandingPage = {
  init: function(){
    this.setHammer();
  },

  setHammer: function(){
    var el = document.getElementById('hTest');

    var mc = new Hammer.Manager(el);
    var swipe = new Hammer.Swipe({threshold: 0, velocity: 0.1});
    mc.add([swipe]);

    mc.on('swipeleft swiperight swipeup swipedown', function(ev) {
      // alert(ev.type);
      console.log(ev.type);
    });
  },
};

module.exports = LandingPage;
