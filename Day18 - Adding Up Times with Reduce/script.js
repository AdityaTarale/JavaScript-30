const timeNode = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNode
    .map(node => node.dataset.time)
    .map(timeNode => {          //to convert into int from string or we can use +
        const [min, sec] = timeNode.split(':').map(parseFloat);
        // console.log(min, sec);
        return (min * 60) + sec;
    }).reduce((acc, curr) => (acc + curr), 0);


let secondsLeft = seconds;
const hour = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const min = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`%c${hour}:${min}:${secondsLeft}` ,'font-size:32px;background-color:orange')



