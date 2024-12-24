
// let humanSelection = getHumanChoice();
// let computerSelection = getComputerchoice();
// let humanScore = 0;
// let computerScore = 0;

// function getComputerchoice() {
//     let computerMove = Math.floor(Math.random() * 75);

//     if (computerMove >= 0 && computerMove <= 25) {
//         return "Rock";
//     } 
//     else if(computerMove > 25 && computerMove <= 50) {
//         return "Paper";
//     } 
//      else {
//         return "Scissors";
//      }
//     }


// function getHumanChoice(){
//     let userPrompt = prompt("Enter Rock, Paper or Scissors to Play", "");
//     let userPromptFirstLetter = userPrompt.at(0).toLocaleUpperCase();
//     let userPromptLowerCase = userPrompt.slice(1).toLocaleLowerCase()

//     return userPromptFirstLetter + userPromptLowerCase;  
// }


// function playRound(humanChoice, computerChoice) {

//     let result = "";

//     if(humanChoice === "Rock" && computerChoice === "Scissors") {
//         humanScore++;
//         result = console.log(`

//             You picked ${humanChoice} and Computer picked ${computerChoice} you win!!
//             Scores: 
//             Player Score: ${humanScore}
//             Computer Score: ${computerScore}
            
//         `)
//     } 
//     else if (humanChoice === "Scissors" && computerChoice === "Paper") { 
//         humanScore++;
//         result = console.log(`

//             You picked ${humanChoice} and Computer picked ${computerChoice} you win!!
//             Scores: 
//             Player Score: ${humanScore}
//             Computer Score: ${computerScore}
//         `)
//     }
//     else if (humanChoice === "Paper" && computerChoice === "Rock") { 
//         humanScore++;
    
//         result = console.log(`

//             You picked ${humanChoice} and Computer picked ${computerChoice} you win!!
//             Scores: 
//             Player Score: ${humanScore}
//             Computer Score: ${computerScore}
//         `)
//     }
//     else if (humanChoice === "Scissors" && computerChoice === "Rock") { 
//         ccomputerScore++;
//         result = console.log(`

//             You picked ${humanChoice} and Computer picked ${computerChoice} Computer wins!!
//             Scores: 
//             Player Score: ${humanScore}
//             Computer Score: ${computerScore}
//         `)
//     }
//     else if (humanChoice === "Rock" && computerChoice === "Paper") { 
//         computerScore++;
//         result = console.log(`

//             You picked ${humanChoice} and Computer picked ${computerChoice} Computer wins!!
//             Scores: 
//             Player Score: ${humanScore}
//             Computer Score: ${computerScore}
//         `)
//     }
//     else if (humanChoice === "Paper" && computerChoice === "Scissor") { 
//         computerScore++;
//         result = console.log(`

//             You picked ${humanChoice} and Computer picked ${computerChoice} Computer wins!!
//             Scores: 
//             Player Score: ${humanScore}
//             Computer Score: ${computerScore}
//         `)
//     } else  if(humanChoice === computerChoice){
//         result = console.log(`You picked ${humanChoice} and Computer picked ${computerChoice} it's a tie`)
//     }

//     return result
// }




// // function playGame() {
// //     for(let i = 1; i < 6; i++) {
// //         const humanSelection = getHumanChoice();
// //         const computerSelection = getComputerchoice();
// //         playRound(humanSelection, computerSelection);
// //     }

// //     if(computerScore > humanScore) {
// //         return `
// //         Computer Score: ${computerScore} - Human Score: ${humanScore}
// //         the computer beat you. try again`
// //     }
// //     else if(computerScore < humanScore) {
// //         return `
// //         Computer Score: ${computerScore} - Human Score: ${humanScore}
// //         You beat the computer, way to go!`
// //     } else {
// //         return `
// //         Computer Score: ${computerScore} - Human Score: ${humanScore}
// //         it's a tie, not bad!`
    
// // }

// console.log(playGame())
















