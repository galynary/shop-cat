
const menuList = document.querySelector('.menu-list');
let selectedTags = new Set();

menuList.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.nodeName !=='A') { // якщо клікаєм не по  <a href="" class="menu-link" тоді
      return;                       // властивість nodeName визначає тип елемента
  }
console.log(evt.target.textContent);
  
    const link = evt.target;
    const tag = link.dataset.value;
    const isActive = link.classList.contains('menu-link--active');
  
    if (isActive) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(tag);
    }
    
    link.classList.toggle('menu-link--active', !isActive);

    console.log(selectedTags);
}
