//test point: console.log("hello");

//We are making a function that will return 1 to 3 at random
//The function will return out ramdom number from 1 to 3
//In which each number will represent Rock Paper Sccisors
// 1 is Rock
// 2 is Paper
// 3 is Sccisors
function computerPlay() {
  let computerRand = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  if (computerRand === 1) {
    computerChoice = "Rock";
  } else if (computerRand === 2) {
    computerChoice = "Paper";
  } else if (computerRand === 3) {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  let WinOrLose = "sub";
  //rock > scissors
  //paper > rock
  //scissors > paper
  //anything else is draw

  //We will use playerChoice and compare it to computerChoices
  // and create a series of nested branches.

  if (playerChoice == "Rock") {
    if (computerChoice == "Rock") {
      WinOrLose = "The game is a draw";
    } else if (computerChoice == "Paper") {
      WinOrLose = "Paper Beats Rock, You lose, sorry loser.";
    } else if (computerChoice == "Scissors") {
      WinOrLose = "Rock Beats Scissors, You WIN!!!";
    }
  } else if (playerChoice == "Paper") {
    if (computerChoice == "Rock") {
      WinOrLose = "Paper Beats Rock, You WIN!!";
    } else if (computerChoice == "Paper") {
      WinOrLose = "The Game is a Draw";
    } else if (computerChoice == "Scissors") {
      WinOrLose = "Scissors cut Paper, You lose, sorry loser.";
    }
  } else if (playerChoice == "Scissors") {
    if (computerChoice == "Rock") {
      WinOrLose = "Rock Beats Paper, You lose, sorry loser";
    } else if (computerChoice == "Paper") {
      WinOrLose = "Scissors beats Paper, You WIN!!";
    } else if (computerChoice == "Scissors") {
      WinOrLose = "This game is a draw";
    }
  }

  // test point: console.log(WinOrLose);
  //test point: console.log(WinOrLose);

  return WinOrLose;
}

//This call is to make sure if numbers are randomizing correctly.
//test point: console.log(computerPlay());

//this is where we start
let playerChoice = "Rock"; //bug i had here. I had spelled "rock", which was not equal to what i had wrote in the function.
let computerChoice = computerPlay();

let gameOutCome = playRound(playerChoice, computerChoice);

//test point: console.log(gameOutCome);

console.log(
  `The player choice was ${playerChoice} and CPU was ${computerChoice}. ${gameOutCome}`
);
