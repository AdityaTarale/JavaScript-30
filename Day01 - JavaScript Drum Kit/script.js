window.addEventListener("keydown", (e) => {
  // button
  const button = document.querySelector(`.key[data-key='${e.keyCode}']`);
  button.classList.add("playing");
  setTimeout(() => {
    button.classList.remove("playing");
  }, 170);

  //sound
  const soundName = button.querySelector("span").innerText;
  const sound = document.createElement("audio");
  sound.setAttribute("src", `../sounds/${soundName}.wav`);
  sound.play();
});
