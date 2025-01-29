let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber)


function checkGuess(){
  let gessNumber = parseInt(userInputElement.value);
  if(gessNumber > randomNumber){
    gameResultElement.style.background = "blue";
    gameResultElement.style.color = "white";
    gameResultElement.textContent = "Too High! Try Gain";
  }
  else if(gessNumber < randomNumber){
    gameResultElement.style.background = "yellow";
    gameResultElement.style.color = "black";
    gameResultElement.textContent = "Too Low! Try Gain";
  }
  else if(gessNumber === randomNumber){
    gameResultElement.style.background = "green";
    gameResultElement.style.color = "white";
    gameResultElement.textContent = "Congratulations! You got it right";
  }
  else{
    gameResultElement.style.background = "red";
    gameResultElement.style.color = "white";
    gameResultElement.textContent = "Please provide a valid input.";
  }
}