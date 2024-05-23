const choices = ['rock', 'paper', 'scissors']

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

console.log(getComputerChoice())
console.log(getHumanChoice())