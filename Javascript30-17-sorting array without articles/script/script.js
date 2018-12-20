const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripArticlesOut(name){
return name.replace(/^(a |an |the )/i, '').trim();
}

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
  }

const sortedList = bands.sort((a,b) => ((stripArticlesOut(a) > stripArticlesOut(b) ) ? 1 :-1 ));

document.querySelector('#bands').innerHTML= sortedList.map(band => `<li>${band}</li>` ).join('');

console.log(sortedList);