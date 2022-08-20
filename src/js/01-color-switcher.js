r = {
  bodyBg: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

r.startBtn.addEventListener('click', onStartClick);
r.stopBtn.addEventListener('click', onStopClick);
r.stopBtn.setAttribute('disabled', 'true');

let idColorChanger = null;

function onStartClick() {
  r.startBtn.setAttribute('disabled', 'true');
  r.stopBtn.removeAttribute('disabled');
  startChangeBodyColor();
}
function onStopClick() {
  r.startBtn.removeAttribute('disabled');
  r.stopBtn.setAttribute('disabled', 'true');
  stopChangeBodyColor();
}

function startChangeBodyColor() {
  idColorChanger = setInterval(() => {
    r.bodyBg.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeBodyColor() {
  clearInterval(idColorChanger);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
