import React from "react";
import { useWishlist } from "../../context/wishlistContext/wishlistContext";
import "./WishList.css"
import { Header } from "../Header/Header";
import { useCart } from "../../context/cartContext/cartContext";

function WishList() {

  const {wishlistData,removeFromWishlist} = useWishlist();
  const {addToCart} = useCart();

  return (
    
    <>
      <Header />
      <div className="products_container">
      {wishlistData.map((product) => {
        const { _id, img, name, price, rating } = product;

        return (
          <>
            <div className="product_card" key={_id}>
              <img src={img} alt={name} />
              <h4>{name}</h4>
              <h4>{price}</h4>
              <h4>{rating}</h4>
              <button
                className="remove-btn"
                onClick={()=>removeFromWishlist(_id)}
              >
                Remove Wishlist
              </button>

              <button
                className="add-btn"
                onClick={()=>addToCart(product)}
              >
                Move to cart
              </button>
            </div>
          </>
        );
      })}
      </div>
    </>
  
  );
}

export { WishList };
