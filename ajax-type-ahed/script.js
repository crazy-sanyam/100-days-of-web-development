const endpoint = 'data.json';
// console.log(endpoint[1]);
let cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function find(word, cities) {
    return cities.filter(place => {
        const regx = new RegExp(word, 'gi');
        return place.city.match(regx) || place.state.match(regx);
    });
}

function displayMatches() {
    const matchArray = find(this.value, cities);
    const html = matchArray.map(place => {
        return `
        <li>
        <span class="name">${place.city}, ${place.state}</span><br><span class="population"> ${place.populationIn2011}</span>
        `
    });
    suggestions.innerHTML = html;
    // console.log(matchArray);
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);