const gameTxt = document.querySelector('h2');
const score = document.querySelector('p');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let playerWins = 0;
let cpuWins = 0;

rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
    displayScore();
    declareWinner();
})

paper.addEventListener('click', () => {
    playRound('paper', computerPlay());
    displayScore();
    declareWinner();
})

scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay());
    displayScore();
    declareWinner();
})

function computerPlay () {
    let plays = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * 3);

    return plays[rand];
}

function playRound (pSelect, cpuSelect) {
    if (pSelect === cpuSelect) {
        changeGameTxt("It's a tie! Play again!");
        return;
    } else if (pSelect === "rock") {
        if (cpuSelect === "paper") {
            changeGameTxt(`You lose! ${cpuSelect} beats ${pSelect}!`);
            cpuWins++;
        } else {
            changeGameTxt(`You win! ${pSelect} beats ${cpuSelect}!`);
            playerWins++;
        }
    } else if (pSelect === "paper") {
        if (cpuSelect === "scissors") {
            changeGameTxt(`You lose! ${cpuSelect} beats ${pSelect}!`);
            cpuWins++;
        } else {
            changeGameTxt(`You win! ${pSelect} beats ${cpuSelect}!`);
            playerWins++;
        }
    } else {
        if (cpuSelect === "rock") {
            changeGameTxt(`You lose! ${cpuSelect} beats ${pSelect}!`);
            cpuWins++;
        } else {
            changeGameTxt(`You win! ${pSelect} beats ${cpuSelect}!`);
            playerWins++;
        }
    }
}

function changeGameTxt (text) {
    gameTxt.textContent = text;
}

function displayScore () {
    score.textContent = `Wins: ${playerWins}; Losses: ${cpuWins}`;
}

function declareWinner () {
    if (playerWins == 5) {
        changeGameTxt('You win!');
        playerWins = 0;
        cpuWins = 0;
        score.textContent = 'Click this text to play again';
    } else if (cpuWins == 5) {
        changeGameTxt('You lose!');
        playerWins = 0;
        cpuWins = 0;
        score.textContent = 'Click this text to try again';
    }

    score.addEventListener('click', () => {
        location.reload();
    });
}