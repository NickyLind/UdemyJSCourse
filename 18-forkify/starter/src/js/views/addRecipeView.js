import View from "./View.js";

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded 🤩'

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  };

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  };

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    //?NOTE we need to bind the this keyword to where 'this' is pointing in the toggleWindow method
  };

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
  };

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      const dataArray = [...new FormData(this)];
      //?NOTE makes a copy of the form data that's submitted by the form 
      const data = Object.fromEntries(dataArray)
      //?NOTE Object.fromEntries will change the data from an array containing multiple arrays of data into an object
      console.log(data);
    });
  };

  _generateMarkup() {}
};

export default new AddRecipeView();