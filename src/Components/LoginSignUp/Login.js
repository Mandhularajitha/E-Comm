import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Authentication/LoginContext";
import { Header } from "../Header/Header";
import { toast } from "react-toastify";
import {  useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {

  const {isAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { loginHandler } = useAuth();

  useEffect(() => {
    if (isAuth.user && location.state !== null) {
        navigate(location.state.pathname)
    }
}, [isAuth]);

  return (
    <>
      <Header />
      <div className="login_handler">
        <div className="seconddiv">
          <center>
            <div className="h1_tag">
              <h2 className="login_page">login page</h2>
            </div>
            <form>
              <input
                className="user"
                type="text"
                name="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="email"
              />
              <br />
              <input
                className="user"
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                placeholder="password"
              />
              <br />

              <button 
                onClick={(e) => {
                  e.preventDefault();
                  loginHandler(data.email, data.password);
                }}
                type="submit_bt"
                className="submit_bt"
              >
                Login
              </button>

            
            </form>
            <button 
                onClick={(e) => {
                  e.preventDefault();
                  loginHandler( "rajitha@gmail.com","rajitha@9027");
                  toast.success("Login Successfully");
                }}
                className="submit_bt"
              >
                login as guest
              </button>
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

export { Login };
