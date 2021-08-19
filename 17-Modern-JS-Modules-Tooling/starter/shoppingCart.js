//Exporting Module
//?NOTE code in exporting modules is executed before importing modules

console.log('Exporting Module');

const shippingCost = 10;
//? these variables are scoped to the module
export const cart = [];

export const addToCart = function(product, quantity) {
  //?NOTE exports need to happen in top-level code
  cart.push(product, quantity)
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

export default function(product, quantity) {
  //?NOTE exports need to happen in top-level code
  cart.push({product, quantity})
  console.log(`${quantity} ${product} added to cart`);
};