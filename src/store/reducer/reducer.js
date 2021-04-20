import * as actionTypes from "../actions/actionsType";

const initialState = {
  products: [],
}

const addFavorite = (state, action) => {
  const newState = {...state, products: [...state.products, action.product]};
  localStorage.setItem("favoriteProducts", JSON.stringify(newState.products))
  return newState;
}

const insertAllFavorites = (state, action) => {
  const newState = {...state, products: [ ...action.products ]};
  return newState;
}

const removeFavorite = (state, action) => {
  const updatedProducts = state.products.filter(product => product.id !== action.id);
  const newState = {...state, products: [ ...updatedProducts ]}
  localStorage.setItem("favoriteProducts", JSON.stringify(newState.products))
  return newState
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE:
      return addFavorite(state, action);
    case actionTypes.REMOVE_FAVORITE:
      return removeFavorite(state, action);
    case actionTypes.INSERT_ALL_FAVORITES:
      return insertAllFavorites(state, action);
    default:
      return state;
  }
};

export default reducer;