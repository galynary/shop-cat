function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) => `
      <li data-id="${id}" class="js__card">
        <img src="${img}" alt="${name}" class="js-card-img"/>
        <div class="wrap-container-description">
         <h2>${name}</h2>
         <h3>Ціна: ${price} мяу</h3>
        <p><a class="js-info" href="#">Більше інформації</a></p>
        <div class="buttons">
          <button type="button" class="js-basket button" >Додати до корзини</button>
          <button type="button" class="js-favorite button">Додати до улюблених</button>
        </div>
        </div>
       </li>`
      )
      .join('');
  } else {
    markup = `<li> 
    <img src="https://indexsy.com/wp-content/uploads/2023/05/What-is-404-error.jpg" alt="404" style="max-width: 500px;" />
    </li>`;
  }
  list.innerHTML = markup;
}
export { createMarkup };
