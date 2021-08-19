// Importing Module
//?NOTE code in exporting modules is executed before importing modules

// // import { addToCart, qt, totalPrice as price } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, qt);
// //?NOTE we get access to these values now from the other module


console.log('Importing Module');

// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('break', 5)
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.qt);

// console.log(shippingCost);

import add, { cart } from './shoppingCart.js'
add('pizza', 2)
add('bread', 5)
add('apple', 4)

console.log(cart);
//?NOTE these point to the same place in memory in both modules
