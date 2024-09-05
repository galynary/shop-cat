function createFavoriteCard(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) => `
              <li data-id="${id}" class="js__card">
           <button type="button" class="js-remove-favorite">
    Видалити з корзини
</button>
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

export { createFavoriteCard };
