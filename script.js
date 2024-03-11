const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}
function updateScoreElement() {
    document.querySelector('.js-score').innerHTML =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove() {
    const randonNumber = Math.random();
    let computerMove = '';
    if (randonNumber >= 0 && randonNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randonNumber >= 1 / 3 && randonNumber < 2 / 3) {
        computerMove = 'Paper'
    } else if (randonNumber >= 2 / 3 && randonNumber < 1) {
        computerMove = 'Scissors'
    }
    return computerMove;
}
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You Lose.'
        } else if (computerMove === 'Scissors') {
            result = 'You Win.'
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win.';
        } else if (computerMove === 'Paper') {
            result = 'Tie.'
        } else if (computerMove === 'Scissors') {
            result = 'You Lose.'
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose.';
        } else if (computerMove === 'Paper') {
            result = 'You Win.'
        } else if (computerMove === 'Scissors') {
            result = 'Tie.'
        }
    }
    if (result === 'You Win.') {
        score.wins += 1;
    } else if (result === 'You Lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1
    }
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="Images/${playerMove}-emoji.png" alt="${playerMove}"><img class="move-icon" src="Images/${computerMove}-emoji.png" alt="${computerMove}"> Computer`;
//     window.alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}
function resetScore() {
    score.losses = 0;
    score.wins = 0;
    score.ties = 0;
    updateScoreElement();
    localStorage.removeItem('score');
}