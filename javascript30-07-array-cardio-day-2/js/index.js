 const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 },
    { name: 'Lux', year: 2011 }
      ];
const paragraph = document.querySelector('p');

function updateStyle()
{
  
  paragraph.style.color = 'gray';
    paragraph.style.fontSize = '50px';

}

paragraph.addEventListener('click', updateStyle);


//regular 

console.log('JavaScript function names are case sensitive');

//style tex
console.log('%c You have to be very careful writing javascript', 'color:yellow; background:red;');

//warn 
console.warn('Very Careful');

//Error 
console.error('fontsize doesnot exit');

//info 
console.info('Use camel case forn in Javascript');

console.assert(paragraph.innerHTML == 'Hello Monika', 'This is wrong');

//viewing dom eleemnt 
console.log(paragraph);

console.dir(paragraph);

//grouping togather

people.forEach(person =>{
              console.group(`${person.name}`);
  console.log(`I am ${person.name} born in ${person.year}.`);
   console.groupEnd(`${person.name}`);
              
});

//count occarcne of string

console.count('monika');
console.count('monika');
console.count('monika');

//timing
console.time('time-spend');

// do something 
console.timeEnd('time-spend');