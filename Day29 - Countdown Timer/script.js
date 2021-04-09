let countDown;
const timeLeft = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');

const timer = (seconds) => {
    const now = Date.now();
    const then = now + seconds * 1000;
    clearInterval(countDown);
    displayTimeLeft(seconds);
    displayEndTime(then);

    countDown = setInterval(() => {
        const secondsLeft = Math.floor((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            return;
            clearInterval(countDown);
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
};

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const reminaingSeconds = seconds % 60;
    timeLeft.textContent = `${minutes}:${
        reminaingSeconds < 10 ? '0' : ''
    }${reminaingSeconds}`;
}

function displayEndTime(timeStamp) {
    const time = new Date(timeStamp);
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const hours = time.getHours();

    timeEnd.textContent = `${hours}:${minutes}:${
        seconds < 10 ? '0' : ''
    }${seconds}`;
}

const buttons = document.querySelectorAll('.timer__button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const seconds = +button.dataset.time;
        timer(seconds);
    });
});

const form = document.querySelector('#custom');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    timer(+form.minutes.value * 60);
});
