const STORAGE_KEY = 'feedback-form-state';

const formElem = document.querySelector('.feedback-form');

formElem.addEventListener('input', () => {
  const formData = new FormData(formElem);
  const email = formData.get('email');
  const message = formData.get('message');

  const data = { email, message };
  saveToLS('userData', data);
  console.log(email, message);
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  console.log(localStorage.setItem(key, jsonData));
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS('userData');
  formElem.elements.email.value = data?.email || '';
  formElem.elements.message.value = data?.message || '';
});

formElem.addEventListener('submit', e => {
  e.preventDefault();

  if (
    formElem.elements.email.value === '' ||
    formElem.elements.message.value === ''
  ) {
    prompt`Fill please all fields`;
  } else {
    const formData = new FormData(formElem);
    const email = formData.get('email');
    const message = formData.get('message');

    const data = { email, message };

    console.log(data);

    formElem.reset();
    localStorage.removeItem('userData');
  }
});
