import React from "react";
import './Header.css';
import {Link } from 'react-router-dom';
import { ring1, ring2, ring3, ring4, ring5, ring7 } from "../../assets/images";




const Header = () => {
  return (
    <>
      <div className="main-container">
        <header>
          <nav className="navigation-bar">
            <a className="title" href="#">
              Grail Jewellary
            </a>
            <input className="search-bar" type="text" placeholder="search" />
            <ul className="side-nav-section">
              <li>
                <button className="login-btn">
                  <Link to="/loginsignup">Login</Link>
                </button>
              </li>
              <li>
                <a className="wishlist-btn btn" href="cards.html">
                  <i className="fa fa-heart-o"></i>
                  <span className="badge-wishlist">4</span>
                </a>
              </li>
              <li>
                <a className="add-cart-btn btn" href="shoppingcard.html">
                  <i className="fa fa-shopping-cart"></i>
                  <span className="badge-wishlist">2</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    
      
    </>
  );
};



export default Header;
