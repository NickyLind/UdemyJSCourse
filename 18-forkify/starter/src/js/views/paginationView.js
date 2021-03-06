import View from "./View";
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination')

  addHandlerClick(handler) {
    //?NOTE this is the handler function that is going to pass data back to the controller using a handler function. Here we pass back the id(also the page number) of the button we click so that the controller can re-render the buttons and results of that page
    this._parentElement.addEventListener('click', function(e) {
      const btn = e.target.closest('.btn--inline');
      if(!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    })
  };

  _generateMarkup() {
    //?NOTE this method is full of conditionals that are based on the current page (which is stored in the state of our model), and renders html markup according to the results of the pagination
    const currentPage = this._data.page;
    //? saving some text
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    //?NOTE we round up the amount of pages we need (length of the results array divided by the results per page (10)) so that every result will appear on a page
    //Page 1, and there are other pages
    if(currentPage === 1 && numPages > 1) {
      return `
      <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `
    } 

    
    // Last page
    if(currentPage === numPages && numPages > 1) {
      return `
      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
      `
    }
    // Other page
    if (currentPage < numPages) {
      return `
      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
      <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `
    }
    //Page 1, and there are no other pages
    return ''
  };
};

export default new PaginationView();