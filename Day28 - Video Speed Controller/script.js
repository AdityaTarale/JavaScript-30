const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handlePlayBack(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const height = Math.round(percent * 100) + '%';
    const [min, max] = [0.4, 4];
    const playRate = percent * (max - min) + min;

    bar.style.height = height;
    bar.textContent = playRate.toFixed(1) + `x`;
    video.playbackRate = playRate;
}

speed.addEventListener('mousemove', handlePlayBack);
