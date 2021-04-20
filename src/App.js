import Layout from "./hoc/Layout"
import Home from "./containers/Home/Home"
import Products from "./containers/Products/Products"
import Product from "./containers/Product/Product"
import Favorites from "./containers/Favorites/Favorites"

import { Route } from "react-router-dom"

import * as favoritesActions from "./store/actions/favoriteActions";
import { useDispatch } from "react-redux"

import React, { useEffect } from "react"

const App = () => {
  const dispatch = useDispatch()

   
 useEffect(() => {
  const favoriteProductsLocalStorage = localStorage.getItem("favoriteProducts");
  if (favoriteProductsLocalStorage) {
    dispatch(favoritesActions.insertAllFavorites(JSON.parse(favoriteProductsLocalStorage)))
  }
}, [dispatch])

  return (
    <Layout>
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={Product} />
        <Route path="/favorites" component={Favorites} />

      </div>
    </Layout>
  );
}

export default App;
