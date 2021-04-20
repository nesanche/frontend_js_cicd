import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import { getProductsBySearch } from "../../axios"
import Heart from "../../components/Heart/Heart"

import { useDispatch, useSelector } from "react-redux";
import * as favoritesActions from "../../store/actions/favoriteActions"

import checkIfProductExistInFavorites from "../../util/checkIfProductExistInFavorites";


const Products = (props) => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const productsFavorites = useSelector(state => state.products)

  const query = new URLSearchParams(props.location.search).get('query')
  console.log(query)

  useEffect( () => {
    const getProductsByQuery = async () => {
      const response = await getProductsBySearch(query)
      setProducts(response.results)
      console.log(response)
    }
    getProductsByQuery()
  }, [query])

  return (
    <section className="products">
      <div className="container">
        <h1>Resultados de la busqueda {query}</h1>
        <div className="items">
          {
            products.map( (product) => {
              return <div className="item" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <h3>{product.title}</h3>
                </Link>
                {
                  checkIfProductExistInFavorites(productsFavorites, product.id)         
                  ?     <div onClick={() => dispatch(favoritesActions.removeFavorite(product.id))}><Heart type="full"/></div>
                  :     <div onClick={() => dispatch(favoritesActions.addFavorite(product))}><Heart type="border"/></div>
                }
                <p>$ {product.price}</p>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Products;
