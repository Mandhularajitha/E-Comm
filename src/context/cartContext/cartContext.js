
import axios from 'axios';
import React from 'react'
import {useState} from 'react'
import { createContext,useContext,useEffect } from "react";
import { useAuth } from '../Authentication/LoginContext';

const cartContext = createContext(null);
const useCart = () => useContext(cartContext);

const CartProvider = ({children}) => {

    const authtoken = localStorage.getItem("AuthToken")
    
    const [cartData , setcartData ] =  useState([]);
    
    const { isAuth}  = useAuth();

console.log(cartData)

    useEffect(() => {
        if(isAuth) {
            ( async function getCartData () {
                try {
                    const res = await axios.get('/api/user/cart' ,{
                            headers : {
                                authorization : authtoken
                            }
                        })
                    setcartData(res.data.cart)
                    console.log(res,"kalavathi")

                } catch (error) {
                    console.error(error , "err in getcartData")
                }
            })()
        } else {
            setcartData([])
        }
       
}, [isAuth]);


async function addToCart (product) {
    try {
        const res = await axios.post('/api/user/cart' , { product } , {
            headers: {
                authorization : authtoken
            }})
            setcartData(res.data.cart)
            console.log(res.data.cart,"raji")
    } catch (error) {
        console.error(error , "err in addToCart-context");
    }
}

    return (
      <cartContext.Provider value={{cartData,addToCart}}>
          {children}
      </cartContext.Provider>
  )
}

export {CartProvider,useCart}


