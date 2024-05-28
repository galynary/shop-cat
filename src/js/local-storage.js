/*додавання даних до локал сторедж*/
/*localStorage.setItem('data', json.stringify({ name: 'Mango', age: 5 }));*/

/*отримання даних локал сторедж*/
const saveData = localStorage.getItem('data');
console.log('saveData', saveData);

/*парсимо дані локал сторедж*/
const parsedData = JSON.parse(saveData);
console.log('parsedData', parsedData);

/*завдання відгук пишемо і зберігаємо у локал сторедж*/
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const textarea = document.querySelector('.feedback-form-textarea');

  form.addEventListener('submit', onSubmit);
  textarea.addEventListener('input', onChangeInput);

  const STORAGE_KEY = 'feedback-msg';
  const formData = {};

  /*додаємо дані у localStorage*/
  function onChangeInput(evt) {
    const message = evt.target.value;
    console.log(message);
    localStorage.setItem(STORAGE_KEY, message);
  }

  /*Якщщо дані вже є у локал сторедж то вони зберігаються навіть при оновлені сторінки*/
  function populateTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    if (saveMessage) {
      textarea.value = saveMessage;
    }
  }
  populateTextarea();

  /*отримуємо дані з форми*/
  form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;
    console.log(formData);
  });

  /*відпавка нашого відгуку і одночасно видаляємо дані з localStorage*/
  function onSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
});
