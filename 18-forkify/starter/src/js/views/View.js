import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
  }

  update(data) {

    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    //?NOTE creates a copy of the DOM in memory
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    //?NOTE creates an array of all DOM elements from the new DOM that was created in memory
    const currentElements = Array.from(this._parentElement.querySelectorAll('*'));
    //?NOTE creates an array of all DOM elements currently displayed on the page

    newElements.forEach((newEl, i) => {
      //?NOTE for every new element, create a current element variable from the currentElements array at that index
      const curEl = currentElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      //* Updates changes TEXT
      if(!newEl.isEqualNode(curEl) && newEl.firstChild.nodeValue.trim() !== '') {
        //?NOTE if the new element and current element are not equal and the firstChild of the new element (text) is not equal to nothing:
        // console.log('🥞', newEl.firstChild.nodeValue.trim() !== '');
        curEl.textContent = newEl.textContent;
        //?NOTE change the text of the current element to the new element
      };

      //* Updates changes ATTRIBUTES
      if(!newEl.isEqualNode(curEl)) {
        //?NOTE is the new element and current element  are not equal:
        Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value))
        //?NOTE on an array of the new elements attributes, for each attribute set the current elements attributes to the different new elements attributes
      }
    })
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner = function() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div> 
    `
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
    `
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderMessage(message = this._message) {
    const markup = `
    <div class="message">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
    `
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };
}