# Rock Paper Scissors game

## Instructions

Rock Paper Scissors is a two player game where for each round each player gets to choose between picking Rock, Paper or Scissors to win the round or the game.
There are three possibility to winning the game and three possibilities to lose.

### How to Win 

- If you pick Rock and the next player picked Scissors, You win, Rock beats Scissors.
- If you pick Scissors and the next player picked Paper, You win, Scissor beats Papers.
- If you pick Paper and the next player picked Rock, You win, Paper beats Rock.

### How to Lose

- If you pick Rock and the next player picked Paper, You lose, Paper beats Rock.
- If you pick Paper and the next player picked Scissors, You lose, Scissors beats Paper.
- If you pick Scissor and the next player picked Rock, You lose, Rock beats Scissors.

If Both you and the next player both pick Rock, Paper or Scissors, then it is a Tie.

## Planning the code for the Game

The Game play for Rock, Paper Scissors will be the user against the computer. 

### Gameplay for the Computer

- Write code for the computers decision. The computer needs to pick Rock, Paper or Scissors at random.
- create a function that will be able to generate a random decision for the computer
- create a variable and save the resulting decision of the function into the variable 
- Once the user has picked, show the decision the computer picked in the console.

### Gameplay for the User

- Write code to get the user's decision between Rock Paper or Scissors
- Create a function to prompt the user to enter a decision between Rock, Paper or Scissors. Make the prompt case insensetive.
- create a varible to save the user decision in from the promt.
- show the user's decision in the console

### Gameplay rounds

- The game will run for 5 round before it ends.
- create a variable for wins and a variable for lose for both the computer and user.
- Each round the computer will make a decision and the user will make a decision. 
- if the computer wins add 1 to the computer wins tab and then add 1 to the user lose tab and vice versa.
- show the score on the console.

### Overall Gameplay

- User will be prompted from the browser to enter Rock, Paper or Scissors
- let say the user picks rock and the computer will then random pick a move. lets say computer picks Scissors.
- The function for will then take the user's decision and the computer's decision and check who wins. in this case the user wins since rock beats scissors.
- the next function for scores will then check who has won and add 1 to their winning scor and 1 to the loser's losing score
- That will be the first round and this will repeat from the top for five rounds.
- once the fifth round done. Winner is (user/comp) - score (wins / lose) will be shown in the console.


## PsuedoCode 

### User Move

- CREATE function `getHumanChoice()` the function will prompt the user to enter rock, paper , scissor.
- GET the user enter prompt, assigned it to a variable and use `at()` to convert the first letter to uppercase using `toUpperCase()` method.
- USE `slice()` to get the rest of the word enter and convert it to lowercase using `toLowerCase()`
- RETURN the first letter concatinated with the second word

### Computer Move

- CREATE function `getComputerchoice()` the function with return rock, paper or scissor based of a random number.
- CREATE a variable `computerMove` and user `Math.floor()` & `Math.random()` to generate a random number between 1 and 75.
- IF number is between 0 `&&` 25 `return` Rock
- IF number is between 25 `&&` 50 `return` Paper
- IF number is between 50 `&&` 75 `return` Scissor


### Play Round

- CREATE two variable `computerScore`, `humanScore` and initialize them with 0

- CREATE function `playRound` the function will take two parameter `humanChoice`,`computerChoice`

- IF `humanChoice` and `Computerchoice` have the same value. `return` it's a tie

- IF `humanChoice` is rock and `ComputerChoice` is Scissors `return` you win and add 1 to `playerScore`
- IF `humanChoice` is Paper and `ComputerChoice` is Rock `return` you win and add 1 to `playerScore`
- IF `humanChoice` is Scissors and `ComputerChoice` is Paper `return` you win and add 1 to `playerScore`

- IF `humanChoice` is Scissors and `ComputerChoice` is Rock `return` computer wins and add 1 to `computerScore`
- IF `humanChoice` is Rock and `ComputerChoice` is Paper `return` computer wins and add 1 to `computerScore`
- IF `humanChoice` is Paper and `ComputerChoice` is Scissors `return` computer wins and add 1 to `computerScore`
- CREATE a variable `humanSelection` and assign the function `getHumanChoice()` to it
- CREATE a variable `computerSelection` and assign the function `getComputerChoice()`
- CALL `playround(humanSelection, ComputerSelction)`


### Play Game

- CREATE function `playGame()` that will run for five rounds.
- CREATE a `for()` loop that iterates five time.
- CREATe a variable `humanSelection` and assign `getHumanChoice()` to it
- CREATE a variable `ComputerSelection` and assign `getComputerChoice()` to it.
- CALL `console.log(playround(humanSelection, ComputerSelction))`
- Outside the loop check if the computer or user wins after the loop runs
- IF `computerScore` is greater than `humanScore` `return` computer wins
- IF `computerScore` is less than `humanScore` `return` You win
- if `computerScore` is equal to `humanScore` `return` it's a tie
- CALL `console.log(playGame())`