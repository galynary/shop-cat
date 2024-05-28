const products = [
  {
    id: 1,
    img: 'https://baldezh.top/uploads/posts/2022-06/thumbs/1654272768_57-funart-pro-p-kotenok-na-solntse-zhivotnie-krasivo-foto-68.jpg?gw=300h=300h=300',
    alt: 'cat-1',
    name: 'cat-1',
    price: '200$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    img: 'https://bogatyr.club/uploads/posts/2023-06/thumbs/1687053976_bogatyr-club-p-kotik-na-solnishke-foni-instagram-5.jpg?gw=300h=300',
    alt: 'cat-2',
    name: 'cat-2',
    price: '500$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    img: 'https://i.work.ua/article/2385b.jpg?',
    alt: 'cat-3',
    name: 'cat-3',
    price: '340$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 4,
    img: 'https://kartinki.pics/pics/uploads/posts/2022-09/thumbs/1662740471_48-kartinkin-net-p-kot-v-trave-vkontakte-70.jpg?gw=300h=300',
    alt: 'cat-4',
    name: 'cat-4',
    price: '600$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 5,
    img: 'https://bogatyr.club/uploads/posts/2023-06/thumbs/1687293057_bogatyr-club-p-kotik-na-prirode-foni-vkontakte-18.jpg?w=300h=300',
    alt: 'cat-5',
    name: 'cat-5',
    price: '410$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 6,
    img: 'https://kartinki.pics/uploads/posts/2022-02/thumbs/1644872556_36-kartinkin-net-p-kotiki-kartinki-41.jpg?w=300h=300',
    alt: 'cat-6',
    name: 'cat-6',
    price: '380$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];
import { comon } from '../js/comon';
import { createMarkup } from '../helpers/createMarkup';
import { creatModal } from '../helpers/createModal';

const list = document.querySelector('.js-list');
const search = document.querySelector('.js-search');
const favoriteArr = JSON.parse(localStorage.getItem(comon.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(comon.KEY_BASKET)) ?? [];

createMarkup(products, list);

list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  const card = evt.target.closest('.js-card');
  const id = Number(card.dataset.id);
  const product = findProduct(id);

  if (evt.target.classList.contains('js-info')) {
    creatModal(product);
  }

  if (evt.target.classList.contains('js-basket')) {
    basketArr.push(product);
    localStorage.setItem(comon.KEY_BASKET, JSON.stringify(basketArr));
  }

  if (evt.target.classList.contains('js-favorite')) {
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      alert('Ця киця вже є у вашому списку улюблених!!!');
      return;
    }
    favoriteArr.push(product);
    localStorage.setItem(comon.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}

function findProduct(productId) {
  return products.find(({ id }) => id === productId);
}

/// -------ДРУГИЙ ВАРІАНТ КОДА!!!!!!!

/*const KEY_FAVORITE = 'favorite';
const KEY_BASKET = 'basket';
const list = document.querySelector('.js-list');
const search = document.querySelector('.js-search');
const favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

function createMarkup(products) {
  const markup = products
    .map(
      ({ id, img, name }) => `
    <li data-id="${id}" class="js-card">
      <img src="${img}" alt="${name}" max-width="500"/>
      <h2>${name}</h2>
      <p><a class="js-info" href="#">Більше інформації</a></p>
      <div class="buttons">
        <button type="button" class="js-basket">Додати до корзини</button>
        <button type="button" class="js-favorite">Додати до улюблених</button>
      </div>
    </li>`
    )
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}

list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    const modal = basicLightbox.create(`
      <div class="modal">
        <img src="${product.img}" alt="${product.name}" />
        <h2>${product.name}</h2>
        <h3>${product.price}</h3>
        <p>${product.description}</p>
       </div>
    `);
    modal.show();
  }
  if (evt.target.classList.contains('js-basket')) {
    const product = findProduct(evt.target);
    basketArr.push(product);
    localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
  }
  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target);
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      alert('Ця киця вже є у вашому списку улюблених!!!');
      return;
    }
    // додаємо товари до списку улюблених
    favoriteArr.push(product);
    localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}

createMarkup(products);
// знаходимо id продукту
function findProduct(elem) {
  // return cats.find(({ id }) => id === productId);
  const productId = Number(elem.closest('.js-card').dataset.id); // шукаємо батьківський елемент з класом js-card
  return products.find(({ id }) => id === productId);
}
*/
