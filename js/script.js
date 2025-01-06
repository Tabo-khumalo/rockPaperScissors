// Score container

// round



// player and computer scores counter

// let playerScore = document.getElementById("player-score")
// let computerScore = document.getElementById("computer-score")

// player rock, paper, scissors count

// let rockPlayerScore = document.getElementById("rock-player-score")
// let paperPlayerScore = document.getElementById("paper-player-score")
// let scissorPlayerScore = document.getElementById("scissor-player-score")

// computer rock, paper, scissors count

// let rockComputerScore = document.getElementById("rock-computer-score")
// let paperComputerScore = document.getElementById("paper-computer-score")
// let scissorComputerScore = document.getElementById("scissor-computer-score")

// -----------------------------------------------------------------------------------------

// funtion to get computer's choice

function getComputerChoice () {
    let computerMove = Math.floor(Math.random() * 100)

    if(computerMove >= 0 && computerMove <= 33) {
        return "Rock";
    }
    else if(computerMove > 33 && computerMove <= 66 ) {
        return  "Paper";
    }
    else {
        return "Scissors";
    }

};

// -------------------------------------------------------------------------------------------

// Event Listeners to get the player choice

const rockBtn = document.getElementById("rock").addEventListener("click", playRound);
const paperBtn = document.getElementById("paper").addEventListener("click", playRound);
const scissorsBtn = document.getElementById("scissors").addEventListener("click", playRound);

// ............................................................................................

// choice result

// Player choice result

let playerChoiceResult = document.getElementById("player-choice-result");
let playerResultIcon = document.createElement("img"); 
playerResultIcon.id = "player-choice-icon"

// computer choice result 

let computerChoiceResult = document.getElementById("computer-choice-result");
let computerResultIcon = document.createElement("img");
computerResultIcon.id = "computer-choice-icon";

// round results

let roundResult = document.getElementById("round-results");



    let round = document.getElementById("current-round");
    let playerScore = document.getElementById("player-score");
    let computerScore = document.getElementById("computer-score");
    let rockPlayerScore = document.getElementById("rock-player-score");
    let paperPlayerScore = document.getElementById("paper-player-score");
    let scissorPlayerScore = document.getElementById("scissor-player-score");
    let rockComputerScore = document.getElementById("rock-computer-score");
    let paperComputerScore = document.getElementById("paper-computer-score");
    let scissorComputerScore = document.getElementById("scissor-computer-score");
    let rockChoiceBtn = document.getElementById("rock");
    let resetBtn = document.getElementById("reset");
    let choiceDiv = document.getElementById("choice");

function playRound (e) {

    let computerChoice = getComputerChoice();

    if(e.target.id === "rock" && computerChoice === "Paper") {
        playerResultIcon.setAttribute("src", "./images/rock icon.png")
        playerChoiceResult.appendChild(playerResultIcon)
        computerResultIcon.setAttribute("src", "./images/Paper Icon right.png");
        computerChoiceResult.appendChild(computerResultIcon)
        roundResult.textContent = `
            You picked Rock and Computer picked ${computerChoice}. 
            Computer wins this round, Keep trying!
        `;

        round.textContent++;
        computerScore.textContent++
        rockPlayerScore.textContent++;
        paperComputerScore.textContent++;
    } 
    else if(e.target.id === "rock" && computerChoice === "Scissors") {
        playerResultIcon.setAttribute("src", "./images/rock icon.png")
        playerChoiceResult.appendChild(playerResultIcon)
        computerResultIcon.setAttribute("src", "./images/Scissor Icon right.png");
        computerChoiceResult.appendChild(computerResultIcon)
        roundResult.textContent = `
            You picked Rock and Computer picked ${computerChoice}.
                Yippy, You win this round!
        `
        round.textContent++;
        playerScore.textContent++;
        rockPlayerScore.textContent++;
        scissorComputerScore.textContent++
    }
    else if(e.target.id === "rock" && computerChoice === "Rock") {
        playerResultIcon.setAttribute("src", "./images/rock icon.png")
        playerChoiceResult.appendChild(playerResultIcon)
        computerResultIcon.setAttribute("src", "./images/rock icon right.png");
        computerChoiceResult.appendChild(computerResultIcon);
        roundResult.textContent = `
            You picked Scissors and Computer picked ${computerChoice}.
            it's a tie, try again.
        `
        round.textContent++;
        rockPlayerScore.textContent++;
        rockComputerScore.textContent++

    }
    else if(e.target.id === "paper" && computerChoice === "Scissors") {
        playerResultIcon.setAttribute("src", "./images/Paper Icon.png")
        playerChoiceResult.appendChild(playerResultIcon)
        computerResultIcon.setAttribute("src", "./images/Scissor Icon right.png");
        computerChoiceResult.appendChild(computerResultIcon)
        roundResult.textContent = `
            You picked Paper and Computer picked ${computerChoice}.
            Computer Wins, You can do it!
        `
        round.textContent++;
        computerScore.textContent++;
        paperPlayerScore.textContent++;
        scissorComputerScore.textContent++;
    }
    else if(e.target.id === "paper" && computerChoice === "Rock") {
        playerResultIcon.setAttribute("src", "./images/Paper Icon.png");
        playerChoiceResult.appendChild(playerResultIcon);
        computerResultIcon.setAttribute("src", "./images/rock icon right.png");
        computerChoiceResult.appendChild(computerResultIcon);
        roundResult.textContent = `
            You picked Paper and Computer picked ${computerChoice}.
            You are a natural, You win!
        `;
        round.textContent++;
        playerScore.textContent++;
        paperPlayerScore.textContent++;
        rockComputerScore.textContent++;
    }
    else if(e.target.id === "paper" && computerChoice === "Paper") {
        playerResultIcon.setAttribute("src", "./images/Paper Icon.png")
        playerChoiceResult.appendChild(playerResultIcon);
        computerResultIcon.setAttribute("src", "./images/Paper Icon right.png");
        computerChoiceResult.appendChild(computerResultIcon);
        roundResult.textContent = `
            You picked Paper and Computer picked ${computerChoice}.
            You Tied, great minds think alike! go on.
        `
        round.textContent++;
        paperPlayerScore.textContent++;
        paperComputerScore.textContent++

    }
    else if(e.target.id === "scissors" && computerChoice === "Rock") {
        playerResultIcon.setAttribute("src", "./images/Scissor Icon.png")
        playerChoiceResult.appendChild(playerResultIcon)
        computerResultIcon.setAttribute("src", "./images/rock icon right.png");
        computerChoiceResult.appendChild(computerResultIcon)
        roundResult.textContent = `
            You picked Scissors and Computer picked ${computerChoice}.
            Computer wins, Keep going!
        `
        round.textContent++;
        computerScore.textContent++;
        scissorPlayerScore.textContent++;
        rockComputerScore.textContent++;
    } 
    else if(e.target.id === "scissors" && computerChoice === "Paper") {
        playerResultIcon.setAttribute("src", "./images/Scissor Icon.png")
        playerChoiceResult.appendChild(playerResultIcon)
        computerResultIcon.setAttribute("src", "./images/Paper Icon right.png");
        computerChoiceResult.appendChild(computerResultIcon)
        roundResult.textContent = `
            You picked Scissors and Computer picked ${computerChoice}.
            Computer wins, Keep going!
        `
        round.textContent++;
        playerScore.textContent++;
        scissorPlayerScore.textContent++;
        paperComputerScore.textContent++;
    }
    else if(e.target.id === "scissors" && computerChoice === "Scissors") {
        playerResultIcon.setAttribute("src", "./images/Scissor Icon.png")
        playerChoiceResult.appendChild(playerResultIcon);
        computerResultIcon.setAttribute("src", "./images/Scissor Icon right.png");
        computerChoiceResult.appendChild(computerResultIcon);
        roundResult.textContent = `
            You picked Scissors and Computer picked ${computerChoice}.
            Twins! carry on!
        `
        round.textContent++;
        scissorPlayerScore.textContent++;
        scissorComputerScore.textContent++

    }
    
    
    if(round.textContent > 4) {
        if(playerScore.textContent > computerScore.textContent) {
            roundResult.textContent = `Awesome, You win the game. Well done!`;
            resetBtn.classList.remove("dont-show");
            resetBtn.style.marginBottom = "300px";
            choiceDiv.classList.add("dont-show");
        }
        else if(playerScore.textContent < computerScore.textContent) {
            roundResult.textContent = `Computer wins this time. Better luck next time`;
            resetBtn.classList.remove("dont-show");
            resetBtn.style.marginBottom = "300px";
            choiceDiv.classList.add("dont-show");
        }
        else if(playerScore.textContent === computerScore.textContent) {
            roundResult.textContent = `Hmm, What do we have here, a tie`;
            resetBtn.classList.remove("dont-show");
            resetBtn.style.marginBottom = "300px";
            choiceDiv.classList.add("dont-show");
            
        }
    }
}


resetBtn.addEventListener("click", () => {
    resetBtn.classList.add("dont-show");
    rockChoiceBtn.classList.remove("dont-show");
    choiceDiv.classList.remove("dont-show")
    round.textContent = "";
    roundResult.textContent = ""
    playerChoiceResult.textContent = "";
    computerChoiceResult.textContent = "";
    playerScore.textContent = "";
    computerScore.textContent = "";
    rockPlayerScore.textContent = "";
    paperPlayerScore.textContent = "";
    scissorPlayerScore.textContent = "";
    rockComputerScore.textContent = "";
    paperComputerScore.textContent = "";
    scissorComputerScore.textContent = "";
})