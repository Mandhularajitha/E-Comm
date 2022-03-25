import React from 'react';
import { hand } from '../../assets/images';
import './Cart.css';

const Cart = () => {

  return (

    <>
    <div class="container_1">
        <h1>My Cart</h1>
        <div class="cart">
            <div class="products">
                <div class="product_1">
                    <img class="hand-ring-image" src={hand} />

                    <div class="details">
                        <p class="style-ring">Style Ring</p>
                        <h4 class="ring-price">₹ 5,749</h4>
                        <h4 class="jaen-offer">50% Off</h4>
                        <div class="increament-decrement">
                            <p class="quantity">quantity:</p>
                            <button class="quan-btn">-</button>
                            <p class="num-btn">1</p>
                            <button class="quan-btn">+</button>

                        </div>
                        <div class="cart-button">
                            <button class="add-btn">Add to Cart</button>
                            <button class="remove-btn">Remove Cart</button>
                        </div>


                    </div>
                </div>
            </div>

            <div class="cart-total">
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
  )
}

export default Cart