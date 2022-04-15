import React from "react";
import { Header } from "../Header/Header";
import { useCart } from "../../context/cartContext/cartContext";
import { useWishlist } from "../../context/wishlistContext/wishlistContext";
import "./Cart.css";

const Cart = () => {
  const { cartData,removeFromCart,reducedData,getQuantity} = useCart();
  const {totalDiscoutPrice , totalPrice}= reducedData;
  const {addToWishlist} = useWishlist();

  return (
    <>
      <Header />
      
      <div className="products_container">
      {cartData.map((product) => {
        const { _id, img, name, price, rating, discountedPrice,qty} = product;

        return (
          <>
            <div className="product_card" key={_id}>
              <img src={img} alt={name} />
              <h4>{name}</h4>
              <h4>{price} - price</h4>
              <h4>{rating}  - rating</h4>
              <h4>{discountedPrice} - discount</h4>
              <div className="increament-decrement ">
              <p className="quantity"></p>
              <button
              className="quan-btn_1"
              onClick={() =>
                qty === 1 ? removeFromCart(_id) : getQuantity(_id, "decrement")
              }
            >
              -
            </button>
            <span>{qty}</span>
            <button
              className="quan-btn_2"
              onClick={() => getQuantity(_id, "increment")}
            >
              +
            </button>
            </div>
              <button
                className="remove-btn"
               onClick={()=>removeFromCart(_id)}
              >
                Remove Cart
              </button>

              <button
                className="add-btn"
               onClick={()=>addToWishlist(product)}
              >
                Move to Wishlist
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
              <span>{totalPrice}</span>
            </p>

            <p>
              <span>Discount</span>
              <span>₹ { totalPrice - totalDiscoutPrice }</span>
            </p>
            <p>
              <span>Delivary Charges</span>
              <span>₹ Free</span>
            </p>
            <hr />
            <p>
              <span>Total Amount</span>
              <span>₹ {totalDiscoutPrice}</span>
            </p>
            <hr />
            <p>You will save ₹ {totalPrice - totalDiscoutPrice }  on this order</p>
            <a href="#">Proceed to Checkout</a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Cart };
