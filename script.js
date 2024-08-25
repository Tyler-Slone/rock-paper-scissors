// Game variables and selectors
const choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let userScore = 0;

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

const userDisplayScore = document.querySelector("#userDisplayScore");
const computerDisplayScore = document.querySelector("#computerDisplayScore");
const displayWinner = document.querySelector("#displayWinner");

// Get random choice from computer
function getComputerChoice() {
  const randomChoice = choices[(Math.random() * choices.length) | 0];
  return randomChoice;
}

// Round win
function win() {
  userScore++;
  userDisplayScore.textContent = userScore;
  displayWinner.textContent = "ROUND WON";
  console.log("Round won");
  checkGameWinner();
}

// Round lose
function lose() {
  computerScore++;
  computerDisplayScore.textContent = computerScore;
  displayWinner.textContent = "ROUND LOST";
  console.log("Round lost");
  checkGameWinner();
}

// Round tie
function tie() {
  displayWinner.textContent = "TIE";
  console.log("Tie");
}

// Determine round winner
function roundWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    tie();
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    win();
  } else {
    lose();
  }
}

// Check if either player has won the game
function checkGameWinner() {
  if (userScore === 5) {
    displayWinner.textContent = "YOU WIN THE GAME!";
    disableButtons();
  } else if (computerScore === 5) {
    displayWinner.textContent = "COMPUTER WINS THE GAME!";
    disableButtons();
  }
}

// Disable buttons after game is won
function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

// Play a round of RPS and log choices in the console
function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("User: " + userChoice);
  console.log("Computer: " + computerChoice);
  roundWinner(userChoice, computerChoice);
}

// Runs a round setting user choice to button clicked
rockButton.addEventListener("click", () => {
  playRound("rock");
});

paperButton.addEventListener("click", () => {
  playRound("paper");
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors");
});
