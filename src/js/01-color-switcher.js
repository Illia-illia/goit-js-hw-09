bodyBg = document.querySelector('body');
startBtn = document.querySelector('button[data-start]');
stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);
stopBtn.setAttribute('disabled', 'true');

let idColorChanger = null;

function onStartClick() {
  startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
  startChangeBodyColor();
}
function onStopClick() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
  stopChangeBodyColor();
}

function startChangeBodyColor() {
  idColorChanger = setInterval(() => {
    bodyBg.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeBodyColor() {
  clearInterval(idColorChanger);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
