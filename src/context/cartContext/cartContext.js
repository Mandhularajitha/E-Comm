
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

async function removeFromCart (id) {
    try {
        const res = await axios.delete(`/api/user/cart/${id}` , {
            headers: {
                authorization : authtoken
            }})
            setcartData(res.data.cart)
    } catch (error) {
        console.error(error , "err in increaseQuantity-context");
    }
}    
async function getQuantity (id, type) {
    try {
        const res = await axios.post(`/api/user/cart/${id}` , {
            action: {
              type: type
            }
          }, {
            headers: {
                authorization : authtoken
            }})
            setcartData(res.data.cart)
    } catch (error) {
        console.error(error , "err in removefromcart-context");
    }
}
    
const priceDetailsCalc = (obj , curritem) => ({ ...obj,

    totalPrice: curritem.price*curritem.qty + obj.totalPrice ,
    totalDiscoutPrice : curritem.discountedPrice*curritem.qty + obj.totalDiscoutPrice ,
  })

const reducedData = cartData.reduce(priceDetailsCalc ,{ totalPrice : 0 ,totalDiscoutPrice : 0 })

    return (
      <cartContext.Provider value={{cartData,addToCart,removeFromCart,reducedData,getQuantity}}>
          {children}
      </cartContext.Provider>
  )
}

export {CartProvider,useCart}


