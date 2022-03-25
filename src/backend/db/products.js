import { v4 as uuid } from "uuid";

import {ring1, ring2, ring3,ring4,ring5,ring6,ring7,pro1,pro2,pro3,pro4,pro5,pro6,card1,card2,card3} from  "../../assets/images/index" 


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img:pro4,
    name:"julary5",
    price: "5000",
    categoryName: "non-fiction",

  },
  {
    _id: uuid(),
    img:pro2,
    name:"julary1",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    img:pro3,
    name:"julary2",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    img:pro4,
    name:"julary3",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    img:pro5,
    name:"julary4",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    img:pro5,
    name:"julary4",
    price: "5000",
    categoryName: "non-fiction",
  },
  
];
