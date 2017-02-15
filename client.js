$(document).ready(function(){
  console.log('jQuery is ready to go!');
  var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine'] // colors to use later

  // loops through all of the colors
  for (var i = 0; i < colorArray.length; i++) {


    // adding a new block
    var newColorBlock = $('<div>');
    newColorBlock.css('background-color', colorArray[i]);
    newColorBlock.addClass('colorBlock');
    $('#colorBlockContainer').append(newColorBlock);

  }

  // Select a random color and add it to the DOM
  var randomNumberSelected  = randomNumber(0, colorArray.length-1); // get random number 1-4
  var randomColor = colorArray[randomNumberSelected]; // uses random number to pick a color
  $('#userColorPrompt').text(randomColor);
});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
