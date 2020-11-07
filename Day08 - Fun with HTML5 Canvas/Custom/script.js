const canvas = document.querySelector('#draw');
const input = document.querySelectorAll('input');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.strokeStyle = `#000000`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 12;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath(); //reset and begin path
  //start
  ctx.moveTo(lastX, lastY);
  //goto
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

//Event listeners
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', () => (isDrawing = false));
canvas.addEventListener('mouseup', () => (isDrawing = false));

// To change color and thickness
input.forEach((input) => {
  input.addEventListener('change', () => {
    if (input.value.includes('#')) {
      ctx.strokeStyle = `${input.value}`;
    } else {
      ctx.lineWidth = `${input.value}`;
    }
  });
});
