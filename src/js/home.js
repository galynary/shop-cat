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
import { comon } from './comon';
import { createMarkup } from '../helpers/createMarkup';
import { createModal } from '../helpers/createModal';
import { products } from '../helpers/products';
import { removeFromArray } from '../helpers/removeFromArray';

const list = document.querySelector('.js__list');
const priceProduct = document.querySelector('.bascket-list__message');
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
    const inStorage = basketArr.some(({ id }) => id === product.id);
    if (inStorage) {
      alert('Цю кицьку ви вже додали до корзини!!!');
      return;
    }
    basketArr.push(product);
    getPriceProducts();
    /// додаємо до масива продуктів що у корзині
    localStorage.setItem(comon.KEY_BASKET, JSON.stringify(basketArr)); // додаємо у localStorage
  }
  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target); // вибираємо продукт
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      alert('Ця киця вже є у вашому списку улюблених!!!');
      return;
    }

    favoriteArr.push(product); /// додаємо до масива продуктів що в улюблених
    localStorage.setItem(comon.KEY_FAVORITE, JSON.stringify(favoriteArr)); // додаємо у localStorage
  }
  if (evt.target.classList.contains('js-remove-favorite')) {
    const product = findProduct(evt.target);
    removeFromArray(favoriteArr, product);
    localStorage.setItem(comon.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
  if (evt.target.classList.contains('js-remove-basket')) {
    const product = findProduct(evt.target);
    removeFromArray(basketArr, product);
    getPriceProducts(); // Додаємо виклик функції тут
    localStorage.setItem(comon.KEY_BASKET, JSON.stringify(basketArr));
  }
}

function findProduct(elem) {
  const productId = Number(elem.closest('.js__card').dataset.id);
  return products.find(({ id }) => id === productId);
}

function getPriceProducts() {
  let basketLength = basketArr.length;
  let totalPrice = basketArr.reduce((total, item) => total + item.price, 0);
  let message;
  if (basketLength === 0) {
    message = 'Ви ще не обрали жодного котика. До сплати 0 мяу';
  } else if (basketLength === 1) {
    message = `Ви  обрали одного котика. До сплати  ${totalPrice} мяу`;
  } else if (basketLength > 1) {
    message = `Ви  обрали ${basketLength} котиків. До сплати  ${totalPrice} мяу`;
  }
  priceProduct.textContent = message;
}

getPriceProducts();

export { createMarkup };
