// start with strings, numbers and booleans //copying
let age = 100;
let age2 = age;
console.table(age, age2)
age = 200;
console.table(age, age2);

let name = 'wes';
let name2 = name;
console.table(name, name2);
name = 'wesley'
console.table(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.table(players, team);
team[3] = 'Lux';
console.log(players); //reference

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
team2[3] = 'Lux';
console.log(players,team2)
// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'xyz';
console.log(team4,players)

team4[3] = 'heee hawww';
console.log(team4);

const team5 = Array.from(players);
team5[3] = 'yoyo';
console.log(team5)
console.log(players)

// now when we update it, the original one isn't changed


// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80,
};

// and think we make a copy: // we made refernce
const captain = person;
captain.age = 99;
console.log(person,captain)
// how do we take a copy instead?

const cap2 = Object.assign({}, person, { age: 44 ,lens:true});
console.log(cap2,person)

// We will hopefully soon see the object ...spread;

const cap3 = { ...person };
cap3.age = 22;
cap3.number = 11;
console.log(cap3,person)

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const abc = {
    name: 'abc',
    age: 80,
    social: {
        linkedIn: '@abc',
        youtube:'#a_b_c',
    }
}

console.clear();
console.table(abc);

const dev = Object.assign({}, abc, { name: 'xyz' }); //only 1 level of object
console.table(dev)

dev.social.linkedIn = '@coolman';  //making reference
console.log(dev);
console.table(abc);

const dev2 = JSON.parse(JSON.stringify(abc)); // to make clone
dev2.social.youtube = '@xyz';
console.table(dev2);
console.table(abc)