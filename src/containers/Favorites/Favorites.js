import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import * as favoritesActions from "../../store/actions/favoriteActions"

import Heart from "../../components/Heart/Heart"

import checkIfProductExistInFavorites from "../../util/checkIfProductExistInFavorites";


const Favorites = () => {
  const productsFavorites = useSelector(state => state.products)
  const dispatch = useDispatch();

  return <section>
    <div className="container">
        <h1>Tus Favoritos</h1>
        <div className="items">
          {
            productsFavorites.map((product) => {
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
}

export default Favorites