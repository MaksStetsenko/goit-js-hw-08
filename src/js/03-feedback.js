import throttle from 'lodash.throttle';

// ================================================

const form = document.querySelector('.feedback-form');

const emailInput = document.querySelector('.feedback-form input');

const messageInput = document.querySelector('.feedback-form textarea');

// ==================================================

const STORAGE_KEY = "'feedback-form-state'";

const formData = {};

resetFormContent();

const onFormSubmit = event => {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

function updatingForm(event) {
  formData[event.target.name] = event.target.value;
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function resetFormContent() {
  const savingMessage = localStorage.getItem(STORAGE_KEY);
  const savingMessageParced = JSON.parse(savingMessage);

  if (savingMessage) {
    messageInput.value = savingMessageParced.message;
    emailInput.value = savingMessageParced.email;
  }
}

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', throttle(updatingForm, 500));
