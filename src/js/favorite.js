import { createMarkup } from '../helpers/createMarkup';
import { createModal } from '../helpers/createModal';
import { products } from '../helpers/products';
import { comon } from '../comon';

const list = document.querySelector('.favorite-list');
const favorite = JSON.parse(localStorage.getItem(comon.KEY_FAVORITE)) ?? [];
list.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product);
  }
}

createMarkup(favorite, list);
function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return products.find(({ id }) => id === productId);
}
