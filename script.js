const checkbox = document.getElementById('checkotros');
const checkboxmovil = document.getElementById('checkotrosmovil');
const textarea = document.getElementById('textarea1');
selector =  document.getElementById('selector-experiencia');
/*
checkbox.addEventListener('click', function handleClick() {
  if (checkbox.checked) {
    textarea.style.visibility = 'visible';
  } else {
    textarea.style.visibility = 'hidden';
  }
});*/

checkbox.addEventListener('click', function handleClick() {
  alert('click')
  if (checkbox.checked) {
    textarea.style.visibility = 'visible';
  } else {
    textarea.style.visibility = 'hidden';
  }
});

selector.addEventListener('change', function handleClick() {
    if (this.value == "Otros") {
      textarea.style.visibility = 'visible';
    }else {
      textarea.style.visibility = 'hidden';
    }
});



/*
 function otrosTextarea(index) {
  if (index === 4) {
    textarea.style.visibility = 'visible';
  } else {
    textarea.style.visibility = 'hidden';
  }
};*/
