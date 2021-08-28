import { API_URL, RES_PER_PAGE, KEY } from "./config.js";
// import { getJSON, sendJSON } from './helpers.js';
import { AJAX } from './helpers.js';


export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE
  },
  bookmarks: [],
};

const createRecipeObject = function(data) {
  const { recipe } = data.data;
    return state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
      ...(recipe.key && { key: recipe.key })
    //?NOTE the '&&' short circuits so if recipe.key is a falsey value, then it will return nothing if it's truthy it will return set the key equal to the recipe key
    };
};

export const loadRecipe = async function(id) {
  try {
    // const data = await getJSON(`${API_URL}${id}`)
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`)

    createRecipeObject(data);

    if(state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    };

  } catch(error) {
    console.error(`error 💊🩸🛢 ${error.message}`);
    throw error;
  }
};

export const loadSearchResults = async function(query) {
  try {
    state.search.query = query;

    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`)

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        ...(recipe.key && { key: recipe.key })
      }
    });
    state.search.page = 1;
  } catch (error) {
    console.error(`error 💊🩸🛢 ${error.message}`);
    throw error;
  }
};

export const getSearchResultsPage = function(page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage //0;
  const end = (page) * state.search.resultsPerPage //9;
  return state.search.results.slice(start, end)
    //?NOTE this function will take the page and track it in the state, then show 10 results basesd on what page the user is on
};

export const updateServings = function(newServings) {
    //?NOTE this method loops through each ingredient and updates it for the new serving size
  //? 2 cups * 4 servings / 2 servings = 4 cups
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
    //?NOTE update the servings in the state to match the newServings
};

const persistBookmarks = function() {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
};

export const addBookmark = function(recipe) {
  //* Add bookmark
  state.bookmarks.push(recipe);
    //?NOTE push the recipe to our bookmarks array in our state object

  //* Mark current recipe as bookmark
  if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    //?NOTE if the recipe being passed into the function's id is equal to the id of the recipe currently in the state then give it a bookmarked property equal to true

  persistBookmarks();
    //?NOTE add the bookmark to local storage
};

export const deleteBookmark = function(id) {
  //* Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
    //?NOTE create an index variable so we know where to splice our bookmark array. we find the index of our bookmark array we the element id in the loop is equal to the id being passed into the function
  state.bookmarks.splice(index, 1)
    //?NOTE remove that entry in the bookmarks array

  //* Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;
    //?NOTE if the id being passed into the function is the same as the id of the current recipe in the state, then set it's bookmarked property to false

  persistBookmarks();
};

const init = function() {
  const storage = localStorage.getItem('bookmarks');
  if(storage) state.bookmarks = JSON.parse(storage);
};
init();

const clearBookmarks = function() {
  localStorage.clear('bookmarks');
};
//clearBookmarks()

export const uploadRecipe = async function(newRecipe) {
  try{
  // console.log(Object.entries(newRecipe));
  const ingredientsArray = Object.entries(newRecipe)
    .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
    .map(ing => {
      // const ingArr = ing[1].replaceAll(' ', '').split(',')
      const ingArr = ing[1].split(',').map(el => el.trim())
      if(ingArr.length !== 3) throw new Error('Wrong ingredient format! Please use the correct format.')
      const [quantity, unit, description] = ingArr

    return {quantity: quantity ? +quantity : null, unit, description}
  });

  const recipe = {
    title: newRecipe.title,
    source_url: newRecipe.sourceUrl,
    image_url: newRecipe.image,
    publisher: newRecipe.publisher,
    cooking_time: +newRecipe.cookingTime,
    servings: +newRecipe.servings,
    ingredients: ingredientsArray,
  };

  const data = await AJAX(`${API_URL}?key=${KEY}`, recipe)
  console.log(data);
  state.recipe = createRecipeObject(data);
  addBookmark(state.recipe)
} catch (error) {
  throw error
}

};

