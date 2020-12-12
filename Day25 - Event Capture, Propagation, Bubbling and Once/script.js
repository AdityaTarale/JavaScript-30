const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation() 
}

divs.forEach((div) => {
    div.addEventListener('click', logText, {
        // capture:true

        // once:true
    });
});

document.querySelector('button').addEventListener('click', () => {
    console.log('button click');
    console.count();
});
