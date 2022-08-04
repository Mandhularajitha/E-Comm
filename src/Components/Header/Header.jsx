import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext/cartContext";
import { useWishlist } from "../../context/wishlistContext/wishlistContext";
import { useAuth } from "../../context/Authentication/LoginContext";


const Header = () => {
  const {logoutHandler,isAuth}=useAuth();
  
  const {cartData} = useCart();
  const {wishlistData} = useWishlist();
  return (
    <>
      <div className="main-container">
        <header>
          <nav className="navigation-bar">
            <Link to="/" className="title">
              Grail Jewellary
            </Link>
            <input className="search-bar" type="text" placeholder="search" />
            <ul className="side-nav-section">
              <li>

                {isAuth ?
                <button className="login-btn" onClick={logoutHandler} >logout</button>
                :
                <Link to="/login">
                <button className="login-btn">login</button>
              </Link>
                }
             
              </li>

              <li>
                <Link to="/WishList" className="wishlist-btn btn">
                  <i className="fa fa-heart-o"></i>
                  <span className="badge-wishlist">{wishlistData.length}</span>
                </Link>
              </li>

              <li>
                <Link to="/cart" className="add-cart-btn btn">
                  <i className="fa fa-shopping-cart"></i>
                  <span className="badge-wishlist">{cartData.length}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export {Header};
