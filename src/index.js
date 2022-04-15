import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server

makeServer();

ReactDOM.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <App />
=======
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
>>>>>>> Stashed changes
  </React.StrictMode>,
  document.getElementById("root")
);
