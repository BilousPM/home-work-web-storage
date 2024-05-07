import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', saveValuesInputsFilds);
formRef.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
const data = {};

chekStorageData();

function saveValuesInputsFilds(e) {
  data[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function chekStorageData() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!saveMessage) {
    return;
  }
  formRef.email.value = saveMessage.email || '';
  formRef.message.value = saveMessage.message || '';
  data.email = formRef.email.value;
  data.message = formRef.message.value;
}

function onFormSubmit(e) {
  if (e.target.email.value === '' || e.target.message.value === '') {
    return;
  } else {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(data);
  }
}
