import React from 'react';
import { card1, card2, card3 } from '../../assets/images';
import './WishList.css'
import Header from '../Header/Header';

function WishList() {

  return (
  <>   
    <div class="card-container">
    <div class="product">
            <p class="product_tittle">Diamond Ring</p>
            <p class="product_price">
                <small><i class="fa-solid fa-indian-rupee-sign"></i></small>
                <span>1699</span>
            </p>
            <div class="product_rating">
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
            </div>
            <img src={card1} alt="shoes" class="product_image" />

            <button class="product_button product_basket">Add to Basket</button>
            <button class="product_button product_buy">Buy Now</button>
        </div>

      
          <div class="product">
            <p class="product_tittle">Diamond Ring</p>
            <p class="product_price">
                <small><i class="fa-solid fa-indian-rupee-sign"></i></small>
                <span>1699</span>
            </p>
            <div class="product_rating">
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
            </div>
            <img src={card2} alt="shoes" class="product_image" />

            <button class="product_button product_basket">Add to Basket</button>
            <button class="product_button product_buy">Buy Now</button>
        </div>

        <div class="product">
            <p class="product_tittle">Diamond Ring</p>
            <p class="product_price">
                <small><i class="fa-solid fa-indian-rupee-sign"></i></small>
                <span>1699</span>
            </p>
            <div class="product_rating">
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
                <p><i class="fa fa-star" aria-hidden="true"></i></p>
            </div>
            <img src={card3} alt="shoes" class="product_image" />

            <button class="product_button product_basket">Add to Basket</button>
            <button class="product_button product_buy">Buy Now</button>
        </div>

        
    </div>
    </>
  )
}

export default WishList