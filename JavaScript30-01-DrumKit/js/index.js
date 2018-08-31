function playSound(keyCode){
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if(!audio) return; // stop the function running
  audio.currentTime = 0 ; // initialise to start to make it faster
  audio.play();
  key.classList.add('playing');
}

// remove class 'playing' from a key having property name transform
function removeTransition(e)
{ if(e.propertyName !== 'transform')  return ; //Stop if its not transform
this.classList.remove('playing');
}

/*EVENT Listener */

const keys= document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // remove class from avtive key after transition end

window.addEventListener('keydown', e => playSound(e.keyCode)); //event for key press
keys.forEach(key => key.addEventListener('click', function(e){  playSound(this.getAttribute("data-key"))})); // mouce click event