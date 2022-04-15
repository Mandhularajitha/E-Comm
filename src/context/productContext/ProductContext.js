import axios from 'axios';
import React from 'react'
import { createContext } from 'react';
import { useContext, useEffect,useState } from 'react';
// import { products } from '../../backend/db/products';


const ProductContext=createContext()
const ProductProvider = ({children}) => {

    const [products,setproducts] = useState([]);

    const getProducts = async () => {
        
        try {

          const responce=await axios.get('/api/products')
          setproducts(responce.data.products)
          console.log(responce,"rajitha")
        
        } catch (error) {
          console.log(error);
        }
      };


      useEffect(() => {
        getProducts()
      }, [])


  return (
    <>
    <ProductContext.Provider value={{products}}>
          {children}
    </ProductContext.Provider>
    </>
  )
}
const useProduct=()=>useContext(ProductContext)
export {ProductProvider,useProduct}