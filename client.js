$(document).ready(function(){
  console.log('jQuery is ready to go!');
  var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine'] // colors to use later

  // loops through all of the colors
  for (var i = 0; i < colorArray.length; i++) {
    colorArray[i]

    // adding a new block
    var newColorBlock = $('<div>');
    newColorBlock.css('background-color', colorArray[i]);
    newColorBlock.addClass('colorBlock');
    $('.colorBlockContainer').append(newColorBlock);

  }
  
});
