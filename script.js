const choices = ['rock', 'paper', 'scissors']
var computerChoice
var humanChoice
var humanScore = 0
var computerScore = 0


function getComputerChoice(){
   let computerChoice = choices[(Math.random() * choices.length) | 0]
   return computerChoice
}

function getHumanChoice(){
    let humanChoice = prompt('Type: Rock, Paper, or Scissors').toLowerCase();
    if (choices.includes(humanChoice)){
        console.log(humanChoice)
    }
    else {
        console.log('Please enter a valid input')
        getHumanChoice();
    }
}

function roundWinner() {
    if (humanChoice === computerChoice){
        console.log('Tie')
    }
    if (humanChoice === 'rock'  && computerChoice === 'paper'){
        console.log('Computer wins')
        computerScore++
    }
    if (humanChoice === 'rock'  && computerChoice === 'scissors'){
        console.log('Round won')
        humanScore++
    }
    if (humanChoice === 'paper'  && computerChoice === 'rock'){
        console.log('Round won')
        humanScore++
    }
    if (humanChoice === 'paper'  && computerChoice === 'scissors'){
        console.log('Computer wins')
        computerScore++
    }
    if (humanChoice === 'scissors'  && computerChoice === 'rock'){
        console.log('Computer wins')
        computerScore++
    }
    if (humanChoice === 'scissors'  && computerChoice === 'paper'){
        console.log('Round won')
        humanScore++
    }
}

function gameLoop(){
    let rounds = 0
    while (rounds < 5) {
        getComputerChoice()
        getHumanChoice()
        roundWinner()
        rounds++
    }

    if (humanScore > computerScore) {
        console.log('You Win!')
    } else {
        console.log('Computer Wins!')
    }
}


console.log(getHumanChoice())
console.log(getComputerChoice())
console.log(gameLoop())
console.log(humanScore)
console.log(computerScore)