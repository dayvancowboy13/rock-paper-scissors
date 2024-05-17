
playGame();

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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;
    const numberRounds = 5;
    let winner;

    for (var i = 0; i < numberRounds; i++){
        winner = playRound(getComputerChoice(), getHumanChoice(),computerScore,humanScore);
        if (winner == "human") {
            humanScore++;
        } else if (winner == "computer"){
            computerScore++;
        } else if (winner == "tie"){
            ties++;
        }
    }

    console.log("The scores after 5 rounds are: " + humanScore + " for the human and " +
        computerScore + " for the computer and " + ties + " ties.");
    
}