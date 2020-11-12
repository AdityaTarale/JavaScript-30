//??Get our elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const fs=player.querySelector('.fs')

//!!Build out function
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  if (video.paused) {
    toggle.textContent = '►';
  } else if (video.play) {
    toggle.textContent = '❚❚';
  }
}

function skip(e) {
  // console.log(this.dataset);
  video.currentTime += +this.dataset.skip;
}

function handleRangeUpdate() {
  //   console.log(this.value, this.name);
  video[this.name] = this.value;
}

function handleProgress() {
  let percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

//??Hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => {
  button.addEventListener('click', skip);
});

ranges.forEach((range) => {
  range.addEventListener('change', handleRangeUpdate);
  range.addEventListener('mousemove', handleRangeUpdate);
});

video.addEventListener('timeupdate', handleProgress);

function scrub(e) {
  const time = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = time;
}

progress.addEventListener('click', scrub);

let mouseDown = false;
progress.addEventListener('mousedown', () => (mouseDown = true));
progress.addEventListener('mouseup', () => (mouseDown = false));
progress.addEventListener('mousemove', () => mouseDown && scrub(e));

fs.addEventListener('click',()=>video.requestFullscreen())