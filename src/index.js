import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
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
