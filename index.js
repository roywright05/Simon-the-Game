//jshint esversion: 6

let game = document.querySelectorAll("button"); //an array
let blue = new Audio("../Simon/public/sounds/blue.mp3");
let yellow = new Audio("../Simon/public/sounds/yellow.mp3");
let red = new Audio("../Simon/public/sounds/red.mp3");
let green = new Audio("../Simon/public/sounds/green.mp3");
const playBtns = [green, red, yellow, blue];
let gamePattern = [];
let playerPattern = [];
function getRandomNum(){
  return Math.floor((Math.random() * 4) + 1);
}
//console.log(getRandomNum());

function greenPlay(){
  green.play();
  game[1].classList.add("selected");
  setTimeout(()=>{game[1].classList.remove("selected");}, 500);
  playerPattern.push(game[1].name);
  console.log(playerPattern);
}
function redPlay(){
  red.play();
  game[2].classList.add("selected");
  setTimeout(()=>{game[2].classList.remove("selected");}, 500);
  playerPattern.push(game[2].name);
  console.log(playerPattern);
}
function yellowPlay(){
  yellow.play();
  game[3].classList.add("selected");
  setTimeout(()=>{game[3].classList.remove("selected");}, 500);
  playerPattern.push(game[3].name);
  console.log(playerPattern);
}
function bluePlay(){
  blue.play();
  game[4].classList.add("selected");
  setTimeout(()=>{game[4].classList.remove("selected");}, 500);
  playerPattern.push(game[4].name);
  console.log(playerPattern);
}

function startGame(){

  let val = getRandomNum(); //first number selected

    game[val].classList.add("selected");//change to a temp flash
    playBtns[val-1].play();
  console.log(game[val].name);
  setTimeout(()=>{
    game[val].classList.remove("selected");
  }, 500); //remove classList

    gamePattern.push(game[val]);
    //console.log(game[val].name);

}
function timeout(){
  game[0].classList.add("hide");
  setTimeout(startGame, 500 );
}

function alerting(){
    blue.play();
    game[1].classList.remove("btn1");
    game[1].classList.add("btnChange");
  }

for(let i = 0; i<game.length; i++){

  switch(i){
    case 0:
      game[i].addEventListener("click", timeout);
      break;
    case 1: //green
      game[i].addEventListener("click", greenPlay);
      break;
    case 2: //red
      game[i].addEventListener("click", redPlay);
      break;
    case 3: //yellow
      game[i].addEventListener("click", yellowPlay);
      break;
    case 4: //blue
      game[i].addEventListener("click", bluePlay);
      break;
    default:
    console.log("This ain't it bud.");
  }
}
