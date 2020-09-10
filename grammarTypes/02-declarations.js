/*
* *******
! VARIABLES
* ********
*/

console.log("hello");
// the console log is a debugging tool

let a = 2;

/*
 - let : is our KEYWORD
 - a : is our NAME of our variable
 - = : is our ASSIGNMENT OPERATOR
 - 2 :  is our variable VALUE
*/

let b = 1;

console.log(a + b);

//! RESTRICTIONS
/*
    - a variable name must begin with a letter, underscore, or $
    - numbers may follow the above characters, but CANNOT come first
    - javascript IS case sensitive - 'hello' and 'Hello' will be different variables.
    - no spaces are allowed in variable names.
    - camelCase is typically best practice for naming.
    - e.g.: 
        let myName = "Eric";
        is easier to read than
        let myname = "Eric";
*/

let startingWithLetter = "Works";
let _startingWithUnderscore = "Works";
let $startingWithDollar = "Works";
let PascalCaseEqual = "Works";
// let 4startingWithNumber = "Breaks";

console.log(
  startingWithLetter,
  _startingWithUnderscore,
  $startingWithDollar,
  PascalCaseEqual
);

/*
* Keywords

var, let, and const

    - var: "old" keyword that stands for variable ** We won't use this often but it is still viable to use.

    - let: "new" keyword for variable. (introduced with ES6 *newest version of ECMAScript, which is a standardizarion of JS)

    - const: also "new" keyword that declares an UNCHANGEABLE, or constant, variable.
*/

var variable = "var variable";
let letVariable = "let variable";

// let function = 1; cannot use reserved words within a variable name - * function is a reserved word.

/*
* *******
! DECLARATIONS & INITIALIZATIONS
* ********
*/
// declarations are the LEFT SIDE of the assignment operator
let x;

//initializations are the RIGHT SIDE of the assignment operator
//let x = 10;

// 10 is our initialization

let y;
console.log("declaration:", y);

y = 10;
console.log("initialization:", y);

y = 33;
console.log("initialization 2:", y);
//var y;
//hoisting is a side effect of being rushed/legacy build, not a feature

// We've set our variable with our let keyword. With each iteration, we have redeclared what it is.

//? const

let today = "Great!";
const efa = "Wonderful!";
console.log(today, efa);

today = "Awesome!";
console.log(today, efa);

//efa = "Super";
console.log(today, efa);
// const allows us to make a variable that we do not want to change.
