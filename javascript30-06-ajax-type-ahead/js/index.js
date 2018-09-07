const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'; // data files 

const cities = [];

fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data)); // fetch json data into cities array


// convert number into comma seperated number format - from stack overflow
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//get the mached records 
function findMatch(wordToMatch, cities){
  return cities.filter(place => {
    const regex= new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  })
}

//  dynamically generate list
function displayMatches(){
  const match = findMatch(this.value, cities);
  
  const html = match.map(data => {
    const regex = new RegExp(this.value, 'gi');
  const cityName = data.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = data.state.replace(regex, `<span class="hl">${this.value}</span>`);
                return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(data.population)}</span>
      </li>
    `;
  }).join('');
  suggestion.innerHTML = html;
}

const search = document.querySelector('.search'); // get search box 
const suggestion = document.querySelector('.suggestions'); // get the suggestion list

/* Event listeners*/
search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);