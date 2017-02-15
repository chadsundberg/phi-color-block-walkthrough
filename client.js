var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine'] // colors to use later
var randomColor = '';

$(document).ready(function(){
  console.log('jQuery is ready to go!');


  // loops through all of the colors
  for (var i = 0; i < colorArray.length; i++) {


    // adding a new block
    var newColorBlock = $('<div>');
    newColorBlock.css('background-color', colorArray[i]);
    newColorBlock.addClass('colorBlock');
    newColorBlock.data('colorOfBlock', colorArray[i]);
    $('#colorBlockContainer').append(newColorBlock);

  }

  $('#colorBlockContainer').on('click', '.colorBlock', function(){ // event listener listening for clicks on colorBlockContainer and if it was a colorBlock, then execute code
    // console.log('colorBlock was clicked');
    // console.log('$(this) : ', $(this));
    // console.log('$(this).data() : ', $(this).data());
    console.log('$(this).data().colorOfBlock : ', $(this).data().colorOfBlock);
    var colorOfBlockSelected = $(this).data().colorOfBlock;
    if (randomColor == colorOfBlockSelected) {
      console.log('they got it');
      $('#responseSection').text('You got it!');
      chooseNewRandomColor();
    } else {
      $('#responseSection').text('Oh no.. that is not right');
    }

  });

chooseNewRandomColor();

});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function chooseNewRandomColor(){
  // Select a random color and add it to the DOM
  var randomNumberSelected  = randomNumber(0, colorArray.length-1); // get random number 1-4
  randomColor = colorArray[randomNumberSelected]; // uses random number to pick a color
  $('#userColorPrompt').text(randomColor);

}
