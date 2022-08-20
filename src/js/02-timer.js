// 1 Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом "Please choose a date in the future".
// 2 Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
// 3 Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому.
// 4 Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту натискання.

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const fpicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let userDate = 0;
const fp = flatpickr(fpicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onChosenTime(selectedDates[0].getTime());
  },
});

btnStart.setAttribute('disabled', 'true');

function onChosenTime(setDate) {
  const nowDate = Date.now();
  const difference = setDate - nowDate;

  if (difference > 0) {
    btnStart.removeAttribute('disabled');
    return (userDate = setDate);
  }
  Notify.failure('Please choose a date in the future');
  btnStart.setAttribute('disabled', 'true');
}

btnStart.addEventListener('click', onBtnClick);

function onBtnClick() {
  btnStart.setAttribute('disabled', 'true');
  fpicker.setAttribute('disabled', 'true');
  const nowDate = Date.now();
  const difference = userDate - nowDate;
  onTimer(difference);
}

function onTimer(value) {
  const dataStart = Date.now();
  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const difference = currentTime - dataStart;
    let result = value - difference;
    onSetInterface(convertMs(result));
    if (result <= 1000) {
      fpicker.removeAttribute('disabled');
      return clearInterval(intervalId);
    }
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function onSetInterface({ days, hours, minutes, seconds }) {
  secondsEl.textContent = seconds;
  minutesEl.textContent = minutes;
  hoursEl.textContent = hours;
  daysEl.textContent = days;
}
