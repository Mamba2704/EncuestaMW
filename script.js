const checkbox = document.getElementById('checkotros');
const checkboxmovil = document.getElementById('checkotrosmovil');
const textarea = document.getElementById('textarea1');
selector =  document.getElementById('selector-experiencia');
/* BORRAR EN CASO DE NO NECESITAR
checkbox.addEventListener('click', function handleClick() {
  if (checkbox.checked) {
    textarea.style.visibility = 'visible';
  } else {
    textarea.style.visibility = 'hidden';
  }
});*/


/*
 function otrosTextarea(index) {
  if (index === 4) {
    textarea.style.visibility = 'visible';
  } else {
    textarea.style.visibility = 'hidden';
  }
};*/

checkbox.addEventListener('click', function handleClick() {
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//validaciones de campos

const puntajelist = document.getElementsByName('puntaje');
const checkboxlist = document.getElementsByName('check');
const button = document.getElementById('button');

button.addEventListener('click', function verificacion(listapuntaje) {
  let puntajeAlgunoChecked = false;
  let checkAlgunoChecked = false;

  puntajelist.forEach(radio => {
    if (radio.checked) {
      puntajeAlgunoChecked = true;
    }
  });

  checkboxlist.forEach(check => {
    if (check.checked) {
      checkAlgunoChecked = true;
    }
  });

  if (!puntajeAlgunoChecked || !checkAlgunoChecked) {
    alert('Por favor, seleccione un puntaje y marque al menos una opción :(:(');
  }
});






















