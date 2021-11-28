function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const body = document.querySelector('body');
  const startBtn = document.querySelector('button[data-start]');
  const stopBtn = document.querySelector('button[data-stop]');
  
  startBtn.addEventListener('click', startSwitcher);
  stopBtn.addEventListener('click', stopSwitcher);
  let color = null;
  let timerId = null;
  
  function onBodyColorChange() {
    color = getRandomHexColor();
    body.style.backgroundColor = `${color}`;
  }
  
  function startSwitcher() {
    timerId = setInterval(onBodyColorChange, 1000);
    startBtn.disabled = true;
  }
  
  function stopSwitcher() {
    startBtn.disabled = false;
    clearInterval(timerId);
  }
