let playerScore = 0;
let computerScore = 0;

let playerSelection = '';

const rndWnr = document.getElementById('rndWnr');
const gmWnr = document.getElementById('gmWnr');

const playAgainLink = document.getElementById("playAgain");

const plyrScore = document.getElementById('playerScoreNum');
const cmptrScore = document.getElementById('computerScoreNum');

function playRound(computerSelection) {

    // function for getting computer choice randomly
    function getComputerChoice(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
    
        // get random item
        const item = arr[randomIndex];
    
        return item;
    }
    
    const choice = ['Rock' , 'Paper' , 'Scissors'];
    
    const result = getComputerChoice(choice); 

    computerSelection = result;

    // options for choosing rock
    if (playerSelection == 'ROCK' && computerSelection == 'Scissors'){
        rndWnr.textContent = "You won! Rock beats scissors!";
        console.log("You won! Rock beats scissors!");
        playerScore = ++playerScore;
        plyrScore.textContent = playerScore;
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'Rock'){
        console.log("Tied! Rock is equal to rock!");
        rndWnr.textContent = 'Tied! Rock is equal to rock!';
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'Paper'){
        console.log("You lost! Paper beats rock!");
        computerScore = ++computerScore;
        cmptrScore.textContent = computerScore;
        rndWnr.textContent = 'You lost! Paper beats rock!';
    }

    //options for choosing paper
    if (playerSelection == 'PAPER' && computerSelection == 'Rock'){
        console.log("You won! Paper beats rock!");
        playerScore = ++playerScore;
        plyrScore.textContent = playerScore;
        rndWnr.textContent = 'You won! Paper beats rock!';
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'Paper'){
        console.log("Tied! Paper is equal to paper!");
        rndWnr.textContent = 'Tied! Paper is equal to paper!';
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'Scissors'){
        console.log("You lost! Scissors beats paper!")
        computerScore = ++computerScore;
        cmptrScore.textContent = computerScore;
        rndWnr.textContent = 'You lost! Scissors beats paper!';
    }
    

    //options for choosing scissors

    if(playerSelection == 'SCISSORS' && computerSelection == 'Paper'){
        console.log("You won! Scissors beat paper!");
        playerScore = ++playerScore;
        plyrScore.textContent = playerScore;
        rndWnr.textContent = 'You won! Scissors beat paper!';
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'Scissors'){
        console.log("Tied! Scissors are equal to scissors!");
        rndWnr.textContent = 'Tied! Scissors are equal to scissors!';
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'Rock'){
        console.log("You lost! Rock beats scissors!");
        computerScore = ++computerScore;
        cmptrScore.textContent = computerScore;
        rndWnr.textContent = 'You lost! Rock beats scissors!';
    }
    console.log(`Score is now: ${playerScore} : ${computerScore}`);
}

function getResult(){
    if (playerScore > computerScore) {
        gmWnr.style.color = 'green';
        playAgainLink.style.color = 'green';
        gmWnr.textContent = 'You won the game!';
        console.log("You won the game!"); 
    }
    //this is useless, but I will keep it here
    else if (playerScore == computerScore){
        gmWnr.style.color = 'rgb(25, 0, 167)';
        gmWnr.textContent = 'Game is tied! No winner!';
        console.log("Game is tied! No winner!");
    }
    
    else {
        gmWnr.style.color = 'red';
        playAgainLink.style.color = 'red';
        gmWnr.textContent = 'You lost the game!';
        console.log("You lost the game!");
    }
    playAgainLink.style.display = "inline"; // Display the "Play Again" link
    playAgainLink.textContent = 'Play again?';
    playAgainLink.addEventListener("click", function() {
        location.reload(); // Reload the page when the link is clicked
});
}



document.getElementById('buttonR').addEventListener('click', function() {
    playerSelection = 'ROCK';
    playRound();
    if (playerScore == 5 || computerScore == 5){
        getResult();
        document.getElementById("buttonR").disabled = true;
        document.getElementById("buttonP").disabled = true;
        document.getElementById("buttonS").disabled = true;
    }
});

document.getElementById('buttonP').addEventListener('click', function() {
    playerSelection = 'PAPER';
    playRound();
    if (playerScore == 5 || computerScore == 5){
        getResult();
        document.getElementById("buttonR").disabled = true;
        document.getElementById("buttonP").disabled = true;
        document.getElementById("buttonS").disabled = true;
    }
});

document.getElementById('buttonS').addEventListener('click', function() {
    playerSelection = 'SCISSORS';
    playRound();
    if (playerScore == 5 || computerScore == 5){
        getResult();
        document.getElementById("buttonR").disabled = true;
        document.getElementById("buttonP").disabled = true;
        document.getElementById("buttonS").disabled = true;
    }
});