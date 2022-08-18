import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const fpicker = document.querySelector('#datetime-picker');
const fp = flatpickr(fpicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

console.log(fp);
