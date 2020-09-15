/*
* ***********
! HOISTING
* ***********
    What is hoisting?
    - undesirable effect
    - JS pulls all variables and functions calls to the 'top' of their respective scope prior to being executed
    - only the declaration is pulled up NOT the assignment
*/

// console.log(hoistedVar);

// console.log("How JS sees hoistedVar: ", typeof hoistedVar);
//var hoistedVar = "using var";
//let hoistedVar = "using let";

//console.log(noVariable);

//? Hoisting in a Function
// reads it, pushes declaration to top, then reads them in order
// This process is considered the same within a function. On the first pass, it reads it, pushes declarations to the top and then executes them in the order they are written.

function testHoist() {
  becomesGlobal = "not declared, it becomes part of the global scope";
  console.log("Prior to declaring ", insideFunc);
  var insideFunc = "Rules still apply here";
  console.log(insideFunc);
}

testHoist();
console.log(becomesGlobal);

// it is best practice to ALWAYS declare variables regardless of whether they are in a function or global scope. This makes it clear how it should be handled.

//? Using LET
// the keyword 'let' is block scoped and not function scoped.

console.log(letVariable);
let letVariable = "Using let";
// this throws a ReferenceError due to ES6 not accepting undeclared variable. This is to ensure that we always declare our variables FIRST

//? Hoisting Function
// Function Declarations:

hoistedFunc();
function hoistedFunc() {
  console.log("This is a function");
}

//Function Expressions:
//These are NOT hoisted.

expressionFunc();
let expressionFunc = function () {
  console.log("Works?");
};

/*var declaration; // without assignment
console.log(usage);

declaration = 10; // assigning our value
console.log(usage);

var usage = declaration + 10;

console.log(usage);
*/
