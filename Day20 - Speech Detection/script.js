window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
//firebox                     chrome

//making instance
const recognition = new SpeechRecognition();
recognition.interimResults = true; //to create new paragraph when we stop
recognition.lang = 'en-US';

let p = document.createElement('p');
const word = document.querySelector('.words');
word.appendChild(p);

recognition.addEventListener('result', (e) => {
  // console.log(e)
  // console.log(e.results);

  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  // console.log(transcript)

  p.textContent = transcript;

  //when we done , we create new paragraph
  if (e.results[0].isFinal) {
    // true
    p = document.createElement('p');
    word.appendChild(p);
  }
});

//after ending result event we run end event to start listening again
recognition.addEventListener('end', recognition.start);

recognition.start();
