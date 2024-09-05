/*function createBasketCard(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) => `
          
              <li data-id="${id}" class="js-card">
                 <button type="button" class="js-remove-basket">Видалити з корзини</button>
                <img src="${img}" alt="${name}" style="max-width: 500px;" />
                <h2>${name}</h2>
                <p><a class="js-info" href="#">Більше інформації</a></p>
              </li>
       
          `
      )
      .join('');
  } else {
    markup = `<li> 
        <img src="https://indexsy.com/wp-content/uploads/2023/05/What-is-404-error.jpg" alt="404" style="max-width: 500px;" />
        </li>`;
  }
  list.innerHTML = markup;
}

export { createBasketCard };*/
function createBasketCard(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) => `
          <li data-id="${id}" class="js__card">
            <button type="button" class="js-remove-basket">Видалити з корзини</button>
            <img src="${img}" alt="${name}" />
            <div class="wrap-container-description">
               <h2>${name}</h2>
            <h3>${price} мяу</h3>
            <p><a class="js-info" href="#">Більше інформації</a></p>
            </div>
         </li>
        `
      )
      .join('');
  } else {
    markup = `<p class="error__text"> 
    Список порожній
              </p>`;
  }
  list.innerHTML = markup;
}

export { createBasketCard };
