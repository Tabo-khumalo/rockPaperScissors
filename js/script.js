
// let humanSelection = getHumanChoice();
let computerSelection = getComputerchoice();
let humanScore = 0;
let computerScore = 0;

// Human Selection
const rockBtn = document.getElementById("rock").addEventListener("click", playRound)
const paperBtn = document.getElementById("paper").addEventListener("click", playRound)
const scissorsBtn = document.getElementById("scissors").addEventListener("click", playRound)


// score variable

let playerScore = document.getElementById("player-score");
let rockPlayer = document.getElementById("rock-player-score");
let paperPlayer = document.getElementById("paper-player-score");
let scissorPlayer = document.getElementById("scissor-player-score");
let score = 0;

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
     else {
        return "Scissors";
     }
    }

function playRound(e) {

    if (e.target.id === "rock-icon" && computerSelection === "Scissor") {
        
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/rock icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/Scissor Icon right.png" alt="rock paper scissors icon">
        `

        roundResult.textContent = `You picked Rock and Computer picked ${computerSelection}
            Yippy, You win this round!
        `;
    } 
    else if (e.target.id === "rock-icon" && computerSelection === "Paper") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/rock icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/Paper Icon right.png" alt="rock paper scissors icon">
        `
        roundResult.textContent = `You picked Rock and Computer picked ${computerSelection} 
            computer wins this round, Keep trying!
        `;

    } 
    else if(e.target.id === "rock-icon" && computerSelection === "Rock") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/rock icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/rock icon right.png" alt="rock paper scissors icon">
        `
        roundResult.textContent = `You picked Rock and Computer picked ${computerSelection}
        it's a tie, try again.
        `;

    } 
    else if(e.target.id === "paper-icon" && computerSelection === "Rock") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/Paper Icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/rock icon right.png" alt="rock paper scissors icon">
        `
        roundResult.textContent = `You picked Paper and Computer picked ${computerSelection}
        You are a natural, You win.
        `;
    }
    else if(e.target.id === "paper-icon" && computerSelection === "Scissor") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/Paper Icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="computer-choice-icon" src="./images/Scissor Icon right.png" alt="rock paper scissors icon">
        `
        roundResult.textContent = `You picked Paper and Computer picked ${computerSelection}
        Computer Wins, You can do it.
        `
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
    }
    else if(e.target.id === "scissors-icon" && computerSelection === "scissors") {
        PlayerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="./images/Scissor Icon.png" alt="rock paper scissors icons">
        `

        computerChoiceResult.innerHTML = `
            <img id="player-choice-icon" src="/images/Scissor Icon right.png" alt="rock paper scissors icons">
        `
        roundResult.textContent = `You picked Scissors and Computer picked ${computerSelection}.
        twins! carry on!
        `
    }
}

    console.log(e.target.id)
    console.log(computerSelection)
 

    

function playGame() {
    playRound(e)
    
}

playGame()















