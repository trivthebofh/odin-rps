// Rock Paper Scissors

// Create a game of the classic, Rock Paper Scissors

// Computer will randomly generate one of Rock, Paper or Scissors

const rps = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let compChoice = rps[(Math.floor(Math.random() * rps.length))];
    console.log(compChoice);
    return compChoice;
}

function getUserChoice(){
    
}

let compMove = getComputerChoice();
let userMove = getUserChoice();

// The User will input their choice



// Determine the the user wins, loses or ties

// Output the results to the user via console.log()