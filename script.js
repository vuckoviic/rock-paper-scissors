let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
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
    
    playerSelection = prompt('Select you weapon: ').toUpperCase();
    computerSelection = result;

    // options for choosing rock
    if (playerSelection == 'ROCK' && computerSelection == 'Scissors'){
        console.log("You won! Rock beats scissors!");
        playerScore = ++playerScore;
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'Rock'){
        console.log("Tied! Rock is equal to rock!");
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'Paper'){
        console.log("You lost! Paper beats rock!");
        computerScore = ++computerScore;
    }

    //options for choosing paper
    if (playerSelection == 'PAPER' && computerSelection == 'Rock'){
        console.log("You won! Paper beats rock!");
        playerScore = ++playerScore;
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'Paper'){
        console.log("Tied! Paper is equal to paper!");
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'Scissors'){
        console.log("You lost! Scissors beats paper!")
        computerScore = ++computerScore;
    }

    //options for choosing scissors

    if(playerSelection == 'SCISSORS' && computerSelection == 'Paper'){
        console.log("You won! Scissors beat paper!");
        playerScore = ++playerScore;
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'Scissors'){
        console.log("Tied! Scissors are equal to scissors!");
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'Rock'){
        console.log("You lost! Rock beats scissors!");
        computerScore = ++computerScore;
    }
    console.log(`Score is now: ${playerScore} : ${computerScore}`);
}
   
function game() {
while (playerScore < 5 || computerScore < 5){
    playRound()
    if (playerScore == 5 || computerScore == 5){
        break;
    }
}
     
}

game()

if (playerScore > computerScore) {
    console.log("You won the game!");
}

else if (playerScore == computerScore){
    console.log("Game is tied! No winner!");
}

else {
    console.log("You lost the game!");
}