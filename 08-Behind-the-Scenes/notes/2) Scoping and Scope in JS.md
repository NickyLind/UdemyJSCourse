# **_Scoping and Scope in JavaScript_**

<br>
<br>

### **_Scoping_** -

How our program's variables or organized and accessed. "Where do variables live?" or "Where can we access a certain variable and where not?".

### **_Lexical Scoping_** -

Scoping in controlled by placement of functions and blocks in the code.

### **_Scope_** -

Space or environment in which a certain variable id **declared** (variable environent in case of funcitons). There is **global** scope, **function** scope, and **block** scope.

### **_Scope of a variable_** -

Region of our code where a certain variable can be **accessed**

<br>
<br>

## **_3 Types of Scope_**

### **_Global Scope_**

- variable exists outside of **any** function or block
- variables declared in global scope are accessable **everywhere**

### **_Function Scope_**

- Variables are accessible only **inside function, NOT** outside
- Also called local scope

### **_Block Scope (ES6)_**

- Variables are accessible only **inside block** (block scoped, "{ }")
- **HOWEVER**, this only applies to **let** and **const** variables
- Functions are **also block scoped** (only in strict mode)

<br>
<br>

## **_Scope Chain VS. Call Stack_**

### **_Scope Chain_** -

- order in which functions are **written in the code.**
- has **nothing** to do with order in which functions were **called**

<br>
<br>

## **_Summary_**

- Scoping asks the question "Where do variables live" or "where can we access a certain variable, and where not?"
- There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks
- Only let and const variables are block-scopes. Variables declared with var end up in the closest function scope
- In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written
- When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup.
- The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope
- The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes
- The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!
