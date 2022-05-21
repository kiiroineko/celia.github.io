const nav = document.querySelector('nav');
const line = document.getElementById('line');
const myPreloader = document.querySelector('.preloader');

window.addEventListener('scroll',function() {
  const offset = window.pageYOffset;
  
  if(offset > 500){
    nav.classList.add('scroll')
    line.classList.add('line')
  }
  else 
    nav.classList.remove('scroll')
    line.classList.add('line')
   
});

function Clipboard_CopyTo(value) {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

document.querySelector('#Copy').onclick = function() {
  Clipboard_CopyTo('Kiiroineko#1607');
}

