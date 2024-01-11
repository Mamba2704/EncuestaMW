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

const puntajeList = document.getElementsByName('puntaje');
const checkboxList = document.getElementsByName('check');
const puntajeMovilList = document.getElementsByName('puntajemovil');
const checkboxMovilList = document.getElementsByName('checkmovil');
const button = document.getElementById('button');
const cajaCheckbox = document.getElementById('caja-checkbox')
const esMovil = window.getComputedStyle(cajaCheckbox).getPropertyValue("display") == 'none'

button.addEventListener('click', function verificacionesCampos() {
  if (esMovil){
    verificacionesPuntajeYCheckboxMovil(puntajeMovilList,checkboxMovilList)
  } else {
    verificacionesPuntajeYCheckbox(puntajeList, checkboxList)
  }
});

//verifica que tanto el puntaje como el checkbox tengan al menos una opcion seleccionada
function verificacionesPuntajeYCheckboxMovil(listapuntaje,listacheckbox) {
  const puntajeChecked = verificacionPuntaje(listapuntaje);
  const checkChecked = verificacionCheck(listacheckbox);

  if (!puntajeChecked || !checkChecked) {
    alert('Por favor, seleccione un puntaje y marque al menos una opción :(:(');
  }
}

//verifica que haya al menos un puntaje seleccionado
function verificacionPuntaje(lista){
  let puntajeAlgunoChecked = false;
  lista.forEach(radio => {
    if (radio.selected) {
      puntajeAlgunoChecked = true;
    }
  })
  return puntajeAlgunoChecked;
}

//verifica que haya al menos un checkbox seleccionado
function verificacionCheck(lista){
  let checkAlgunoChecked = false;
  lista.forEach(check => {
    if (check.selected) {
      checkAlgunoChecked = true;
    }
  })
  return checkAlgunoChecked;
}



/*
const puntajelist = document.getElementsByName('puntaje');
const checkboxlist = document.getElementsByName('check');
const puntajeMovilList = document.getElementsByName('puntajemovil');
const checkboxMovilList = document.getElementsByName('checkmovil');
const button = document.getElementById('button');

function verificacionPuntaje(){
  let puntajeAlgunoChecked = false;
  puntajelist.forEach(radio => {
    if (radio.checked) {
      puntajeAlgunoChecked = true;
    }
  })
  return puntajeAlgunoChecked;
}

function verificacionCheck(){
  let checkAlgunoChecked = false;
  checkboxlist.forEach(check => {
    if (check.checked) {
      checkAlgunoChecked = true;
    }
  })
  return checkAlgunoChecked;
}

function verificacionCamposCompletos() {
  const puntajeChecked = verificacionPuntaje();
  const checkChecked = verificacionCheck();

  if (!puntajeChecked || !checkChecked) {
    alert('Por favor, seleccione un puntaje y marque al menos una opción :(:(');
  }
}

button.addEventListener('click', function verificacionesCampos() {
  verificacionCamposCompletos();
});
*/









/*
button.addEventListener('click', function verificacion() {
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
*/























