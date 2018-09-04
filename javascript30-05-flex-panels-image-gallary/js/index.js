const panelList = document.querySelectorAll('.panel'); // get all the panel from document

// expand panel on click
function expandPanel(){
   this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
   let innerSpan = this.querySelector('span'); // get the inner span from specific panel  
    innerSpan.classList.toggle('word'); // toggle on word class
   
  }
}
/* Event Listener */
panelList.forEach(panel => panel.addEventListener('click', expandPanel)); // Panel click event 

panelList.forEach(panel => panel.addEventListener('transitionend', toggleActive));
// Panel transitionend event