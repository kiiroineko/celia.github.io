const nav = document.querySelector('nav');


window.addEventListener('scroll',function() {
  const offset = window.pageYOffset;
  
  if(offset > 900){
    nav.classList.add('scroll')
  }
  else 
    nav.classList.remove('scroll')
   
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
