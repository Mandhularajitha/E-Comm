import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Header} from "../Header/Header";
// import "./Login.css"
import { useAuth } from "../../context/Authentication/LoginContext";

const Signup = () => {
  const { signupHandler } = useAuth();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      console.log(data,"2");
      signupHandler(data.name, data.email, data.password,data.confirmPassword);
    } else {
      console.log("passwords are not same ");
    }
  };

  return (
    <>
     <Header />
    <div className="signup">
      {console.log(data)}
      <center>
       
        <div className="framhandler">
        <h2 className="signup">signup</h2>
        <form onSubmit={submitHandler}>
          <input className="userinput"
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Enter UserName"
          />{" "}
          <br />
          <input className="userinput"
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Email"
          />
          <br />
          <input className="userinput"
            type="password"
            name="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="password"
          />
          <br />
          <input className="userinput"
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
            placeholder="Confirm password"
          />{" "}
          <br />
          <button 
          type="submit"
            onClick={(e) => {
              e.preventDefault();
              signupHandler(data.name, data.email, data.password,data.confirmPassword);
            }}
            className="sub_button"
          >
            signup
          </button>
         
          <button className="redirectlogin"><Link to="/login">Login</Link></button>
        </form>
        </div>
      </center>
    </div>
    </>
  );
};
export {Signup};
