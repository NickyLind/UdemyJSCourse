import { API_URL, RES_PER_PAGE } from "./config.js";
import { getJSON } from "./helpers.js"

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE
  }
};

export const loadRecipe = async function(id) {
  try {
    
    const data = await getJSON(`${API_URL}/${id}`)


    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }
  } catch (error) {
    console.error(`error : ${error.message}`);
    throw error;
  }
};

export const loadSearchResults = async function(query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`)

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      }
    });
  } catch (error) {
    console.error(`error : ${error.message}`);
    throw error;
  }
};

export const getSearchResultsPage = function(page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = (page) * state.search.resultsPerPage;

  return state.search.results.slice(start, end)
  //?NOTE this function will take the page and track it in the state, then show 10 results basesd on what page the user is on
}
