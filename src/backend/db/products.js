import { v4 as uuid } from "uuid";

import {pro1,pro2,pro3,pro4,pro5,pro6} from  "../../assets/images/index" 


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img:pro1,
    name:"Jewellary",
    price: "5000",
    rating: 4.5,
    discountedPrice:1999,
    isaddToCart:"true",
    iswishList:"false",
    category:"Sliver"
    
  },
  {
    _id: uuid(),
    img:pro2,
    name:"Jewellary",
    price: "2999",
    rating:3,
    discountedPrice:1000,
    isaddToCart:"true",
    iswishList:"false",
    category:"Cluster"
  },
  {
    _id: uuid(),
    img:pro3,
    name:"Jewellary",
    price: "5040",
    rating:2,
    discountedPrice:1978,
    isaddToCart:"true",
    iswishList:"false",
    category:"Glory Mesh"
  },
  {
    _id: uuid(),
    img:pro4,
    name:"Jewellary",
    price: "5999",
    rating:3.5,
    discountedPrice:199,
    isaddToCart:"true",
    iswishList:"false",
    category:"Sliver"
  },
  {
    _id: uuid(),
    img:pro5,
    name:"Jewellary",
    price: "1990",
    rating:4,
    discountedPrice:1000,
    isaddToCart:"true",
    iswishList:"false",
    category:"Cluster"
  },
  {
    _id: uuid(),
    img:pro6,
    name:"Jewellary",
    price: "3099",
    rating:2,
    discountedPrice:2000,
    isaddToCart:"true",
    iswishList:"false",
    category:"Cluster"
  },
  
];