function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = `#BADA55`;
    p.style.fontSize = '50px';
}

const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'hugo', age: 8 },
];

//Regular
console.log('hello');

//Interpolated
console.log('hello iam a %s string', 'k');

//Styled
console.log(
    '%c JavaScript',
    'font-size:50px;background:orange;text-shadow:5px 5px blue'
);

//warning
// console.warn('Oh Noo')

//Error
// console.error('Shit!')

//Info
console.info('testing...');

//Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');
console.assert(1 === 2, 'You did not select the right Element'); //when assert

//clearing
// console.clear();

//viewing dom element
console.log(p); //acutal element
console.dir(p); //show properties and method of element

//Grouping together
dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`); //or group
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} old`);
    console.groupEnd(`${dog.name}`);
});

//Counting
console.count('a');
console.count('a');
console.count('b');
console.count('a');
console.count('a');
console.count('b');
console.count('b');
console.count('b');

//timing
console.time('fetching data');
fetch('https://api.github.com/users/AdityaTarale')
    .then((res) => res.json())
    .then((data) => {
        console.timeEnd('fetching data');
        console.log(data);
        performance.now();
    });

// or
// const t0=performance.now();
//const t1=performance.now();
// (t1-t0)

//table
console.table(dogs);
