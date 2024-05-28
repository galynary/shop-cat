import * as basicLightbox from 'basicLightbox';
function createModal(product) {
  const modal = basicLightbox.create(`
    <div class="modal">
      <img src="${product.img}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <h3>${product.price}</h3>
      <p>${product.description}</p>
     </div>
     <div class="buttons">
     <button type="button" class="js-basket">Додати до корзини</button>
     <button type="button" class="js-favorite">Додати до улюблених</button>
   </div>
  `);
  modal.show();
}
