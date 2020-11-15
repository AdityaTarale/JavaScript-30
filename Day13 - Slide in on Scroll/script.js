const slideImg = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
    slideImg.forEach(img => {
        // half way of img 
        const slideIsAt = (window.scrollY + window.innerHeight) - img.height / 2;
        // console.log(slideIsAt)

        // bottom of img 
        const isAtBottom = img.offsetTop+img.height
        // console.log(isAtBottom)

        // to check img half passed 
        const isHalfPast = slideIsAt > img.offsetTop;
        // console.log(isHalfPast)

        const isScrollPast = window.scrollY < isAtBottom;

        if (isHalfPast & isScrollPast) {
            img.classList.add('active')
        } else {
            img.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));
