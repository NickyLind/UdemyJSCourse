# **_CLOSURES_**

## **_Understanding Closures_**

- A function has access to the variable environment (VE) of the execution context in which it was created
- **Closure:** VE attached to the function, exactly as it was at the time and place the function was created

## **_Closures Summary_**

- A closure is the closed-over **variable environment** of the execution context **in which a function was created**, even **_after_** that execution context is gone.
  - (_less formal definition_) - A closure gives a function access to all the variables **of its parent function**, even **_after_** that parent function has returned. The function keeps a **reference** to its outer scope, which **_preserves_** the scope chain throughout time.
  - (_less formal definition_) - A closure makes sure that a function doesn't lose connection to **variables that exisited at the function's birth place**
  - (_less formal definition_) - A closure is like a **backpack** that a function carries around wherever it goes. This backpack has all the **variables that were present in the environment where the function was created**

_NOTE_: We do **NOT** have to manually create closures, this is a JavaScript feature that happens automatically. We can't even access closed0over variables explicitly. A closure is **NOT** a tangible JavaScript object.
