var ScrollMagic = require('scrollmagic');
var smPluginTween = require('../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
var smPluginTween = require('../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js');
console.log(this.cwd)
var TweenMax = require('gsap');

var LandingPage = {
  init: function(){
    this.setParallax();
  },

  setParallax: function(){
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#screen2"})
    .setTween("#screen2", {y: "-90%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#screen3"})
    .setTween("#screen3", {y: "-180px", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#screen4"})
    .setTween("#screen4", {y: "-60%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#screen5"})
    .setTween("#screen5", {y: "-30%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);
  }
};

module.exports = LandingPage;
