// 1 HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку в мілісекундах,
// крок збільшення затримки для кожного промісу після першого і кількість промісів, яку необхідно створити.

// 2 Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів,
//   скільки ввели в поле amount.Під час кожного виклику передай їй номер промісу(position), що створюється,
//     і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  const {
    delay: delayInput,
    step: stepInput,
    amount: amountInput,
  } = e.currentTarget.elements;

  let position = 0;
  let delay = Number(delayInput.value);
  let step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  if ((delay || amount) < 0) {
    e.currentTarget.reset();
    return Notify.warning('Write positive values');
  }

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
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
