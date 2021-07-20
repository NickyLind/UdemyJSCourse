JS ENGINE - Program the executes JS code. Every browser has it's own JS Engine. Chrome has V8 which also runs node.js

All JS engines contain a Call Stack and a Heap
Call Stack - Where code is executed via execution context
Heap - memory pool that stores all objects our application needs

COMPUTER SCIENCE SIDENOTE: COMPILATION VS. INTERPRETATION

Compilation - Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer

Source Code STEP ONE(COMPILATION)> Portable File: machine code STEP TWO(EXECUTION)> Program running

Interpretation - Interpreter runs through the source code and executes it line by line (converted into machine code right before execution(slow))

Source Code STEP ONE(EXECUTION LINE BY LINE)> Program Running

Just-in-time (JIT) Compilation - Entire code is converted into machine code at once, then executed immediately

Source Code STEP ONE (COMPILATION)> Machine Code(NOT a portable file) STEP TWO(EXECUTION)> Program running

MODERN JUST-IN-TIME COMPILATION OF JAVASCRIPT

    1) Parsing - parsed into Data Structure called the Abstract Syntax Tree (AST) saves all meaningful pieces that are useful to the JS language and saves them to the Tree in an orderly way.

RUNTIME IN THE BROWSER
