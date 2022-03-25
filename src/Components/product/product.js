// import React from 'react'
import React, { useState } from 'react';
import { products } from '../../backend/db/products';
import Header from '../Header/Header';
import "./product.css";

const Product = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart= (product) => {
    setCart([...cart,{...product}]);
};

  return (
    <>

     <div className="Filter-container">
        <div className="sidebar">
            <div className="filter-clear">
                <h3 className='Price'>Filter</h3>
                <a className="clear_btn" href="#">Clear</a>
            </div>
            <h2 className="price">Price</h2>
            <div className="price-filter">
                <h3 className='Price_1'>5k</h3>
                <h3 className='Price_1'>10k</h3>
                <h3 className='Price_1'>20k</h3>

            </div>

            <div className="slide">
                <input type="range" min="1" max="100" defaultValue={100}/>
            </div>
            <h3 className="categories">Category</h3>
            <div className="category-choice">
                <input type="checkbox" className="category-checkbox" value="High-Rise Jeans"  />
                <label className="category-label">High-Rise Jeans</label>
                <br />
                <input type="checkbox" className="category-checkbox" value="Flared jeans" />
                <label className="category-label">Flared jeans</label>
                <br />
                <input type="checkbox" className="category-checkbox" value="Calvin Klein" />
                <label className="category-label">Calvin Klein</label>

            </div>

            <h3 className="rating">Rating</h3>
            <div className="rating-choice">
                <input type="radio" className="category-choice" name="star-rating" value="rating" />
                <label htmlFor="text">4 Stars & Above</label>
                <br />
                <input type="radio" className="category-choice" name="star-rating" value="rating" />
                <label htmlFor="text">3 Stars & Above</label>
                <br />
                <input type="radio" className="category-choice" name="star-rating" value="rating" />
                <label htmlFor="text">2 Stars & Above</label>
                <br />
                <input type="radio" className="category-choice" name="star-rating" value="rating" />
                <label htmlFor="text">1 Star & Above</label>
                <br />
            </div>

            <h3 className="sort">Sort By</h3>
            <div className="sort-choice">
                <input type="radio" className="category-checkbox" name="price-sort" value="sort" />
                <label htmlFor="text">Price-Low to High</label>
                <br />
                <input type="radio" className="category-checkbox" name="price-sort" value="sort" />
                <label htmlFor="text">Price-High to Low</label>
                <br />

            </div>
        </div>


        <div className="products_container">
          {products.map((product, idx) => {
            return (
            <div className="product_card" key={idx}>
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
              <h4>{product. price}</h4>
              <h4>{product.categoryName}</h4>
              <h4>{product.rating}</h4>
              {/* <button>Add to cart</button> */}
              <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
      


            </div>  
          )
        })}
      </div>
    </div>
    </>



  )
}

export default Product;




