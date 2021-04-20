import React from 'react';
import Logo from "../../assets/img/meli-logo.png"
import Heart from "../Heart/Heart"

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <header className="container">
        <Link to="/"><img src={Logo} alt="Mercado Libre" /></Link>
        <Link to="/favorites"><Heart /></Link>
      </header>
    </div>
  );
}

export default Header;
