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

  if (playerChoice == "rock") {
    if (computerChoice == "Rock") {
      WinOrLose = "The game is a draw";
    } else if (computerChoice == "Paper") {
      WinOrLose = "Paper Beats Rock, You lose, sorry loser.";
      cpuScore++;
    } else if (computerChoice == "Scissors") {
      WinOrLose = "Rock Beats Scissors, You WIN!!!";
      playerScore++;
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "Rock") {
      WinOrLose = "Paper Beats Rock, You WIN!!";
      playerScore++;
    } else if (computerChoice == "Paper") {
      WinOrLose = "The Game is a Draw";
    } else if (computerChoice == "Scissors") {
      WinOrLose = "Scissors cut Paper, You lose, sorry loser.";
      cpuScore++;
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "Rock") {
      WinOrLose = "Rock Beats Paper, You lose, sorry loser";
      cpuScore++;
    } else if (computerChoice == "Paper") {
      WinOrLose = "Scissors beats Paper, You WIN!!";
      playerScore++;
    } else if (computerChoice == "Scissors") {
      WinOrLose = "This game is a draw";
    }
  }

  // test point: console.log(WinOrLose);
  //test point: console.log(WinOrLose);

  return WinOrLose;
}

function game() {
  //This call is to make sure if numbers are randomizing correctly.
  //test point: console.log(computerPlay());

  //this is where we start
  //let playerChoice = "Rock"; //bug i had here. I had spelled "rock", which was not equal to what i had wrote in the function.

  let userInput = prompt("Rock, Paper, Scissors?");
  let playerChoice = userInput.toLowerCase();
  let computerChoice = computerPlay();

  let gameOutCome = playRound(playerChoice, computerChoice);

  //test point: console.log(gameOutCome);

  console.log(
    `The player choice was ${playerChoice} and CPU was ${computerChoice}. ${gameOutCome}`
  );
  console.log(
    "The current score is, Player score: " +
      playerScore +
      " CPU Score: " +
      cpuScore +
      " "
  );
  //to do case-insentive we do something like str1.toLowerCase() === str2.toLowerCase();
}

//global Variables needed to get track of score
let playerScore = 0;
let cpuScore = 0;

game();
game();
game();
game();
game();

console.log(`The end game score is Player: ${playerScore} CPU: ${cpuScore}`);

if (playerScore > cpuScore) {
  console.log("YOU WIN!!!");
} else if (playerScore === cpuScore) {
  console.log("THE GAME IS A TIE!!!");
} else {
  console.log("Better luck next time, loser.");
}
