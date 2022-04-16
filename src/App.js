import "./App.css";
import {Header} from "./Components/Header/Header";
import {Login} from "./Components/LoginSignUp/Login";
import { Product } from "./Components";
import { WishList } from "./Components";
import { Home } from "./Components";
import { Cart } from "./Components";
import { Route, Routes } from "react-router-dom";
import {Signup} from "./Components/LoginSignUp/SignUp";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/WishList" element={<WishList/>}/>
  <Route path="/Home" element={<Home/> }/>
  <Route path="/Product" element={<Product/>}/>
  <Route path='/Signup' element={<Signup />}/>
  <Route path="/mockman" element={<Mockman />}></Route>
 </Routes>
      
  
    </div>
  );
}

export default App;

