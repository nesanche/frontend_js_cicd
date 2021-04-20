import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.mercadolibre.com'
})

export const getProductsBySearch = async (query) => {
  const response = await instance.get(`/sites/MLA/search?q=${query}`)
  return response.data
}

export const getProductById = async (productId) => {
  const response = await instance.get(`/items/${productId}`);
  return response.data;
 };
 