/*import { createBasketCard } from '../helpers/createBasketCard';
import { createModal } from '../helpers/createModal';
import { products } from '../helpers/products';
import { comon } from '../comon';
import { removeFromArray } from '../helpers/removeFromArray';

const list = document.querySelector('.chekcout-list');
const basketArr = JSON.parse(localStorage.getItem(comon.KEY_BASKET)) ?? [];
list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    if (product) {
      createModal(product);
    }
  }
  if (evt.target.classList.contains('js-remove-basket')) {
    const product = findProduct(evt.target);
    if (product) {
      removeFromArray(basketArr, product);
      localStorage.setItem(comon.KEY_BASKET, JSON.stringify(basketArr));
      createBasketCard(basketArr, list); // Update the UI after removal
    }
  }
}
createBasketCard(basketArr, list);

function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return products.find(({ id }) => id === productId);
}

export { createBasketCard };*/
import { createBasketCard } from '../helpers/createBasketCard';
import { createModal } from '../helpers/createModal';
import { products } from '../helpers/products';
import { comon } from './comon';
import { removeFromArray } from '../helpers/removeFromArray';

const list = document.querySelector('.bascket__list');
const basketArr = JSON.parse(localStorage.getItem(comon.KEY_BASKET)) ?? [];
list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    if (product) {
      createModal(product);
    }
  }
  if (evt.target.classList.contains('js-remove-basket')) {
    const product = findProduct(evt.target);
    if (product) {
      removeFromArray(basketArr, product);
      localStorage.setItem(comon.KEY_BASKET, JSON.stringify(basketArr));
      createBasketCard(basketArr, list); // Update the UI after removal
    }
  }
}
createBasketCard(basketArr, list);

function findProduct(elem) {
  const productId = Number(elem.closest('.js__card').dataset.id);
  return products.find(({ id }) => id === productId);
}

function priceProducts() {
  return basketArr.reduce(
    (priceProduct, product) => priceProduct + product.price,
    0
  );
}
priceProducts();

export { createBasketCard };
