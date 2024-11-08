import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const email = document.querySelector('input[type=email]');
const message = document.querySelector('textarea');

form.addEventListener(
  'input',
  throttle(() => {
    console.log('Email: ' + email.value);

    localStorage.setItem(
      localStorageKey,
      JSON.stringify({ email: email.value, message: message.value })
    );
  }, 500)
);

form.addEventListener('submit', evt => {
  console.log(`Email: ${email.value}`);
  console.log(`Message: ${message.value}`);

  localStorage.removeItem(localStorageKey);

  evt.preventDefault();
});

window.addEventListener('load', evt => {
  if (localStorage.getItem(localStorageKey) !== null) {
    storedValues = localStorage.getItem(localStorageKey);
    stored = JSON.parse(storedValues);
    email.value = stored.email;
    message.value = stored.message;
  }
});
