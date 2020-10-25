setInterval(() => {
  const time = new Date();
  const second = document.getElementById("second_hand");
  const minute = document.getElementById("minute_hand");
  const hour = document.getElementById("hour_hand");

  const hourTime = time.getHours();
  const minuteTime = time.getMinutes();
  const secondTime = time.getSeconds();

  const degSecond = (secondTime / 60) * 360 + 90;
  second.style.transform = `rotate(${degSecond}deg)`;

  const degMinute = (minuteTime / 60) * 360 + 90;
  minute.style.transform = `rotate(${degMinute}deg)`;

  const degHour = (hourTime / 12) * 360 + ((minuteTime / 60) * 360) / 12 + 90;
  hour.style.transform = `rotate(${degHour}deg)`;
}, 1000);
