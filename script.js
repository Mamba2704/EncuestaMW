const checkbox = document.getElementById('checkotros');
const checkboxmovil = document.getElementById('checkotrosmovil');
const textarea = document.getElementById('textarea1');

/*
checkbox.addEventListener('click', function handleClick() {
  if (checkbox.checked) {
    textarea.style.visibility = 'visible';
  } else {
    textarea.style.visibility = 'hidden';
  }
});*/

checkbox.addEventListener('click', function handleClick() {
  if (checkbox.checked) {
    textarea.style.visibility = 'visible';
  } else {
    textarea.style.visibility = 'hidden';
  }
});

checkboxmovil.addEventListener('touchstart', function handleClick() {
  if (checkboxmovil.checked) {
    textarea.style.visibility = 'visible';
  } else {
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
