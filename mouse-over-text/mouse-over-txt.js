
  function makebold() {
    const highlightDivs = document.getElementsByClassName('highlightText');
    // iterate over each element of highlightDivs array
    for (let i = 0; i < highlightDivs.lenght; i++) {
      highlightDivs[i].style.color = 'red';
      highlightDivs[i].style.fontWeight = 'bold';
    }
  }

  function restore() {
    const highlightDivs = document.getElementsByClassName('highlightText');
    for (let i = 0; i < highlightDivs.lenght; i++) {
      highlightDivs[i].style.color = 'black';
      highlightDivs[i].style.fontWeight = 'normal';
    }
  }

  let mouseOvermeDiv = document.getElementById('mouseOverme');
  mouseOvermeDiv.addEventListener('mouseover', makebold);
  mouseOvermeDiv.addEventListener('mouseout', restore);
