const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

let lastCheck ;
function handleCheck(e){
  let inBetween = false;
  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox===lastCheck){
         inBetween = !inBetween;
        console.log('start in between');
         }
      if(inBetween){
        checkbox.checked= true;
      }
    });
  }
  lastCheck = this;
}