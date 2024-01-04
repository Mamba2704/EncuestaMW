const checkbox = document.getElementById('checkotros');

const textarea = document.getElementById('textarea1');

checkbox.addEventListener('click', function handleClick() {
  if (checkbox.checked) {
    textarea.style.visibility = 'visible';
  } else {
    textarea.style.visibility = 'hidden';
  }
});