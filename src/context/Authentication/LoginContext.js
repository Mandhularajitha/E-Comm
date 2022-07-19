import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const authInitialState = localStorage.getItem("AuthToken") ? true : false;

const AuthProvider = ({ children }) => {

  const [isAuth,setIsAuth] =  useState(authInitialState);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  
  const loginHandler = async (email, password) => {
    
    console.log(email,"email",password,"password");
    try {
      const response = await axios.post(`/api/auth/login`, {
        email:email,
        password:password,
        
      });
      console.log(response,"responce");
      localStorage.setItem("AuthToken",response.data.encodedToken)
      setIsAuth(true) 
      navigate(from, { replace: true });


    } catch (error) {
      console.log(error);
      
    }
  };

  const signupHandler = async (firstName,email,password) => {
    try {
        const response = await axios.post(`/api/auth/signup`, {
            firstName: firstName,
            email: email,
            password: password,
        });
        console.log(email,password,"signhandler");
     

    } catch (error) {
       
    }
};


  return (
    <AuthContext.Provider value={{loginHandler,signupHandler,isAuth,setIsAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };