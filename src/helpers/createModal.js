import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { closeModal } from './closeModal';

function createModal(product) {
  //const option = {
  // onShow() {
  //   console.log(this);
  // document.addEventListener('keydown', closemodal);
  // },
  //   onClose() { }
  // };

  const instance = basicLightbox.create(
    `
    <div class="modal">
      <img src="${product.img}" alt="${product.name}" class="img__modal" />
      <h2>${product.name}</h2>
      <h3>${product.price}</h3>
      <p>${product.description}</p>
     </div>
   
  `,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        // document.addEventListener('keydown', closeModal);
        document.addEventListener('keydown', this.handler); //  this.handler це посилання на копію функції closeModal (функція closeModal буде одна загальна для всіх модальних вікон які будуть в проєкті)
      },
      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}
export { createModal };
