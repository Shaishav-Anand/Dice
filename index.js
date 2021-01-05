

var random = Math.random() * 6 + 1;
var randomNumber = Math.round(random);
var randomDiceImage = "images/" + "dice" + randomNumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceimage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDiceimage2);

if (randomNumber2 > randomNumber) {
  document.querySelector("h1").innerText = "Player 2 is Winner";
} else if (randomNumber2 < randomNumber) {
  document.querySelector("h1").innerText = "Player 1 is Winner";
} else {
  document.querySelector("h1").innerText = "Draw";
}
