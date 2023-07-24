// Rock Paper Scissors

// Create a game of the classic, Rock Paper Scissors

// Computer will randomly generate one of Rock, Paper or Scissors

// Listen for button click
//button.addEventListener("click", updateButton);

const rps = ["rock", "paper", "scissors"];
const rock = 1, paper = 2, scissors = 3;

function getComputerChoice(){
    let computerSelection = rps[(Math.floor(Math.random() * rps.length))];
    console.log(computerSelection);
    return computerSelection;
}

function getUserChoice(){
    let userInputChoice = prompt('Choose \"rock\", \"paper\", or \"scissors\"').toLowerCase();
    console.log(userInputChoice);
    return userInputChoice
}

function determineWinner(playerSelection, computerSelection){
    if ((playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "scissors")) {
        console.log ("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Paper covers Rock, Computer wins!");
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("Rock smashes Scissors, you win!");
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Paper covers Rock, you win!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Scissors cuts Paper, Computer wins!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Rock smashes Scissors, Computer wins!");
    } else {
        console.log("Scissors cut Paper, you win!");
    }
}

let compMove = getComputerChoice();
let userMove = getUserChoice();
determineWinner(userMove, compMove);

// The User will input their choice



// Determine the the user wins, loses or ties

// Output the results to the user via console.log()