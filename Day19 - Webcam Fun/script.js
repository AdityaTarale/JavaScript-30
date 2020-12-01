const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const button = document.querySelector('button');

async function getVideo() {
  /* In older versions of the Media Source specification,
   attaching a stream to a <video> element required creating an
   object URL for the MediaStream.This is no longer necessary,
   and browsers are removing support for doing this.
 
   https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
   https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    */

  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  video.srcObject = mediaStream;
  video.play();
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    let pixel = ctx.getImageData(0, 0, width, height);

    // pixel = redEffect(pixel);

    pixel = rgbEffect(pixel);
    ctx.globalAlpha = 0.2;

    // pixel = greenEffect(pixel);

    ctx.putImageData(pixel, 0, 0);
  }, 150);
}

function takePhotos() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'img');
  link.innerHTML = `<img src="${data}" alt='img'/>`;
  strip.prepend(link);
}

function redEffect(pixel) {
  for (i = 0; i < pixel.data.length; i += 4) {
    pixel.data[i + 0] = pixel.data[i + 0] + 100;
    pixel.data[i + 1] = pixel.data[i + 1] - 50;
    pixel.data[i + 3] = pixel.data[i + 3] - 0.5;
  }
  return pixel;
}
function rgbEffect(pixel) {
  for (i = 0; i < pixel.data.length; i += 4) {
    pixel.data[i - 50] = pixel.data[i + 0];
    pixel.data[i + 100] = pixel.data[i + 1];
    pixel.data[i - 250] = pixel.data[i + 3];
  }
  return pixel;
}

function greenEffect(pixel) {
  const level = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    level[input.name] = input.value;
  });
  // console.log(level);

  for (i = 0; i < pixel.data.length; i = i + 4) {
    red = pixel.data[i + 0];
    blue = pixel.data[i + 1];
    green = pixel.data[i + 2];
    alpha = pixel.data[i + 3];

    if (
      red < level.rmin &&
      blue < level.bmin &&
      green < level.gmin &&
      red > level.rmax &&
      blue > level.bmax &&
      green > level.gmax
    ) {
      // take the aplha of pixel out
      pixel.data[i + 3] = 0;
    }
  }

  return pixel;
}

getVideo();
video.addEventListener('canplay', paintToCanvas);
button.addEventListener('click', takePhotos);
