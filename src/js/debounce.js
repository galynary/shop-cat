const inputRef = document.querySelector('.input-search');
const onInputRef = document.querySelector('.text-output');

inputRef.addEventListener('input', _.throttle(onInputChange, 500)); // _.debounce викликає функцію через 500c

function onInputChange(evt) {
  onInputRef.textContent = `Значення :${evt.target.value}`;
}
console.log(_.throttle);
//-----------------------------------------------------------
const inputRefRigth = document.querySelector('.container-input-rigth');
const password_length = 7;

inputRefRigth.addEventListener('input', _.debounce(onSearch, 500));
function onSearch(evt) {
  if (evt.target.value.trim().length <= password_length) {
    evt.target.classList.remove('invalid');
    evt.target.classList.add('valid');
  } else {
    evt.target.classList.remove('valid');
    evt.target.classList.add('invalid');
  }
}
