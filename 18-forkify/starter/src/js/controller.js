import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

// import icons from '../img/icons.svg'; //Parcel 1
import icons from 'url:../img/icons.svg'; //Parcel 2
//?NOTE we need to import theicons this way because when parcel bundles everything to build it, the src paths of our images will change
// console.log(icons);
import 'core-js/stable'; //polyfilling everything else
import 'regenerator-runtime'; //polyfilling async await
//?NOTE we use polyfilling to roll back ES6 features into older browsers that can't use it

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const showRecipe = async function() {
  try {
    let id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return
    recipeView.renderSpinner();

    //* 1) Loading Recipe
    await model.loadRecipe(id);

    //* 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(error)
  }
};

// showRecipe();

const init = function() {
  recipeView.addHandlerRender(showRecipe)
};
init();