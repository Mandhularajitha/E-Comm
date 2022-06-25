import React from "react";
import { Header } from "../Header/Header";
import { useCart } from "../../context/cartContext/cartContext";
import { useWishlist } from "../../context/wishlistContext/wishlistContext";
import "./Cart.css";

const Cart = () => {
  const { cartData,removeFromCart,reducedData,getQuantity} = useCart();
  const {totalDiscoutPrice , totalPrice}= reducedData;
  const {addToWishlist} = useWishlist();


  const loadRazorPay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const paymentHandler = async () => {
    const response = await loadRazorPay();
    if (!response) return console.error('Error in loading razorpay sdk');
    var options = {
      key_id: 'rzp_test_aezy2ZvOxAZcaK',
      key: 'rzp_test_aezy2ZvOxAZcaK',
      amount: (1200 * 100),
      currency: 'INR',
      name: 'My shop',
      description: 'Buy new clothes!',
      image:
        'https://icon-library.com/images/image-icon-png/image-icon-png-6.jpg',
      handler: function (res) {
        console.log('Payment is success, do something!');
        console.log(res);
      },
      prefill: {
        name: `Rajitha`,
        email: 'Rajitha@gmail.com',
        contact: '1234567890',
      },
      theme: {
        color: '#0ea5e9',
      },
    };

    var razorPay = new window.Razorpay(options);
    razorPay.open();
  };


  return (
    <>
      <Header />
      
      <div className="products_containe_cart">
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
              <span>Total Price</span>
              <span>{totalPrice}</span>
            </p>

            <p>
              <span>Discount</span>
              <span>₹ {totalPrice - totalDiscoutPrice}</span>
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
            <a href="#" onClick={paymentHandler}>Proceed to Checkout</a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Cart };
