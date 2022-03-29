var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSourcen = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSourcen);






document.querySelector("h1").innerHTML = "Player 2 Wins!";
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSourcen2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSourcen2);

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
