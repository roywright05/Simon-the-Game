//jshint esversion: 6

let game = document.querySelectorAll("button"); //an array
let blue = new Audio("../Simon/public/sounds/blue.mp3");
let yellow = new Audio("../Simon/public/sounds/yellow.mp3");
let red = new Audio("../Simon/public/sounds/red.mp3");
let green = new Audio("../Simon/public/sounds/green.mp3");
const playBtns = [green, red, yellow, blue];
function getRandomNum(){
  return Math.floor((Math.random() * 4) + 1);
}
//console.log(getRandomNum());
function startGame(){
  game[0].classList.add("hide");
  let val = getRandomNum(); //first number selected

    game[val].classList.add("selected");//change to a temp flash
    playBtns[val-1].play();
  console.log(game[val].name);
  setTimeout(()=>{
    game[val].classList.remove("selected");
  }, 500); //remove classList

  let isEqual = true;
  // while(isEqual){
  //
  //
  // }

}
function timeout(){ setTimeout(startGame, 500 );}
function alerting(){
    blue.play();
    game[1].classList.remove("btn1");
    game[1].classList.add("btnChange");
  }
function logging(){console.log("Naw son!");}
for(let i = 0; i<game.length; i++){

  switch(i){
    case 0:
      game[i].addEventListener("click", timeout);
      break;
    case 1:
      game[i].addEventListener("click", alerting);
      break;
    case 2:
      game[i].addEventListener("click", alerting);
      break;
    case 3:
      game[i].addEventListener("click", alerting);
      break;
    case 4:
      game[i].addEventListener("click", alerting);
      break;
    default:
    console.log("This ain't it bud.");
  }
}

// game.forEach(btn =>{
//   btn.addEventListener("click", ()=>{
//     errorSound.play();
//     alert("I got clicked");
//     //console.log(btn.indexOf());
//   });
// });

// let start = document.querySelectorAll("button")[0];
// let green = document.querySelectorAll("button")[1];
//
// let red = document.querySelectorAll("button")[2];
// let yellow = document.querySelectorAll("button")[3];
// let blue = document.querySelectorAll("button")[4];

//console.log(btns);
// let greenSound = new Audio("../Simon/public/sounds/green.mp3");
// let redSound = new Audio("../Simon/public/sounds/red.mp3");
// let yellowSound = new Audio("../Simon/public/sounds/yellow.mp3");
// let blueSound = new Audio("../Simon/public/sounds/blue.mp3");
// let errorSound = new Audio("../Simon/public/sounds/wrong.mp3");
// let gameStarted = false;
// const list = [];
// let inc = 0;
//
// function randomGenerator() {
//   random = Math.floor(Math.random() * 4) + 1;
//   return random;
// }
// let random = randomGenerator();
//
// //console.log(btns[random].setAttribute("style", "background-color: magenta"));
// function greenBtn(){
//   greenSound.play();
//   inc++;
//   document.getElementById("heading1").firstElementChild.innerText = `Round ${inc}`;
//   //green.classList.add();
// }
// function redBtn(){
//   redSound.play();
//   inc++;
//   document.getElementById("heading1").firstElementChild.innerText = `Round ${inc}`;
// }
// function yellowBtn(){
//    yellowSound.play();
//    inc++;
//    document.getElementById("heading1").firstElementChild.innerText = `Round ${inc}`;
//  }
// function blueBtn(){
//   blueSound.play();
//   inc++;
//   document.getElementById("heading1").firstElementChild.innerText = `Round ${inc}`;
// }
// function wrong(){
//   errorSound.play();
//
//   document.getElementById("heading1").firstElementChild.innerText = "Game Over";
// }
//
// function startGame(){
//   inc++;
//   start.style.visibility = "hidden";
//   document.getElementById("heading1").firstElementChild.innerText = `Round 1`;
//
//   isMatched = true;
// }
//
// green.addEventListener("click", greenBtn);
// red.addEventListener("click", redBtn);
// yellow.addEventListener("click", yellowBtn);
// blue.addEventListener("click", ()=>{
//
//   blueSound.play();
// });
// start.addEventListener("click", startGame);
// //start while loop
// random = randomGenerator();
// console.log(random);
//


// if(){
//
// }
//End the while loop
