var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "./images/dice" + randomNumber1 + ".png";

var input1 = document.querySelectorAll("img")[0];

input1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

var input2 = document.querySelectorAll("img")[1];

input2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
    var string = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    var string = "Player 2 Wins!";
}
else {
    var string = "Draw!";
}

document.querySelector("h1").innerHTML = string;