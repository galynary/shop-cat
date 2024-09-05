import { createFavoriteCard } from '../helpers/createFavoriteCard';
import { createModal } from '../helpers/createModal';
import { products } from '../helpers/products';
import { comon } from './comon';
import { removeFromArray } from '../helpers/removeFromArray';

const list = document.querySelector('.favorite__list');
const favoriteArr = JSON.parse(localStorage.getItem(comon.KEY_FAVORITE)) ?? [];
list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    if (product) {
      createModal(product);
    }
  }
  if (evt.target.classList.contains('js-remove-favorite')) {
    const product = findProduct(evt.target);
    if (product) {
      removeFromArray(favoriteArr, product);
      localStorage.setItem(comon.KEY_FAVORITE, JSON.stringify(favoriteArr));
      createFavoriteCard(favoriteArr, list); // Update the UI after removal
    }
  }
}

createFavoriteCard(favoriteArr, list);

function findProduct(elem) {
  const productId = Number(elem.closest('.js__card').dataset.id);
  return products.find(({ id }) => id === productId);
}

export { createFavoriteCard };
