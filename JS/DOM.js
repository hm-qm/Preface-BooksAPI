import * as utilities from './Utilities.js'
import { renderSearch } from './API.js';


// Variables

export const searchForm = document.querySelector('[data-search-form]');
export const searchInput = document.querySelector('[data-search-input]');
export const searchSubmitBtn = document.querySelector('[data-search-btn]');
export const bookDisplay = document.querySelector('[data-display-books');



// Form submit event listener

searchForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
    bookDisplay.innerHTML = '';
    await renderSearch(searchInput.value, 0, 15);
});
