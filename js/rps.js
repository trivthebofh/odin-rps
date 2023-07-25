// Rock Paper Scissors

// Create a game of the classic, Rock Paper Scissors

// Computer will randomly generate one of Rock, Paper or Scissors

// Listen for button click
//button.addEventListener("click", updateButton);

const rps = ["rock", "paper", "scissors"];
const rock = 1, paper = 2, scissors = 3;

let userWins = 0, compWins = 0;

function getComputerChoice(){
    let computerSelection = rps[(Math.floor(Math.random() * rps.length))];
    //console.log(computerSelection);
    return computerSelection;
}

function getUserChoice(){
    let userInputChoice = prompt('Choose \"rock\", \"paper\", or \"scissors\"').toLowerCase();
    //console.log(userInputChoice);
    return userInputChoice
}

function determineWinner(playerSelection, computerSelection){
    if ((playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "scissors")) {
        roundResult = "It's a tie!";
        //console.log (roundResult);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult = "Paper covers Rock, Computer wins!";
        compWins++;
        //console.log("Paper covers Rock, Computer wins!");
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        roundResult = "Rock smashes Scissors, you win!";
        userWins++;
        //console.log("Rock smashes Scissors, you win!");
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResult = "Paper covers Rock, you win!";
        userWins++;
        //console.log("Paper covers Rock, you win!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = "Scissors cuts Paper, Computer wins!";
        compWins++;
        //console.log("Scissors cuts Paper, Computer wins!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "Rock smashes Scissors, Computer wins!";
        compWins++;
        //console.log("Rock smashes Scissors, Computer wins!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = "Scissors cut Paper, you win!";
        userWins++;
        //console.log("Scissors cut Paper, you win!");
    } else {
        roundResult = "Error: Something went wrong!"
        //console.log("Error: Something went wrong!");
    }

    return roundResult;
}

function game() {
    let i = 0;
    while (i < 5) {
        console.log("Round " + (i + 1)  + "!");
        let compMove = getComputerChoice();
        let userMove = getUserChoice();
        console.log(determineWinner(userMove,compMove));
        i++;
    }

    if (userWins > compWins) {
        console.log("The user wins this game " + userWins + " to " + compWins + "!");
    } else if (userWins < compWins) {
        console.log("Sorry, the computer wins this game " + compWins + " to " + userWins + "!");
    } else if (userWins == compWins) {
        console.log("This game ended in a tie, " + userWins + " to " + compWins + "!");
    }
    
}

game();

// let compMove = getComputerChoice();
// let userMove = getUserChoice();
// console.log(determineWinner(userMove,compMove));

// The User will input their choice



// Determine the the user wins, loses or ties

// Output the results to the user via console.log()