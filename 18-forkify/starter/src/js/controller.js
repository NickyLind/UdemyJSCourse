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

const renderSpinner = function(parentEl) {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>   
  `
  parentEl.innerHtml = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

const showRecipe = async function() {
  try {
    let id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return

    //* 1) Loading Recipe
    renderSpinner(recipeContainer);
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

    const data = await response.json();

    if(!response.ok) throw new Error (`${data.message} (${response.status})`)
    console.log(response, data);
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }
    console.log(recipe);

    //* 2) Rendering Recipe
    const markup = `
      <figure class="recipe__fig">
        <img src=${recipe.image} alt=${recipe.title} class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${recipe.ingredients.map(ing => {
          return `
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ing.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ing.unit}</span>
              ${ing.description}
            </div>
          </li>
          `
        }).join('')}

        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `
    recipeContainer.innerHTML = ''
    recipeContainer.insertAdjacentHTML('afterbegin', markup)
  } catch (error) {
    console.error(error)
  }
};

// showRecipe();

['hashchange', 'load'].forEach(event => window.addEventListener(event, showRecipe))
//?NOTE listen for the hash change in the window location (address bar) and for the page to load then call the showRecipe function