import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext} from "react";


const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const authInitialState = localStorage.getItem("AuthToken") ? true : false;

const AuthProvider = ({ children }) => {

  const [isAuth,setIsAuth] =  useState(authInitialState);
  
  const loginHandler = async (email, password) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email,
        password,
        
      });
      localStorage.setItem("AuthToken",response.data.encodedToken)
      setIsAuth(true) 

      // console.log(response,"responce");
      // console.log(response.data,"data");
      // console.log(response.data.encodedToken,"encodedtoken");

    } catch (error) {
      console.log(error);
      // setIsErr(error)
    }
  };

  const signupHandler = async ({firstName,email,password}) => {
    try {
        const response = await axios.post(`/api/auth/signup`, {
        
            'firstName': firstName,
            'email': email,
            'password': password
        });
        console.log(response,"Book")

    } catch (error) {
        console.error(error,"Rajitha");
    }
};

  return (
    <AuthContext.Provider value={{loginHandler,signupHandler,isAuth,setIsAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };