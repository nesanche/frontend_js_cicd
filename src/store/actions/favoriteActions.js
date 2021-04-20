import * as actionTypes from "./actionsType";
 
export const addFavorite = (product) => {
 return { type: actionTypes.ADD_FAVORITE, product: product }
}
 
export const removeFavorite = (id) => {
 return { type: actionTypes.REMOVE_FAVORITE, id: id }
}
 
export const insertAllFavorites = (products) => {
 return { type: actionTypes.INSERT_ALL_FAVORITES, products: products }
}
