let playerScore = 0;
let computerScore = 0;

let playerSelection = '';

const rndWnr = document.getElementById('rndWnr');
    
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
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'Rock'){
        console.log("Tied! Rock is equal to rock!");
        rndWnr.textContent = 'You won! Rock beats scissors!';
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'Paper'){
        console.log("You lost! Paper beats rock!");
        computerScore = ++computerScore;
        rndWnr.textContent = 'You lost! Paper beats rock!';
    }

    //options for choosing paper
    if (playerSelection == 'PAPER' && computerSelection == 'Rock'){
        console.log("You won! Paper beats rock!");
        playerScore = ++playerScore;
        rndWnr.textContent = 'You won! Paper beats rock!';
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'Paper'){
        console.log("Tied! Paper is equal to paper!");
        rndWnr.textContent = 'Tied! Paper is equal to paper!';
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'Scissors'){
        console.log("You lost! Scissors beats paper!")
        computerScore = ++computerScore;
        rndWnr.textContent = 'You lost! Scissors beats paper!';
    }
    

    //options for choosing scissors

    if(playerSelection == 'SCISSORS' && computerSelection == 'Paper'){
        console.log("You won! Scissors beat paper!");
        playerScore = ++playerScore;
        rndWnr.textContent = 'You won! Scissors beat paper!';
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'Scissors'){
        console.log("Tied! Scissors are equal to scissors!");
        rndWnr.textContent = 'Tied! Scissors are equal to scissors!';
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'Rock'){
        console.log("You lost! Rock beats scissors!");
        computerScore = ++computerScore;
        rndWnr.textContent = 'You lost! Rock beats scissors!';
    }
    console.log(`Score is now: ${playerScore} : ${computerScore}`);
}

function getResult(){
    if (playerScore > computerScore) {
        console.log("You won the game!");
    }
    
    else if (playerScore == computerScore){
        console.log("Game is tied! No winner!");
    }
    
    else {
        console.log("You lost the game!");
    }
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


    