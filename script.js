const choices = ['rock', 'paper', 'scissors']
const humanScore = 0
const computerScore = 0

function getComputerChoice(){
   randomChoice = choices[(Math.random() * choices.length) | 0]
   return randomChoice
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

console.log(getComputerChoice())
console.log(getHumanChoice())