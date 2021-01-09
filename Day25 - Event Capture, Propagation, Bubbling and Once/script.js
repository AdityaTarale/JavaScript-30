const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);

    e.stopPropagation()
    // stop bubbling.
}

divs.forEach((div) => {
    div.addEventListener('click', logText, {

        // capture: true, //from top to bottom default value is false

        // once: true,
    });
});

document.querySelector('button').addEventListener(
    'click',
    () => {
        console.log('button click');
        console.count();
    },
    {
        once: true, //to run the event for once
    }
);
