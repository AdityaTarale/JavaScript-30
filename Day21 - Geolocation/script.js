const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed');

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);

    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}.deg)`; //to simulate the arrow we need xCode
  },
  (err) => {
    console.log(err);
    alert('Oh nooo!');
  }
);
