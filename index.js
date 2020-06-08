//alert("Working!");
var randomNumber1 = Math.floor(Math.random()*6 ) +1;

var ramdomDice1 ="images/dice" + randomNumber1 +".png";

document.querySelector(".p1-dice").setAttribute("src", ramdomDice1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var ramdomDice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".p2-dice").setAttribute("src", ramdomDice2);

if(randomNumber1 > randomNumber2)
	document.querySelector("h1").innerHTML ="Player1 Wins";
else if(randomNumber1 < randomNumber2)
	document.querySelector("h1").innerHTML ="Player2 Wins";
else
	document.querySelector("h1").innerHTML ="Draw";
