const checkboxes = document.querySelectorAll('.item input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    //Check if shift key is down
    //And checkbox is checked

    checkboxes.forEach((checkbox) => {
    //   console.log(checkbox);
      if (checkbox == lastChecked || checkbox == this) {
        inBetween = !inBetween;
        // console.log('starting checking', inBetween);
      }
      if (inBetween) { //if inBetween stay 'true' is will mark as checked
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck);
});
