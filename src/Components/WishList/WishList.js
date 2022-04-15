import React from "react";
import { useWishlist } from "../../context/wishlistContext/wishlistContext";
import "./WishList.css"
import { Header } from "../Header/Header";

function WishList() {

  const {wishlistData} = useWishlist();

  console.log(wishlistData,"rajitha")


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
                onClick={() =>
                  dispatch({
                    type: "REMOVE-FROM-CART",
                    payload: { _id, price, rating, category, img, name },
                  })
                }
              >
                Remove Cart
              </button>

              <button
                className="add-btn"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: { _id, price, rating, category, img, name },
                  })
                }
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
