import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const fpicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const nowDate = Date.now();
const fp = flatpickr(fpicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onChoseTime(selectedDates[0].getTime());
  },
});

btnStart.setAttribute('disabled', 'true');

function onChoseTime(setDate) {
  const diference = setDate - nowDate;
  if (diference > 0) {
    btnStart.removeAttribute('disabled');
    return console.log(convertMs(diference));
  }
  Notify.failure('Please choose a date in the future');
  btnStart.setAttribute('disabled', 'true');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// const timer1 = {
//   start() {
//     const dataStart = Date.now();
//     setInterval(() => {
//       const currentTime = Date.now();
//       console.log(currentTime + dataStart);
//     }, 1000);
//   },
// };
// timer1.start();
