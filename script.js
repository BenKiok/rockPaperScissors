const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', game);

function playerMove () {
    let move = prompt("What is your move?").toLowerCase();
    if (move !== 'rock' && move !== 'paper' && move !== 'scissors') {
        alert("Invalid play. Try again.");
        return playerMove();
    }
    
    return move;
}

function computerPlay () {
    let plays = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * 3);

    return plays[rand];
}

function playRound (pSelect, cpuSelect) {
    if (pSelect === cpuSelect) {
        alert("It's a tie! Play again!");
        return;
    } else if (pSelect === "rock") {
        if (cpuSelect === "paper") {
            alert(`You lose! ${cpuSelect} beats ${pSelect}!`);
            return false;
        } else {
            alert(`You win! ${pSelect} beats ${cpuSelect}!`);
            return true;
        }
    } else if (pSelect === "paper") {
        if (cpuSelect === "scissors") {
            alert(`You lose! ${cpuSelect} beats ${pSelect}!`);
            return false;
        } else {
            alert(`You win! ${pSelect} beats ${cpuSelect}!`);
            return true;
        }
    } else {
        if (cpuSelect === "rock") {
            alert(`You lose! ${cpuSelect} beats ${pSelect}!`);
            return false;
        } else {
            alert(`You win! ${pSelect} beats ${cpuSelect}!`);
            return true;
        }
    }
}

function game() {
    let didPlayerWin;
    let pWins = 0;
    let cpuWins = 0;
    let tryAgain;

    for (let i = 0; i < 5; i++) {
        didPlayerWin = playRound(playerMove(), computerPlay());

        if (didPlayerWin) {
            pWins++;
        } else if (!didPlayerWin) {
            cpuWins++;
        }
    }

    if (pWins > cpuWins) {
        alert(`You win! ${pWins} out of 5 rounds`);
    } else if (pWins < cpuWins) {
        alert(`You lose! ${pWins} out of 5 rounds`);
    } else {
        alert(`You tied! ${pWins} out of 5 rounds`);
    }

    tryAgain = confirm("Play again?");

    if (tryAgain) {
        game();
    }
}