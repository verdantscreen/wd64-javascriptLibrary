/*
* ************
! FUNCTIONS
* ************

Functions are a process that we call on to run an action
    - take an input so it can process it or just respond to it
    - returns a value (but not always)
    - can be invoked (called up) as often as needed
*/
/*
//1        2
function hi() {
  console.log("Hi!");
}

//1: keyword
//2: name of function and the parenthesis for the parameter

// 1        2         3
function functionName() {
  //     4
  return value;
}
//   5 "start button" //1-4 "coffee maker"
functionName();

/*
    - 1: KEYWORD "function"
    - 2: NAME of "functionName"
    - 3: PARAMETER "currently empty"
    - 4: STATEMENT "to process"
    - 5: INVOKE "on switch"
*/
/*
//? FUNCTION DECLARATION
// chunk of code that performs a set action when it is invoked
*/

function functOne() {
  console.log("Statement Here");
}
functOne();

//? Function Expression
// Assigning a function to a variable is what is called an EXPRESSION
let first = function functTwo() {
  console.log("Second Statement");
};

first();
// console.log(first);

//? Anonymous Function
// Anonymous Functions are stored in memory but the runtime doesn't automatically create a reference to it

let anon = function () {
  console.log("anon function");
};

anon();
