//jshint esversion: 6

let game = document.querySelectorAll("button"); //an array
let blue = new Audio("../Simon/public/sounds/blue.mp3");
let yellow = new Audio("../Simon/public/sounds/yellow.mp3");
let red = new Audio("../Simon/public/sounds/red.mp3");
let green = new Audio("../Simon/public/sounds/green.mp3");
let wrong = new Audio("../Simon/public/sounds/wrong.mp3");
let inc = 0;
let patternMatch = true;
const playBtns = [green, red, yellow, blue];
let btnValues = [];
let gamePattern = [];
let playerPattern = [];
function getRandomNum(){
  return Math.floor((Math.random() * 4) + 1);
}
function checkAll(){
  //create a checkAll method!
    for(var i=0; i<playerPattern.length; i++){
      if(gamePattern[i] !== playerPattern[i]){
        document.querySelector("html").classList.add("selected");
        wrong.play();
        gamePattern = [];
        playerPattern = [];
        game[0].classList.remove("hide");
      }
    }//After it checks all and they match, empty playerPattern play again

    playGame();

}

function greenPlay(){
  green.play();
  game[1].classList.add("selected");
  setTimeout(()=>{game[1].classList.remove("selected");}, 500);
  playerPattern.push(game[1].name);
  console.log(playerPattern);
  console.log(gamePattern);

  /*button pressed: create separate fun, pass to each play function
  -while with boolean match checker
  -check if pattern is equal for/foreach loop
  -reset game once out of for loop
  -the prompt button only triggers once per round
  --gamePattern = [red, green]
  */
  checkAll();



  // if(playerPattern[inc] === gamePattern[inc]){
  //   alert("You got it son!");
  // }else{
  //   alert("But you're wrong...");
  // }
}
function redPlay(){
  red.play();
  game[2].classList.add("selected");
  setTimeout(()=>{game[2].classList.remove("selected");}, 500);
  playerPattern.push(game[2].name);
  console.log(playerPattern);
  console.log(gamePattern);
  checkAll();
  // if(playerPattern[inc] === gamePattern[inc]){
  //   startGame();
  //   inc++;
  // }else{
  //     wrong.play();
  // }
}
function yellowPlay(){
  yellow.play();
  game[3].classList.add("selected");
  setTimeout(()=>{game[3].classList.remove("selected");}, 500);
  playerPattern.push(game[3].name);
  console.log(playerPattern);
  console.log(gamePattern);
  checkAll();
  // if(playerPattern[inc] === gamePattern[inc]){
  //   alert("You got it son!");
  // }else{
  //   alert("But you're wrong...");
  // }
}
function bluePlay(){
  blue.play();
  game[4].classList.add("selected");
  setTimeout(()=>{game[4].classList.remove("selected");}, 500);
  playerPattern.push(game[4].name);
  console.log(playerPattern);
  console.log(gamePattern);

  checkAll();
  // if(playerPattern[inc] === gamePattern[inc]){
  //   alert("You got it son!");
  // }else{
  //   alert("But you're wrong...");
  // }
}

function playGame(){
//call this everytime
    let val = getRandomNum(); //first number selected
    btnValues.push(val);
    game[val].classList.add("selected");//change to a temp flash
    playBtns[val-1].play();
    console.log(game[val].name);
    setTimeout(()=>{
      game[val].classList.remove("selected");
    }, 500); //remove classList

    gamePattern.push(game[val].name);
}
function startGame(){//start game button triggers this function
  game[0].classList.add("hide");
  setTimeout(playGame, 500 );
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
