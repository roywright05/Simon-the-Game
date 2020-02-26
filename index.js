//jshint esversion: 6

let game = document.querySelectorAll("button"); //an array
let blue = new Audio("../Simon/public/sounds/blue.mp3");
let yellow = new Audio("../Simon/public/sounds/yellow.mp3");
let red = new Audio("../Simon/public/sounds/red.mp3");
let green = new Audio("../Simon/public/sounds/green.mp3");
let wrong = new Audio("../Simon/public/sounds/wrong.mp3");
let title = document.querySelector("h1");
let gameScreen = document.querySelector("html");
let inc = 0;
let val = 0;
let isMatched = true;
const playBtns = [green, red, yellow, blue];
let btnValues = [];
let gamePattern = [];
let playerPattern = [];
function getRandomNum(){
  return Math.floor((Math.random() * 4) + 1);
}
function checkAll(){
  var patternMatch = true;
  /*
  return a boolean
  just check the entire pattern matches
  check up to length of playerPattern
  pass function inside a while loop
on click -- if checkAll returns false -- trigger game over and resetGame
else if last value is ==  and  play pattern < game pattern
    --trigger nothing and let them continue
    else (both are full and all match) -- trigger another button, reset playerPattern
  it's not going to play a new button until
  playerPattern.lenth = gamePattern.length and all values are equal
  if one value isn't equal, reset everything and alert("Click to try again");
  */
  //Test gP = 4  pP = 1

    for(var i=playerPattern.length-1; i<playerPattern.length; i++){
        if(playerPattern[i] !== gamePattern[i]){
          patternMatch = false;
          return patternMatch;
        }
    }

  return patternMatch;

}
function endGame(){
  wrong.play();
  gameScreen.classList.add("selected");
  setTimeout(()=>{gameScreen.classList.remove("selected")}, 1000);
  title.innerText = "Game Over 🎮";
  setTimeout(alert(`Your score: ${inc*1000}\n Play again?`), 1000);
  gamePattern = [];
  playerPattern = [];
  inc = 0;
  game[0].classList.remove("hide");
}

function greenPlay(){
  green.play();
  game[1].classList.add("selected");
  setTimeout(()=>{game[1].classList.remove("selected");}, 500);
  playerPattern.push(game[1].name);
  console.log(`player pattern: ${playerPattern}`);
  console.log(`game pattern: ${gamePattern}`);

  /*button pressed: create separate fun, pass to each play function
  -while with boolean match checker
  -check if pattern is equal for/foreach loop
  -reset game once out of for loop
  -the prompt button only triggers once per round
  --gamePattern = [red, green]
  */
  if(!checkAll()){
    endGame();
  }else if(playerPattern.length < gamePattern.length){
    checkAll();
  }
  else{
    playerPattern = [];
    setTimeout(playGame, 750);
  }
}
function redPlay(){
  red.play();
  game[2].classList.add("selected");
  setTimeout(()=>{game[2].classList.remove("selected");}, 750);
  playerPattern.push(game[2].name);
  console.log(`player pattern: ${playerPattern}`);
  console.log(`game pattern: ${gamePattern}`);

  if(!checkAll()){
    endGame();
  }else if(playerPattern.length < gamePattern.length){
    checkAll();
  }
  else{
    playerPattern = [];
    setTimeout(playGame, 750);
  }
}
function yellowPlay(){
  yellow.play();
  game[3].classList.add("selected");
  setTimeout(()=>{game[3].classList.remove("selected");}, 750);
  playerPattern.push(game[3].name);
  console.log(`player pattern: ${playerPattern}`);
  console.log(`game pattern: ${gamePattern}`);

  if(!checkAll()){
    endGame();
  }else if(playerPattern.length < gamePattern.length){
    checkAll();
  }
  else{
    playerPattern = [];
    setTimeout(playGame, 750);
  }
}
function bluePlay(){
  blue.play();
  game[4].classList.add("selected");
  setTimeout(()=>{game[4].classList.remove("selected");}, 750);
  playerPattern.push(game[4].name);
  console.log(`player pattern: ${playerPattern}`);
  console.log(`game pattern: ${gamePattern}`);

  if(!checkAll()){
    endGame();
  }else if(playerPattern.length < gamePattern.length){
    checkAll();
  }
  else{
    playerPattern = [];
    setTimeout(playGame, 750);
  }
}

function playGame(){
//call this everytime

    title.innerText = `Level ${++inc}`;

    val = getRandomNum(); //first number selected
    btnValues.push(val);
    game[val].classList.add("selected");//change to a temp flash
    playBtns[val-1].play();
    console.log(game[val].name);
    setTimeout(()=>{
      game[val].classList.remove("selected");
    }, 750); //remove classList

    gamePattern.push(game[val].name);
}
function startGame(){//start game button triggers this function
  game[0].classList.add("hide");
  setTimeout(playGame, 500);
}

function resetGame(){
  title.innerText = "Play Again";
  game[0].classList.remove("hide");
  gamePattern = [];
  playerPattern = [];
}


for(let i = 0; i<game.length; i++){

  switch(i){
    case 0:
      game[i].addEventListener("click", startGame);
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
