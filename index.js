var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNum1 + ".png";

var firstDiceSelector = document.querySelectorAll("img")[0];

firstDiceSelector.setAttribute("src", randomDiceImage1);



var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNum2 + ".png";

var secondDiceSelector = document.querySelectorAll("img")[1];

secondDiceSelector.setAttribute("src", randomDiceImage2);


if (randomNum1 > randomNum2) {
  var title = document.querySelector("h1");
  title.textContent = "Player 1 has won!"
}
else if (randomNum1 < randomNum2){
  var title = document.querySelector("h1");
  title.textContent = "Player 2 has won!"
}
else {
  var title = document.querySelector("h1");
  title.textContent = "The game has drawn!"
}
