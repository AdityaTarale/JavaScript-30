const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
];

// replace the articles with empty space

function hideArticles(string) {
    return string.replace(/^(an?|a|the)\s/i, '').trim(); //test here: https://regex101.com/
}


const sortedBands = bands.sort((a, b) => {
    return hideArticles(a) > hideArticles(b) ? 1 : -1;
})



document.querySelector('#bands').innerHTML = sortedBands
    .map((item) => `<li>${item}</li>`)
    .join('');
