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
    
    playerSelection = prompt('Select you weapon: ');
    computerSelection = result;

    let playerScore = 0;
    let computerScore = 0;

    // options for choosing rock
    if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        console.log("You won! Rock beats scissors!");
        playerScore = ++playerScore;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Rock'){
        console.log("Tied! Rock is equal to rock!");
        playerScore = ++playerScore;
        computerScore = ++computerScore;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        console.log("You lost! Paper beats rock!");
        computerScore = ++computerScore;
    }

    //options for choosing paper
    if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        console.log("You won! Paper beats rock!");
        playerScore = ++playerScore;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Paper'){
        console.log("Tied! Paper is equal to paper!");
        playerScore = ++playerScore;
        computerScore = ++computerScore;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        console.log("You lost! Scissors beats paper!")
        computerScore = ++computerScore;
    }

    //options for choosing scissors

    if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
        console.log("You won! Scissors beat paper!");
        playerScore = ++playerScore;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Scissors'){
        console.log("Tied! Scissors are equal to scissors!");
        playerScore = ++playerScore;
        computerScore = ++computerScore;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        console.log("You lost! Rock beats scissors!");
        computerScore = ++computerScore;
    }
    console.log(`Score is now: ${playerScore} : ${computerScore}`);
}
   
function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
}

game()