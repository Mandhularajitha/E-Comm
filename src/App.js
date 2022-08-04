import "./App.css";
import { Header } from "./Components/Header/Header";
import { Login } from "./Components/LoginSignUp/Login";
import { Product } from "./Components";
import { WishList } from "./Components";
import { Home } from "./Components";
import { Cart } from "./Components";
import { RequireAuth } from "./requireAuth";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./Components/LoginSignUp/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/WishList"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route path="/Product" element={<Product />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <ToastContainer className="toast" />
    </div>
  );
}

export default App;
