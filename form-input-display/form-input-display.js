function nameHandler(e) {
  // keyCode 13 is Enter
  if(e.keyCode == 13) {
    let nameInput = document.getElementById('nameInput')
    let nameField = document.getElementById('nameField')
    nameField.innerHTML = nameInput.value
    nameField.style.textTransform = 'capitalize';
  }
}

document.addEventListener('keyup', nameHandler);
