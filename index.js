//jshint esversion: 6
//alert("You Clicked on Red!");green red, yellow, blue
let start = document.getElementsByTagName("button")[0];
let green = document.getElementsByTagName("button")[1];
let red = document.getElementsByTagName("button")[2];
let yellow = document.getElementsByTagName("button")[3];
let blue = document.getElementsByTagName("button")[4];

let greenSound = new Audio("../Simon/public/sounds/green.mp3");
let redSound = new Audio("../Simon/public/sounds/red.mp3");
let yellowSound = new Audio("../Simon/public/sounds/yellow.mp3");
let blueSound = new Audio("../Simon/public/sounds/blue.mp3");
let errorSound = new Audio("../Simon/public/sounds/wrong.mp3");
let isMatched = true;
let list = [];
let inc = 0;
let random = Math.floor(Math.random() * 4) + 1;
console.log(random);
function greenBtn(){
  inc++;
  greenSound.play();
  document.getElementById("heading1").firstElementChild.innerText = `Round ${inc}`;
}
function redBtn(){ redSound.play(); }
function yellowBtn(){ yellowSound.play(); }
function blueBtn(){ blueSound.play();}
function wrong(){ errorSound.play();}

green.addEventListener("click", greenBtn);
red.addEventListener("click", redBtn);
yellow.addEventListener("click", yellowBtn);
blue.addEventListener("click", blueBtn);
start.addEventListener("click", wrong);

// while (isMatched){
//
//
// }
