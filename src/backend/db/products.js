import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
<<<<<<< Updated upstream
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
=======
    rating: 4.5,
    discountedPrice:999,
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
    discountedPrice:1999,
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
    discountedPrice:1000,
    isaddToCart:"true",
    iswishList:"false",
    category:"Glory Mesh"
  },
  {
    _id: uuid(),
    img:pro1,
    name:"Jewellary",
    price: "5999",
    rating:3.5,
    discountedPrice:999,
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
    discountedPrice:990,
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
    discountedPrice:1959,
    isaddToCart:"true",
    iswishList:"false",
    category:"Cluster"
>>>>>>> Stashed changes
  },
];
