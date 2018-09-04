const inputs = document.querySelectorAll('.setting input');

function changeSettings(){
  const suffix = this.dataset.sizing || ''; 
  
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', changeSettings));
inputs.forEach(input => input.addEventListener('mousemove', changeSettings));