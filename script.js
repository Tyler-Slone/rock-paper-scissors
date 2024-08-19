// Game variables and choice list
const choices = ["rock", "paper", "scissors"];

var computerScore = 0;
var humanScore = 0;

// Gets random choice from the computer
function getComputerChoice() {
  return choices[(Math.random() * choices.length) | 0];
}

// Gets choice from player
function getHumanChoice() {
  let humanChoice = prompt("Type: Rock, Paper, or Scissors").toLowerCase();
  if (choices.includes(humanChoice)) {
    return humanChoice;
  } else {
    console.log("Please enter a valid input");
    return getHumanChoice();
  }
}

// Determines who won the round and increments the score of the winner by 1
function roundWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie");
  }
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("Computer wins the round");
    computerScore++;
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You won the round");
    humanScore++;
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You won the round");
    humanScore++;
  }
  if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("Computer wins the round");
    computerScore++;
  }
  if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("Computer wins the round");
    computerScore++;
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You won the round");
    humanScore++;
  }
}

// Main gameplay functio
function gameLoop() {
  let rounds = 0;
  humanScore = 0;
  computerScore = 0;

  while (rounds < 5) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    roundWinner(humanSelection, computerSelection);
    rounds++;
    console.log(humanScore);
    console.log(computerScore);
  }

  if (humanScore > computerScore) {
    console.log("You Win!");
  }
  if (humanScore < computerScore) {
    console.log("Computer Wins!");
  } else {
    console.log("It's a Tie!");
  }
}

console.log(gameLoop());
