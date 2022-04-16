import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Authentication/LoginContext";
import { ProductProvider } from "./context/productContext/ProductContext";
import { WishlistProvider } from "./context/wishlistContext/wishlistContext";
import { CartProvider } from "./context/cartContext/cartContext";
import { FilterProvider } from "./context/filterContext/filterContext";
import { makeServer } from "./server";

// Call make Server

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <ProductProvider>
      <WishlistProvider>
        <CartProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CartProvider>
        </WishlistProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);