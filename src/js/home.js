/*import { comon } from '../comon';
import { createMarkup } from '../helpers/createMarkup';
import { createModal } from '../helpers/createModal';
import { products } from '../helpers/products';
import { removeFromArray } from '../helpers/removeFromArray';

const list = document.querySelector('.js-list');
const search = document.querySelector('.js-search');
const favoriteArr = JSON.parse(localStorage.getItem(comon.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(comon.KEY_BASKET)) ?? [];

createMarkup(products, list);
list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product);
  }
  if (evt.target.classList.contains('js-basket')) {
    const product = findProduct(evt.target); // вибираємо продукт
    basketArr.push(product); /// додаємо до масива продуктів що у корзині
    localStorage.setItem(comon.KEY_BASKET, JSON.stringify(basketArr)); // додаємо у localStorage
  }
  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target); // вибираємо продукт
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
      //alert('Ця киця вже є у вашому списку улюблених!!!');
    }
    favoriteArr.push(product); /// додаємо до масива продуктів що в улюблених
    localStorage.setItem(comon.KEY_FAVORITE, JSON.stringify(favoriteArr)); // додаємо у localStorage
  }
  if (evt.target.classList.contains('js-remove-favorite')) {
    const product = findProduct(evt.target);
    removeFromArray(favoriteArr, product);
    localStorage.setItem(comon.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}
function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return products.find(({ id }) => id === productId);
}
export { createMarkup };*/
import { comon } from '../comon';
import { createMarkup } from '../helpers/createMarkup';
import { createModal } from '../helpers/createModal';
import { products } from '../helpers/products';
import { removeFromArray } from '../helpers/removeFromArray';

const list = document.querySelector('.js-list');
const search = document.querySelector('.js-search');
const favoriteArr = JSON.parse(localStorage.getItem(comon.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(comon.KEY_BASKET)) ?? [];

createMarkup(products, list);
list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product);
  }
  if (evt.target.classList.contains('js-basket')) {
    const product = findProduct(evt.target); // вибираємо продукт
    basketArr.push(product); /// додаємо до масива продуктів що у корзині
    localStorage.setItem(comon.KEY_BASKET, JSON.stringify(basketArr)); // додаємо у localStorage
  }
  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target); // вибираємо продукт
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
      //alert('Ця киця вже є у вашому списку улюблених!!!');
    }
    favoriteArr.push(product); /// додаємо до масива продуктів що в улюблених
    localStorage.setItem(comon.KEY_FAVORITE, JSON.stringify(favoriteArr)); // додаємо у localStorage
  }
  if (evt.target.classList.contains('js-remove-favorite')) {
    const product = findProduct(evt.target);
    removeFromArray(favoriteArr, product);
    localStorage.setItem(comon.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}
function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return products.find(({ id }) => id === productId);
}
export { createMarkup };
