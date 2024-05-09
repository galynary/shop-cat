const cats = [
  {
    id: 1,
    img: 'https://baldezh.top/uploads/posts/2022-06/thumbs/1654272768_57-funart-pro-p-kotenok-na-solntse-zhivotnie-krasivo-foto-68.jpg?gw=300h=300h=300',
    alt: 'cat-1',
    cat: 'cat-1',
    price: '200$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    img: 'https://bogatyr.club/uploads/posts/2023-06/thumbs/1687053976_bogatyr-club-p-kotik-na-solnishke-foni-instagram-5.jpg?gw=300h=300',
    alt: 'cat-2',
    cat: 'cat-2',
    price: '500$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    img: 'https://i.work.ua/article/2385b.jpg?',
    alt: 'cat-3',
    cat: 'cat-3',
    price: '340$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 4,
    img: 'https://kartinki.pics/pics/uploads/posts/2022-09/thumbs/1662740471_48-kartinkin-net-p-kot-v-trave-vkontakte-70.jpg?gw=300h=300',
    alt: 'cat-4',
    cat: 'cat-4',
    price: '600$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 5,
    img: 'https://bogatyr.club/uploads/posts/2023-06/thumbs/1687293057_bogatyr-club-p-kotik-na-prirode-foni-vkontakte-18.jpg?w=300h=300',
    alt: 'cat-5',
    cat: 'cat-5',
    price: '410$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 6,
    img: 'https://kartinki.pics/uploads/posts/2022-02/thumbs/1644872556_36-kartinkin-net-p-kotiki-kartinki-41.jpg?w=300h=300',
    alt: 'cat-6',
    cat: 'cat-6',
    price: '380$',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const cat_container = document.querySelector('.cats-list');

const markup = cats.map(
  ({ id, img, alt, cat }) => `
    <li class="cat-item" data-cat="${id}">
        <img class="cat-img" src="${img}" loading="lazy" alt="${alt}" width="200">
        <h2 class="cat-name">${cat}</h2>
    </li>
`
);

cat_container.insertAdjacentHTML('beforeend', markup.join(''));

cat_container.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('cat-img')) {
    return;
  }
  const catId =
    evt.target.dataset.catId ?? evt.target.closest('.cat-item').dataset.cat; // Отримуємо id кота з атрибуту data-cat батьківського елемента

  const currentItem = cats.find(item => item.id === Number(catId)); // Знаходимо об'єкт кота за id
  console.log(currentItem);

  if (!currentItem) {
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" max-width="800" alt ="placholder">
        <h3 class="text-error">Вибачте! Такої картинки не існує.</h3>
       </div>
`);
    instance.show();
    return;
  } else {
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${currentItem.img}" alt="${currentItem.alt}" max-width="800">
        <h2 class="modal-cat-name">${currentItem.cat}</h2>
        <h3 class="modal-price">${currentItem.price}</h3>
        <p class="modal-text">${currentItem.description}</p>
    </div>
`);
    instance.show(); // бібліотека basicLightbox створення модального вікна
  }

  cat_container.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
}
