const trigger = document.querySelectorAll('a');

const highLight = document.createElement('span');
highLight.classList.add('highlight');

document.body.appendChild(highLight);

function highlight() {
  //   console.log('xyz');
  const link = this.getBoundingClientRect();
  // console.log(link)

  const linkCords = {
    width: link.width,
    height: link.height,
    //adding scroll value because when we scroll it should be placed at its place.
    left: link.left + window.scrollX,
    top: link.top + window.scrollY,
  };

  highLight.style.width = `${linkCords.width}px`;
  highLight.style.height = `${linkCords.height}px`;
  highLight.style.transform = `translate(${linkCords.left}px,${linkCords.top}px)`;
}

trigger.forEach((a) => {
  a.addEventListener('mouseenter', highlight);
});
