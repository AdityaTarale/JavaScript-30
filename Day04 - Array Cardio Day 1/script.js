const inventers = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventers.filter(
  (inventer) => inventer.year > 1500 && inventer.year <= 1600
);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const names = inventers.map((inventer) => inventer.first + " " + inventer.last);
console.table(names);

// Array.prototype.sort()
// 3. Sort the inventors by birth date, oldest to youngest
// inventers.sort((a, b) => (a.year > b.year ? 1 : -1));
inventers.sort((a, b) => a.year - b.year);
console.table(inventers);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const livedTogether = inventers.reduce(
  (acc, curr) => (acc += curr.passed - curr.year),
  0
);
console.log("All the inventers live together for", livedTogether, "year");

// 5. Sort the inventors by years lived
inventers.sort((a, b) => a.passed - a.year - (b.passed - b.year));
console.table(inventers);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const wiki = document.querySelector(".mw-category");
// const links = [...wiki.querySelectorAll("a")]; //converting nodelist into array using spread

// const result = links
//   .map((link) => link.textContent)
//   .filter((link) => link.includes("de"));
// //contains() method determines whether a Node is contains the specific DOM node contains(span)
// //includes() method determines whether a string include the characters of a specified string. includes('character')
// console.table(result);

// 7. sort Exercise
const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];
// Sort the people alphabetically by last name
const alpha=people.sort((a, b) => {
  const [alastname, afirstname] = a.split(", ");
  const [blastname, bfirstname] = b.split(", ");

  return alastname > blastname?1:-1
});
console.table(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "driver",
];

const dataSum = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0; //making key : value pair
  }
  obj[item]++;
  return obj;
}, {});

console.table(dataSum);
