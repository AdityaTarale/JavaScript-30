/*gif from github WeiChiaChang/easter-egg-collection */

var data =
  'https://weichiachang.github.io/easter-eggs-mobile/images/kumamon.gif';
const container = document.querySelector('.container');

function kumamon() {
  var shock = document.createElement('div');
  var img = new Image();
  img.src = data;
  img.style.width = '400px';
  img.style.height = '500px';
  img.style.transition = '10s all';
  img.style.position = 'fixed';
  img.style.left = 'calc(50% - 200px)';
  img.style.bottom = '-200px';
  img.style.zIndex = 999999;

  document.body.appendChild(img);

  window.setTimeout(function () {
    img.style.bottom = '0px';
  }, 30);

  window.setTimeout(function () {
    img.style.bottom = '-600px';
  }, 18300);
}

const secretCode = 'webdev';

const pressed = [];

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); //index position , number of item to be removed
  console.log(pressed.join(''));
  if (pressed.join('').includes(secretCode)) {
    kumamon();
    container.innerHTML = '<h1>Key sequence matched</h1>';
    setTimeout(() => {
      container.innerHTML = '<h1>Enter Secret Code</h1>';
    }, 21000);
    
    console.log('key sequence detected');
  }
});
