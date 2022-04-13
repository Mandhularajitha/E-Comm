import React from "react";
import { hand } from "../../assets/images";
import { Header } from "../Header/Header";
import { useCart } from "../../context/cartContext/cartContext";
import "./Cart.css";

const Cart = () => {
  const { cartData } = useCart();

  console.log(cartData);
  return (
    <>
      <Header />
      <div className="products_container">
      {cartData.map((product) => {
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
                Add to Wishlist
              </button>
            </div>
          </>
        );
      })}
      </div>
      
      <div className="container_1">
        <h1>My Cart</h1>
        <div className="cart">

          <div className="cart-total">
            <h2>Price Details</h2>
            <hr />

            <p>
              <span>Total items</span>
              <span>₹ 3,500</span>
            </p>

            <p>
              <span>Discount</span>
              <span>₹ 1999</span>
            </p>
            <p>
              <span>Delivary Charges</span>
              <span>₹ 250</span>
            </p>
            <hr />
            <p>
              <span>Total Amount</span>
              <span>₹ 5749</span>
            </p>
            <hr />
            <p>You will save ₹ 1000 on this order</p>
            <a href="#">Proceed to Checkout</a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Cart };
