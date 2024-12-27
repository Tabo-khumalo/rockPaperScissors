
// Computer Selection

let computerSelection = getComputerchoice();

// Human Selection

const rockBtn = document.getElementById("rock").addEventListener("click", playRound)
const paperBtn = document.getElementById("paper").addEventListener("click", playRound)
const scissorsBtn = document.getElementById("scissors").addEventListener("click", playRound)


// score variable

let playerScore = document.getElementById("player-score");
let rockPlayer = document.getElementById("rock-player-score");
let paperPlayer = document.getElementById("paper-player-score");
let scissorPlayer = document.getElementById("scissor-player-score");

let computerScore = document.getElementById("computer-score");
let rockComputer = document.getElementById("rock-computer-score");
let paperComputer = document.getElementById("paper-computer-score");
let scissorComputer = document.getElementById("scissors-computer-score");


// Round Result

PlayerChoiceResult = document.getElementById("player-choice-result");
computerChoiceResult = document.getElementById("computer-choice-result");
roundResult = document.getElementById("round-result-content");

function getComputerchoice() {
    let computerMove = Math.floor(Math.random() * 75);

    if (computerMove >= 0 && computerMove <= 25) {
        return "Rock";
    } 
    else if(computerMove > 25 && computerMove <= 50) {
        return "Paper";
    } 
     else if (computerMove > 50 && computerMove <= 75) {
        return "Scissors";

     }
    }

function playRound(e) {

    let computerSelection = getComputerchoice();

    if (e.target.id === "rock-icon" && computerSelection === "Scissors") {
        
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/rock icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/Scissor Icon right.png" alt="rock paper scissors icon">
        `

        roundResult.textContent = `You picked Rock and Computer picked ${computerSelection}.
            Yippy, You win this round!
        `;

        playerScore.innerHTML++;
        rockPlayer.innerHTML++;
        scissorComputer.innerHTML++;
    } 
    else if (e.target.id === "rock-icon" && computerSelection === "Paper") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/rock icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/Paper Icon right.png" alt="rock paper scissors icon">
        `
        roundResult.textContent = `You picked Rock and Computer picked ${computerSelection}. 
            Computer wins this round, Keep trying!
        `;

        computerScore.innerHTML++;
        rockPlayer.innerHTML++;
        paperComputer.innerHTML++;

    } 
    else if(e.target.id === "rock-icon" && computerSelection === "Rock") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/rock icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/rock icon right.png" alt="rock paper scissors icon">
        `
        roundResult.textContent = `You picked Rock and Computer picked ${computerSelection}.
        it's a tie, try again.
        `;

        rockComputer.innerHTML++;
        rockPlayer.innerHTML++;

    } 
    else if(e.target.id === "paper-icon" && computerSelection === "Rock") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/Paper Icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/rock icon right.png" alt="rock paper scissors icon">
        `
        roundResult.textContent = `You picked Paper and Computer picked ${computerSelection}.
        You are a natural, You win.
        `; 

        playerScore.innerHTML++;
        paperPlayer.innerHTML++;
        rockComputer.innerHTML++;
    }
    else if(e.target.id === "paper-icon" && computerSelection === "Scissors") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/Paper Icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/Scissor Icon right.png" alt="rock paper scissors icon">
        `
        roundResult.textContent = `You picked Paper and Computer picked ${computerSelection}.
        Computer Wins, You can do it!
        `
        computerScore.innerHTML++;
        paperPlayer.innerHTML++;
        scissorComputer.innerHTML++;
        
    }
    else if(e.target.id === "paper-icon" && computerSelection === "Paper") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/Paper Icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/Paper Icon right.png" alt="rock paper scissors icon">
        `
        roundResult.textContent = `You picked Paper and Computer picked ${computerSelection}.
        You Tied, great minds think alike! go on.
        `
        paperPlayer.innerHTML++;
        paperComputer.innerHTML++;
    } 
    else if(e.target.id === "scissors-icon" && computerSelection === "Paper") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/Scissor Icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/Paper Icon right.png" alt="rock paper scissors icon">
        `
        roundResult.textContent = `You picked Scissors and Computer picked ${computerSelection}.
        You win, well done!
        `
        playerScore.innerHTML++;
        scissorPlayer.innerHTML++;
        paperComputer++;
    }
    else if(e.target.id === "scissors-icon" && computerSelection === "Rock") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/Scissor Icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/rock icon right.png" alt="rock paper scissors icons">
        `
        roundResult.textContent = `You picked Scissors and Computer picked ${computerSelection}.
        Computer wins, Keep going!
        `
        computerScore.innerHTML++;
        rockComputer.innerHTML++;
        scissorPlayer.innerHTML++;
    }
    else if(e.target.id === "scissors-icon" && computerSelection === "Scissors") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/Scissor Icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="/images/Scissor Icon right.png" alt="rock paper scissors icons">
        `
        roundResult.textContent = `You picked Scissors and Computer picked ${computerSelection}.
        Twins! carry on!
        `
        scissorComputer.innerHTML++;
        scissorPlayer.innerHTML++;
    }
}
















