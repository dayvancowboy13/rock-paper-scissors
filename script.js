
playGame();

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;
    //const numberRounds = 5;
    let winner;

    const resultsContainer = document.querySelector(".results");

    const determineWinner = function(humanChoice) {
        winner = playRound(getComputerChoice(), humanChoice);
        if (winner == "human") {
            humanScore++;
        } else if (winner == "computer"){
            computerScore++;
        } else if (winner == "tie"){
            ties++;
        }
        console.log("The scores are: " + humanScore + " for the human and " +
        computerScore + " for the computer and " + ties + " ties.");
        resultsContainer.textContent = "The scores are: " + humanScore + " for the human and " +
        computerScore + " for the computer and " + ties + " ties.";
        
        
        if (humanScore === 5){
            resultsContainer.textContent = "Human wins!";
            buttonContainer.remove();
        } else if (computerScore === 5){
            resultsContainer.textContent = "Computer wins!";
            buttonContainer.remove();
        }
    }

    const rockButton = document.createElement("button");
    rockButton.textContent = "ROCK";
    rockButton.addEventListener('click', () => {
        determineWinner("rock");
    });
    
    const paperButton = document.createElement("button");
    paperButton.textContent = "PAPER";
    paperButton.addEventListener('click', () => {
        determineWinner("paper");
    });
    
    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "SCISSORS";
    scissorsButton.addEventListener('click', () => {
        determineWinner('scissors');
    });
    
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.appendChild(rockButton);
    buttonContainer.appendChild(paperButton);
    buttonContainer.appendChild(scissorsButton);  
    //const playRoundObj = playRound()
    
}

//Randomly return rock paper or scissors
function getComputerChoice(){
    // console.log("Calling getComputerChoice");
    //console.log(Math.random());
    const randomNumber = Math.random();
    // console.log("The random number is " + randomNumber);
    if (randomNumber <= 0.333){
        // console.log("Rock");
        return "rock";
    }
    else if (randomNumber <= 0.666){
        // console.log("Paper");
        return "paper";
    }
    else {
        // console.log("Scissors");
        return "scissors";
    }
}

function getHumanChoice(){
    // console.log("Calling getHumanChoice");
    let humanChoice = "blank";
    
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors" ){
        humanChoice = prompt("Please select rock, paper, or scissors");
        humanChoice = humanChoice.toLowerCase();
        // console.log(humanChoice);
    }

    return humanChoice.toLowerCase();
}

function playRound(computerChoice, humanChoice){
    let winner;
    //compare them:
    if (computerChoice === humanChoice) {
        console.log("Tie!");
        winner = "tie"
    } else if (computerChoice === "rock" && humanChoice === "paper"){
        console.log("Human wins!");
        winner = "human"
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
        console.log("Computer wins!");
        winner = "computer"
    } else if (computerChoice === "paper" && humanChoice === "rock"){
        console.log("Computer wins!");
        winner = "computer"
    } else if (computerChoice === "paper" && humanChoice === "scissors"){
        console.log("Human wins!");
        winner = "human"
    } else if (computerChoice === "scissors" && humanChoice === "paper"){
        console.log("Computer wins!");
        winner = "computer"
    } else if (computerChoice === "scissors" && humanChoice === "rock"){
        console.log("Human wins!");
        winner = "human"
    } else {
        console.log("Something went wrong; I have failed as a programmer :(");
        return 0;
    }

    return winner;

}

