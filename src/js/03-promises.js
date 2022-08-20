// 1 HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку в мілісекундах,
// крок збільшення затримки для кожного промісу після першого і кількість промісів, яку необхідно створити.

// 2 Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів,
//   скільки ввели в поле amount.Під час кожного виклику передай їй номер промісу(position), що створюється,
//     і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  let position = 0;
  let delay = Number(refs.delayEl.value);

  const step = Number(refs.stepEl.value);
  const amount = Number(refs.amountEl.value);
  setTimeout(() => {
    const intervalId = setInterval(() => {
      if (amount === position) {
        return clearInterval(intervalId);
      }
      position += 1;
      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      delay += step;
    }, step);
  }, delay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
