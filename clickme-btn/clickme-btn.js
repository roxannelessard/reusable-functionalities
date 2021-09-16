
  let clicks = 0;

  function clickHandler() {
    clicks++;
    const numClicksSpan = document.getElementById('numClicks');
    if (clicks == 1)
      numClicksSpan.innerHTML = 'once';
    else
      numClicksSpan.innerHTML = clicks + ' ' + 'times'
  }

  const button = document.getElementById('clickMe');
  button.addEventListener('click', clickHandler);
