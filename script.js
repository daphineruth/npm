

//import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

//console.log('Importing module')

 //addToCart('bread', 5);
 //console.log(price, tq);

 //import * as ShoppingCart from './shoppingCart.js';
 //ShoppingCart.addToCart('bread', 5);

 //console.log(ShoppingCart.totalPrice);

 import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart)
/*
//Top-Level Await (ES2022)

 console.log('Start fetching');
 const res = await fetch('https://jsonplaceholder.typicode.com/posts');
 const data = await res.json();
console.log(data);
 console.log('Something');
 */

 const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
  
    return { title: data.at(-1).title, text: data.at(-1).body };
  };
  
  const lastPost = getLastPost();
  console.log(lastPost);
  