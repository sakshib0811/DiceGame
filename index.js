// 1st Player

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage1 = "images/dice"+randomNumber1+".png";
var imag1 = document.querySelectorAll("img")[0];
imag1.setAttribute("src",randomDiceImage1);

//2nd Player

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var imag2 = document.querySelectorAll("img")[1];
imag2.setAttribute("src",randomDiceImage2);


// who wins!!

//if 1st Player wins

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS!!";
}

else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS!!";
}

else{
  document.querySelector("h1").innerHTML="DRAW";
}
