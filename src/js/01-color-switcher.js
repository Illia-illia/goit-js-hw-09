const refs = {
  bodyBg: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);
refs.stopBtn.setAttribute('disabled', 'true');

let idColorChanger = null;

function onStartClick() {
  refs.startBtn.setAttribute('disabled', 'true');
  refs.stopBtn.removeAttribute('disabled');
  startChangeBodyColor();
}
function onStopClick() {
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', 'true');
  stopChangeBodyColor();
}

function startChangeBodyColor() {
  idColorChanger = setInterval(() => {
    refs.bodyBg.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeBodyColor() {
  clearInterval(idColorChanger);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
