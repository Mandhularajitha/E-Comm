import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Authentication/LoginContext";
import {Header} from "../Header/Header";
import "./Login.css"

const Login = () => {
   
  const [data, setData] = useState({
    email: "",
    password: "",
  });
const {loginHandler}=useAuth();

  return (
    <>
      <Header />
    <div className="login_handler">
      <div className="seconddiv">
        <center>
          <div className="h1_tag">
           
              <h2 className="login_page">login page</h2>
            
          </div>
          <form

          >
            <input className="user"
              type="text"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="email"
            />
            <br />
            <input className="user"
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="password"
            />
            <br />

            <button  onClick={(e) => {
              e.preventDefault();
              loginHandler(data.email, data.password);
            }}
            type="submit_bt" className="submit_bt">Login</button>

          </form>

          <p>
            <a href="a">Forget password ?</a>or
            <Link to="/Signup">Signup</Link>
          </p>
        </center>
      </div>
    </div>
    </>
  );
};

export {Login};