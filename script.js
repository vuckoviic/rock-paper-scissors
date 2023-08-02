function getComputerChoice(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const choice = ['Rock' , 'Paper' , 'Scissors'];

const result = getComputerChoice(choice);
console.log(result);

function playRound(playerSelection, computerSelection) {
    
    // options for choosing rock
    if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        console.log("You won! Rock beats scissors!");
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Rock'){
        console.log("Tied! Rock is equal to rock!");
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        console.log("You lost! Paper beats rock!");
    }

    //options for choosing paper
    if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        console.log("You won! Paper beats rock!");
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Paper'){
        console.log("Tied! Paper is equal to paper!");
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        console.log("You lost! Scissors beats paper!")
    }

    //options for choosing scissors

    if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
        console.log("You won! Scissors beat paper!");
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Scissors'){
        console.log("Tied! Scissors are equal to scissors!");
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        console.log("You lost! Rock beats scissors!");
    }
}
   


function game() {
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
}



const playerSelection = prompt('Select you weapon: ');
const computerSelection = result;
console.log(playRound(playerSelection, computerSelection));

game()