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

  let iterator = 0;
  let delay = Number(refs.delayEl.value);
  const step = Number(refs.stepEl.value);
  const amount = Number(refs.amountEl.value);

  if (step === 0) {
    setTimeout(() => {
      const intervalID = setInterval(() => {
        iterator += 1;
        createPromise(iterator, delay);
        if (amount === iterator) {
          return clearInterval(intervalID);
        }
      }, 0);
    }, delay);
  } else {
    const intervalID = setInterval(() => {
      iterator += 1;
      createPromise(iterator, delay);
      delay += step;
      if (amount === iterator) {
        return clearInterval(intervalID);
      }
    }, delay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}
