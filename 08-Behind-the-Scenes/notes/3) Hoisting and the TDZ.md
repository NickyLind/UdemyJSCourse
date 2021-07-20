# **_Hoisting and The TDZ_**

## **_Hoisting in JavaScript_**

### **_Hoisting_** -

Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".
**Before execution**, code is scanned for variable declarations, and for each variable, a new property is created in the **variable environment object**

|                                 |                  Hoisted?                   |    Initial Values    |  Scope   |
| :-----------------------------: | :-----------------------------------------: | :------------------: | :------: |
|      function declarations      |                    YES✅                    |   Actual function    |  Block   |
|          var variables          |                    YES✅                    |      undefined       | Function |
|     let and const variables     |                    NO🚫                     | \<uninitialized> TDZ |  Block   |
| function expressions and arrows | Depends on if you're using var or let/const |

<br>
<br>

## **_Temporal Dead Zone, Let & Const_**

### **_Temporal Dead Zone (TDZ)_** -

- code in a code block before when a variable is defined and cannot be used (lines of code above where the variable is defined)
- trying to log a variable in a TDZ will return a `ReferenceError: Cannot access 'varableName' before initialization`
- all variables get a TDZ starting where their scope begins and ending when the variable is defined

### **_Why TDZ?_**

- **Makes it easier to avoid and catch errors:** accessing variables before declaration is bad practice and should be avoided. This feature was introduced to help identify when this happens.
- **Makes `const` variables actually work:** `const` variables can't be reassigned so unlike `var` which starts as undefined, const must initialize as defined.

### **_Why Hoisting?_**

- **Using functions before actual declaration:** essential for some programming techniques such as **mutual recursion**, and arguably makes code look more neat
- `var` hoisting was the only way hoisting could be implemented at the time. **`var` hoisting is essentially just a byproduct, and can't be removed from the language because of backward compatability**
