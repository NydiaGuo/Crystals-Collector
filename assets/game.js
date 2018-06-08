
var winsPoints = 0;
var lossesPionts = 0;
var counter = 0;
var targetNumber = 0;

//when click on each images will pass a value on it
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#total-score").html(counter);
    console.log("crystal value: ", crystalValue);

    // All of the same game win-lose logic applies.
    if (counter === targetNumber) {
      winsPoints++;
      $("#wins").html(winsPoints);
      reset();

    }
    else if (counter >= targetNumber) {
      lossesPionts++;
      $("#losses").html(lossesPionts);
      reset();
    }

  });

  
  //reset the game after the player wins or losses
  function reset() {
      counter = 0;  
      targetNumber = Math.floor(Math.random() * 100) + 19;
      $("#number-to-guess").text(targetNumber);
      $("#total-score").html(counter);
      console.log("number to guess: ", targetNumber);
      console.log("total score: ", counter);
    
      var images = $(".crystal-image");

      //  use a for loop to iterate through the images
      for (i = 0; i < images.length; i++) {
        $(images[i]).attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
      }
  
    }

//call the reset
  reset();
