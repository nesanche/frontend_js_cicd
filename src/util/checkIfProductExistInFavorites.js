const checkIfProductExistInFavorites = (products, productId) => products.some(product => product.id === productId)
 
export default checkIfProductExistInFavorites
