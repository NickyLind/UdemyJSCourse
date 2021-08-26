# **_FIRST-CLASS vs HIGHER-ORDER FUNCTIONS_**

## **_First-Class Functions_**

- JavaScipt treats functions as **first-class citizens**
- This means that functions are **simply values**
- Functions are just another **"type" of object**

  - Store funcitons in variables of properties:

    ```
    const add = (a, b) => a + b
    ```

    ```
    const counter = {
      value: 23,
      inc: function() {
        this.value++;
      }
    }
    ```

  - Pass functions as arguments to OTHER functions:
    ```
    const greet = () => console.log('Hey Nick');
    btnClose.addEventListener('click', greet)
    ```
  - Return functions FROM functions
  - Call methods on functions
    ```
    counter.inc.bind(someOtherObject);
    ```

## **_Higher-Order Functions_**

- A function that **recieves** another function as an argument, that **returns** a new function, or **both**
- This is only possible because of first-class functions

  1. **Function that recieves another function**

  ```
  const greet = () => console.log('Hey Nick');
  btnClose.addEventListener('click', greet)';
  // addEventListener is a Higher-order function because it recieves the greet function as an input (which is a callback function)
  ```

  2. **Function that returns new function**

  ```
  function count() {
    let counter = 0;
    return function() {
      counter++;
    }
  }
  //count() is a higher-order function that returns an anonymous function
  ```

## **_The difference between First-Class and Higher-Order functions_**

- First-Class functions are simply a feature of a programming language that means functions are values
- Higher-Order components exist because a language **has** First-Class functions
