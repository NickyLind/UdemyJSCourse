# **_Scoping and Scope in JavaScript_**

### **_Scoping_** -

How our program's variables or organized and accessed. "Where do variables live?" or "Where can we access a certain variable and where not?".

### **_Lexical Scoping_** -

Scoping in controlled by placement of functions and blocks in the code.

### **_Scope_** -

Space or environment in which a certain variable id **declared** (variable environent in case of funcitons). There is **global** scope, **function** scope, and **block** scope.

### **_Scope of a variable_** -

Region of our code where a certain variable can be **accessed**

## 3 Types of Scope

### **_Global Scope_**

- variable exists outside of **any** function or block
- variables declared in global scope are accessable **everywhere**

### **_Function Scope_**

- Variables are accessible only **inside function, NOT** outside
- Also called local scope

### **_Block Scope (ES6)_**

- Variavles are accessible only **inside block** (block scoped, "{ }")
- **HOWEVER**, this only applies to **let** and **const** variables
- Functions are **also block scoped** (only in strict mode)
