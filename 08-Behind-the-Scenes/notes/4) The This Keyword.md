# **_The 'This' Keyword_**

## **_How the 'This' Keyword Works_**

- **_This keyword/variable:_** Special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the `this` keyword is used.
- `this` is **NOT** static. It depends on **how** the function is called, and its value is only assigned when the function is **actually called**

### 4 Types of function calls

- **_Method_** 👉 this = \<Object that is calling the method>

```
const jonas = {
  name: 'Jonas',
  year: 1990,
  calcAge: function() {
    return 2021 - this.year
  }
};
jonas.calcAge(); //31
//this refers to jonas since it is the Object calling the method
```

- **_Simple function call_** 👉 this = undefined
- **_Arrow functions_** 👉 this <this is surrounding function (lexical this)>
- **_Event Listener_** 👉 this = \<DOM element that the handler is attached to>

#### **_NOTE_**

- `this` does **NOT** point to the function itself, and also **NOT** its variable environment
