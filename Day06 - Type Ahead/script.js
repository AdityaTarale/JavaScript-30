const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

let cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));


// filter match object 
function findMatch(searchWord, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(searchWord, "gi"); // making variable for search word , search value dynamic //global insensitive
    return place.city.match(regex) || place.state.match(regex);
  });
}

function formatPopulation(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatch() {
  const matchArray = findMatch(this.value, cities);
  const html = matchArray.map((place) => {
    const regex = new RegExp(this.value, "gi"); //Checking single city and state name from each item
    const city = place.city.replace(
      regex,
      `<span class="hl">${this.value}</span>`
    );
    const state = place.state.replace(
      regex,
      `<span class="hl">${this.value}</span>`
    );

    return `<li>
      <span class="name">${city},${state}</span>
      <span class="population">${formatPopulation(place.population)}</span>
    </li>`;
  });

  suggestions.innerHTML = html;
}

search.addEventListener("change", displayMatch);
search.addEventListener("keyup", displayMatch);
