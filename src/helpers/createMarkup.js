function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) => `
      <li data-id="${id}" class="js-card">
        <img src="${img}" alt="${name}" style="max-width: 500px;" />
        <h2>${name}</h2>
        <p><a class="js-info" href="#">Більше інформації</a></p>
        <div class="buttons">
          <button type="button" class="js-basket">Додати до корзини</button>
          <button type="button" class="js-favorite">Додати до улюблених</button>
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
