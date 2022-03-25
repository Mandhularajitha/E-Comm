import "./App.css";
import Header from "./Components/Header/Header";
// import Login from './Components/Loginsignup/Login';
import Login from "./Components/LoginSignUp/Login";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Product from "./Components/product/product";
import WishList from "./Components/WishList/WishList";
import Home from "../src/Components/Home"
import Cart from "./Components/ShoppingCart/Cart";


function App() {
  return (
    <div className="App">
      <Header/>
      
      {/* < Home /> */}
      
      {/* <Routes> */}
      {/* </Routes> */}

        {/* <Product /> */}
        <Cart />

        {/* <WishList /> */}
        {/* <Login /> */}
    </div>
  );
}

export default App;

