# **_PRIMITIVES VS OBJECTS_**

## **_Review: Primitives, Objects and the JavaScript Engine_**

### **_Primitives_**

- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

`NOTE It is common to call Primitives 'Primitive Types'`

### **_Objects_**

- Object literal
- Arrays
- Functions
- Many more...

`NOTE It is common to call Objects 'Reference Types'`

<br>
<br>

### **_JS ENGINE_**

Two components: **The Call Stack**, and the **Heap**

- **The Call Stack:**
  Where functions are executed, and Primitive Types are stored
- **The Heap:**
  Where Objects(Reference Types) are stored in memory

<br>
<br>

### **_Primitive Values Example_**

```
let age = 30;
let oldAge = age;
age = 31;
console.log(age) //31
console.log(oldAge) //30
```

<br>

#### **_how primitives are stored in the call stack_**

| Identifier | Address | Value |
| :--------: | :-----: | :---: |
|    age     |  0001   |  30   |
|   oldAge   |  0001   |  30   |

- We would think that the indentifier would point to the value, but in fact it points to the addresss in memory
- The value at a certain memory address is immutable.
- In line 3 when we change the age to 31, it changes the memory address of the indentifier

| Identifier | Address | Value |
| :--------: | :-----: | :---: |
|   oldAge   |  0001   |  30   |
|   agege    |  0002   |  31   |

<br>
<br>

### **_Reference Values Example_**

```
const me = {
  name: "Nick",
  age: 30
};
const friend = me;
friend.age = 27;

console.log('Friend: ', friend);
//{ name: 'Nick, age: 27 }

console.log('Me: ', me);
//{ name: 'Nick', age: 27}
```

<br>

#### **_How Reference Types are stored in the Stack/Heap_**

<br>

#### **_Heap_**

| Address |            Value            |
| :-----: | :-------------------------: |
|  D30F   | `{ name: 'Nick', age: 30 }` |

- The `me` indentifier does not point to the newly created memory address in the heap, but a new memory address in the call stack

#### **_Call Stack_**

| Identifier | Address | Value |
| :--------: | :-----: | :---: |
|   oldAge   |  0001   |  30   |
|   agege    |  0002   |  31   |
|     me     |  0003   | D30F  |

- The piece of memory in the call stack stores the value of the address to the object in the heap (because objects may be too large to store in the stack)
- Next we create the `friend` variable which will point to the same address as the `me` indentifier in the call stack (which in turn points to the memory address in the heap)

#### **_Call Stack_**

| Identifier | Address | Value |
| :--------: | :-----: | :---: |
|   oldAge   |  0001   |  30   |
|   agege    |  0002   |  31   |
|     me     |  0003   | D30F  |
|   friend   |  0003   | D30F  |

- So now we set the age property of friend by setting `friend.age = 27;`, which changes the age value in the heap because it references that memory address

#### **_Heap_**

| Address |              Value              |
| :-----: | :-----------------------------: |
|  D30F   | `{ name: 'Nick', age: ✨27✨ }` |

- This shows how const is immutable only when working with primitive values not reference values
- SO in conclusion, when we log the `me` object it changes also because it is also pointing to the same object in the memory heap (SO USE THE SPREAD OPERATOR)
- NOTE a good way to think about this is when you create a new variable to copy an object, you're really just creating a new variable that points to the exact same object

<br>
<br>

## TOPICS FOR LATER

- Prototypal Inheritance > (learning in OOP)
- Event Loop > (learning in Asynchronus JS: Promises, Asyc/Await and AJAX)
- How the DOM Really works > (learning in Advanced DOM and Events)
