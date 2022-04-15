import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/productContext/ProductContext";
import { AuthProvider } from "./context/Authentication/LoginContext";
import { FilterProvider } from "./context/filterContext/filterContext";
import {CartProvider} from "./context/cartContext/cartContext";
import {WishlistProvider} from "./context/wishlistContext/wishlistContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <ProductProvider>
      {/* <WishlistProvider> */}
        <CartProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CartProvider>
        {/* </WishlistProvider> */}
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
