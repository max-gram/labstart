var ColorPicker = require('color-picker');
var hexrgb = require('hexrgb');
var $ = require('jquery');



var LandingPage = {
  init: function(){
    this.pickerHandler = this.pickerHandler.bind(this);
    this.getColors = this.getColors.bind(this);

    this.colorList = this.getColors();
    this.nc = require('nearest-color').from( this.colorList );

    var picker = new ColorPicker;
        picker.el.appendTo('.picker');
        picker.on('change', this.pickerHandler);
  },

  getColors: function(color){
    var colorList = {};
    $('.palette').each( function(){
      var bgc = $(this).css('background-color');
      colorList[this.innerHTML] = hexrgb.rgb2hex(bgc);
    } );

    return colorList;
  },

  pickerHandler: function(c){
    var hex = hexrgb.rgb2hex( c.toString() );
    $('.picker-view').css('background-color', hex);

    console.log('=================================');
    console.log('SELECTED --> ', hex );
    console.log('NEAREST --> ', this.nc(hex).name );
  }
};

module.exports = LandingPage;
