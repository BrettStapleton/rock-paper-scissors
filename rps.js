let roundCount = 1;
let playerScore = 0;
let computerScore = 0;

const rockSelect = document.querySelector('#btn-rock');
rockSelect.addEventListener('click', () => {
    playRPS('ROCK', computerPlay());
});

const paperSelect = document.querySelector('#btn-paper');
paperSelect.addEventListener('click', () => {
    playRPS('PAPER', computerPlay());
});

const scissorsSelect = document.querySelector('#btn-scissors');
scissorsSelect.addEventListener('click', () => {
    playRPS('SCISSORS', computerPlay())
});

const startContent = document.querySelector('#start-content');
const resultContent = document.querySelector('#result-content');
const playerContent = document.querySelector('#player-content');

const roundContent = document.createElement('h3');
roundContent.textContent = "Round " + roundCount;

const scoreContent = document.createElement('h3');
scoreContent.textContent = "You -> " + playerScore + '-' + computerScore + " <- Computer";

const result = document.createElement('h3');
const winLoseContent = document.createElement('h3');

startContent.appendChild(roundContent);
startContent.appendChild(scoreContent);
resultContent.appendChild(result);
resultContent.appendChild(winLoseContent);

function computerPlay(){
    play = Math.floor(Math.random() * 3);
    if (play == 0){
        return 'ROCK';
    }
    else if (play == 1){
        return 'PAPER';
    }
    else return 'SCISSORS';
}

function playRPS(playerChoice, computerChoice){
    if (playerChoice == 'PAPER' && computerChoice == 'ROCK'){
        playerScore += 1;
        result.textContent = "You win! Paper beats Rock!";
        //console.log('You win! Paper beats Rock!');
    }
    else if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS'){
        playerScore += 1;
        
        result.textContent = "You win! Rock beats Scissors!";
        //console.log('You win! Rock beats Scissors!');
    }
    else if (playerChoice == 'SCISSORS' && computerChoice == 'PAPER'){
        playerScore += 1;
        result.textContent = "You win! Scissors beats Paper!";
        //console.log('You win! Scissors beats Paper!');
    }
    else if (playerChoice == 'ROCK' && computerChoice == 'PAPER'){
        computerScore += 1;
        result.textContent = "You lose! Rock loses to Paper!";
        //console.log('You lose! Rock loses to Paper!');
    }
    else if (playerChoice == 'SCISSORS' && computerChoice == 'ROCK'){
        computerScore += 1;
        result.textContent = "You lose! Scissors loses to Rock!";
        //console.log('You lose! Scissors loses to Rock!');
    }
    else if (playerChoice == 'PAPER' && computerChoice == 'SCISSORS'){
        computerScore += 1;
        result.textContent = "You lose! Paper loses to Scissors!";
        //console.log('You lose! Paper loses to Scissors!');
    }
    else if (playerChoice == computerChoice){
        roundContent.textContent = roundCount;
        result.textContent = "It's a tie! Go again!";
        //console.log("It's a tie! Go again!");
        //alert("It's a tie! Go again!");
    }
    roundCount += 1;
    roundContent.textContent = "Round " + roundCount;
    scoreContent.textContent = "You -> " + playerScore + '-' + computerScore + " <- Computer";
    if (playerScore === 5){
        winLoseContent.textContent = "You won the game!!!";
        winLoseContent.style.color = 'green';
        playerContent.remove(rockSelect);
        playerContent.remove(paperSelect);
        playerContent.remove(scissorsSelect);
    }
    else if (computerScore === 5){
        winLoseContent.textContent = "You lost the game!!!";
        winLoseContent.style.color = 'red';
        playerContent.remove(rockSelect);
        playerContent.remove(paperSelect);
        playerContent.remove(scissorsSelect);
    }
}

function game(){
    numberOfGames = parseInt(prompt("How many games do you want to play?"));
    if (Number.isInteger(numberOfGames)){
        // while (roundCount <= numberOfGames){
        //     playerChoice = prompt("Game " + roundCount + ". What you throwing?").toUpperCase();
        //     playRPS(playerChoice, computerPlay());
        //     roundCount += 1;
        // }
        startContent.appendChild(roundContent);
        if (playerScore > computerScore){
            console.log('You won ' + playerScore + '-' + computerScore);
        }
        else if (playerScore < computerScore){
            console.log('You lost ' + playerScore + '-' + computerScore);
        }
        else {
            console.log('You tied ' + playerScore + '-' + computerScore);
        }
    }
    else{
        alert("Please enter a number!");
        game();
    }
}