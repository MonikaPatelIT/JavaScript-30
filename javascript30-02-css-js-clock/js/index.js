const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setDate()
{
  const now = new Date();
  const second= now.getSeconds();
  const secondDegree = ((second / 60) * 360) + 90; // get desgree from seconds
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  
  
  const minute= now.getMinutes();
  const minuteDegree = ((minute / 60) * 360) + 90; // get desgree from minute
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  
  const hour= now.getHours();
  const hourDegree = ((hour / 12) * 360) + 90; // get desgree from hours
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  
  console.log(second);
  
  // fix second-hand transition efect when reach to 444deg or 90deg  by removing transition time
  if (secondDegree === 444 || secondDegree === 90) {
     secondHand.style.transition = "all 0s ease 0s";
   } else {
     secondHand.style.transition = "all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s";
   }
 

}

setInterval(setDate, 1000);