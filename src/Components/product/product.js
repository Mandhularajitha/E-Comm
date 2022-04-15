import React, { useState } from "react";
import { Header } from "../Header/Header";
import "./product.css";
import { useFilter } from "../../context/filterContext/filterContext";
import {useCart} from "../../context/cartContext/cartContext"
import { useWishlist } from "../../context/wishlistContext/wishlistContext";


export function Product() {
  const [price, setPrice] = useState();
  const { state, dispatch, finaldata,filterByPrice} = useFilter();
  const { sortByPrice,filterByCategory,filterByRatings} = state;
  const {addToCart}=useCart();
  const {addToWishlist} = useWishlist();
  console.log(useWishlist)

  return (
    <>
      <Header />

      <div className="Filter-container">
        <div className="sidebar">
          <div className="filter-clear">
            <h3 className="Price">Filter</h3>
            <button
              className="clear_btn"
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </button>
          </div>

          <h2 className="price">Price</h2>
          <div className="price-filter">
            <h3 className="Price_1">5k</h3>
            <h3 className="Price_1">10k</h3>
            <h3 className="Price_1">20k</h3>
            
          </div>
          
          <div className="slide">
            <input type="range"
            value={ state.filterByPrice || 0 } min={0} step={2000} max={8000} 
            onChange={(e) => {
                  dispatch({type:'PRICE_FILTER',payload:e.target.value})
                  setPrice(e.target.value)}} 
            />
               <span> {price}  &amp;above </span>
          </div>

          <h3 className="categories">Category</h3>
          <div className="category-choice">
            <input
              type="checkbox"
              className="category-checkbox"
              value="Glory Mesh ring"
              checked={filterByCategory.includes("Glory Mesh")}
              onChange={() =>
                dispatch({ type: "CATEGORY_FILTER", payload:"Glory Mesh"})
              }
            />
            <label className="category-label">Named ring</label>
            <br />
            <input
              type="checkbox"
              className="category-checkbox"
              value="Cluster ring"
              checked={filterByCategory.includes("Cluster")}
              onChange={() =>
                dispatch({ type: "CATEGORY_FILTER", payload: "Cluster" })
              }
            />
            <label className="category-label">Cluster ring</label>
            <br />
            <input
              type="checkbox"
              className="category-checkbox"
              value="Sliver ring"
              checked={filterByCategory.includes("Sliver")}
              onChange={() =>
                dispatch({ type: "CATEGORY_FILTER", payload: "Sliver"})
              }
            />
            <label className="category-label">Sliver ring</label>
          </div>
          { console.log(filterByCategory.includes("Sliver"))}
        

          <h3 className="rating">Rating</h3>
          <div className="rating-choice">
            <input
              type="radio"
              className="category-choice"
              name="star-rating"
              value="rating"
              checked={filterByRatings==="GREATER_THAN_FOUR"}
              onChange={()=>dispatch({type:"RATING_FILTER",payload:"GREATER_THAN_FOUR"})}
            />
            <label htmlFor="text">4 Stars & Above</label>
            <br />
            <input
              type="radio"
              className="category-choice"
              name="star-rating"
              value="rating"
              checked={filterByRatings==="GREATER_THAN_THREE"}
              onChange={()=>dispatch({type:"RATING_FILTER",payload:"GREATER_THAN_THREE"})}
            />
            {console.log(filterByRatings,"text")}

            <label htmlFor="text">3 Stars & Above</label>
            <br />
            <input
              type="radio"
              className="category-choice"
              name="star-rating"
              value="rating"
              ckecked={filterByRatings==="GREATER_THAN_TWO"}
              onChange={()=>dispatch({type:"RATING_FILTER",payload:"GREATER_THAN_TWO"})}
            />
            <label htmlFor="text">2 Stars & Above</label>
            <br />
            <input
              type="radio"
              className="category-choice"
              name="star-rating"
              value="rating"
              checked={filterByRatings==="GREATER_THAN_ONE"}
              onChange={()=>dispatch({type:"RATING_FILTER",payload:"GREATER_THAN_ONE"})}
            />
            <label htmlFor="text">1 Star & Above</label>
            <br />
          </div>

          <h3 className="sort">Sort By</h3>
          <div className="sort-choice">
            <input
              type="radio"
              className="category-checkbox"
              name="price-sort"
              value="sort"
              checked={sortByPrice === "LOW_TO_HIGH"}
              onChange={()=>dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })}
            />
            <label htmlFor="text">Price-Low to High</label>
            <br />
            <input
              type="radio"
              className="category-checkbox"
              name="price-sort"
              value="sort"
              checked={sortByPrice === "HIGH_TO_LOW"}
              onChange={() =>dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
              }
            />
            <label htmlFor="text">Price-High to Low</label>
            <br />
          </div>
        </div>

        <div className="products_container">
          {finaldata.map((product, idx) => {
            return (
              <div className="product_card" key={idx}>
                <img src={product.img} alt={product.name} />
                <h4>{product.name}</h4>
                <h4>{product.price}</h4>
                <h4>{product.categoryName}</h4>
                <h4>{product.rating}</h4>

                <button  className="but_1" onClick={() => addToCart(product)}>
                  AddToCart
                </button>

                <button  className="but_1" onClick={() => addToWishlist(product)}>
                  Add to Wishlist
                </button>
            
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
