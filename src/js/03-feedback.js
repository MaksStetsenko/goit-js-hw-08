import throttle from 'lodash.throttle';

// ================================================

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  messageInput: document.querySelector('.feedback-form textarea'),
};

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
    refs.messageInput.value = savingMessageParced.message;
    refs.emailInput.value = savingMessageParced.email;
  }
}

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(updatingForm, 500));
