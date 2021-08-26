import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";

// import icons from '../img/icons.svg'; //Parcel 1
import icons from 'url:../img/icons.svg'; //Parcel 2
//?NOTE we need to import theicons this way because when parcel bundles everything to build it, the src paths of our images will change
// console.log(icons);
import 'core-js/stable'; //polyfilling everything else
import 'regenerator-runtime'; //polyfilling async await
//?NOTE we use polyfilling to roll back ES6 features into older browsers that can't use it

if(module.hot) {
  module.hot.accept();
  //?NOTE this is to freeze the state when the page reloads (it's not JS it is a parcel command)
}

const showRecipe = async function() {
  try {
    let id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return
    recipeView.renderSpinner();

    //* 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    //* 1) Loading Recipe
    await model.loadRecipe(id);

    //* 2) Rendering Recipe
    recipeView.render(model.state.recipe);

  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function() {
  try {
    //* 1) Get Search Query
    const query = searchView.getQuery();
    if(!query) return;

    //* 2) Load Search Results
    await model.loadSearchResults(query);
    //?NOTE our model is imported and we call the loadSearchResults method and pass it the query we recieve from out getQuery method in our searchView

    //* 3) Render Results
    resultsView.render(model.getSearchResultsPage());
    //?NOTE now we are only passing the results in the array that were sliced out of the original array depending on what page the user is on into the render method to be rendered into the preview results

    //* 4) Render initial pagination buttons
    paginationView.render(model.state.search)
  } catch (error) {
    console.error(error);
  }
};

const controlServings = function(newServings) {
  //* Update the recipe servings (in state)
  model.updateServings(newServings);
  //? method we created in the model

  //* Update the view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
  //? re-render the updated recipe state to the DOM
};

const controlPagination = function(goToPage) {
  //* 1) Render NEW Results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //* 2) Render NEW Pagination Buttons
  paginationView.render(model.state.search)
};

const controlAddBookmark = function() {
  if(!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
    //?NOTE if the current loaded recipe isn't bookmarked it bookmark it or vice-versa
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }

  recipeView.update(model.state.recipe);
};

const init = function() {
  recipeView.addHandlerRender(showRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  //?NOTE these functions pass in functions to the methods in the views so they have access to them and can pass information back into this init() function
};
init();