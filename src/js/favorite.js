import { comon } from '../js/comon';
import { createMarkup } from '../helpers/createMarkup';

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(comon.KEY_FAVORITE)) ?? []
createMarkup(favorite,list)