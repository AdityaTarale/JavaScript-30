const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
var lastHole;
var timeup = false;
var score = 0;

function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    if (lastHole === holes[index]) {
        console.log('reapeated hole');
        return randomHole(holes);
    }
    lastHole = holes[index];
    return holes[index];
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);

    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeup) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeup = false;
    score = 0;
    peep();
    setTimeout(() => {
        timeup = true;
    }, 10000);
}

function bonk(e) {
    if (!e.isTrusted) return;
    this.classList.remove('up');
    score++;
    console.log(score);
    scoreBoard.textContent = score;
}

moles.forEach((mole) => {
    mole.addEventListener('click', bonk);
});
