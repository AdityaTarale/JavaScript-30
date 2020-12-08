const nav = document.querySelector('#main');
const navTop = nav.offsetTop;

function fixNav() {
    // console.log(navTop,window.scrollY)
    if (window.scrollY >= navTop) {
        document.body.classList.add('fixed-Nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-Nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);
