// import  cloneDeep  from "./node_modules/lodash-es/cloneDeep.js";
import  cloneDeep  from "lodash-es";
// import  cloneDeep  from "lodash";
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);


const state = {
  cart: [
    {product: 'bread', quantity: 5},
    {product: 'pizza', quantity: 5},
  ],
  user: {loggedIn: true }
}

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if(module.hot) {
  module.hot.accept()
}
//?NOTE this allows us to only fire specific modules so we can save state (not having to relog user etc) (in our example anytime the page reloads this module persists we repeatedly are adding items to our cart)
//?NOTE this code is code that only parcel understands so it won't make it into our final bundled code because the browser will not understand it

class Person {
  #greeting = 'Hey'
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas')

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
//?NOTE Polyfilling
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

//?NOTE Polyfilling async functions
import 'regenerator-runtime/runtime';
