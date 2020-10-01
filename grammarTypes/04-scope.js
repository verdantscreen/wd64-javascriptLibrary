/*
* ***********
!SCOPE
* *********
    What is scope?

   - scope is how a computer keeps track of all variables in a program
   - scope can also be nested, where there's an outer scope (global) that encloses an inner scope.
   - scope can be defined within a function (local) e.g. index value in a for loop

*/

const scope = "Earth"; // this is currently in the global scope of our JS file

function localScope() {
  //let scope = "Indiana"; // the state (local) within the JS "World/Globe"
  // console.log(`${scope} marks the local scope`);

  let place = "Bloomington";
  function veryLocalScope() {
    //let scope = 'Indianapolis';
    console.log(`${scope} is the capitol of Indiana`);
    console.log(`Just outside, we went to ${place}.`);
  }
  veryLocalScope();
}

console.log(`${scope} marks the global scope.`);
localScope();

// Scope Chain: if a variable is not found, JS attempts to locate the requested information outside. lexical or static scope. similar to parent/child nesting relationship of html: children have access to parent aspects, but parents do not have access to child aspects

//console.log(place);

//! ORDER MATTERS JavaScript reads from top to bottom and acts accordingly; it's known as a single-threaded language (meaning it can onlt execute a single task at a time)

let ordered = 1;

function layerOne() {
  let ordered = 2;

  function layerTwo() {
    let ordered = 3;
    console.log(ordered);
  }

  layerTwo();
  console.log(ordered);
}

layerOne();
console.log(ordered);

//? Reassignments / VAR vs LET
// share a lot of the same capabilities BUT:
// - var is scoped to the nearest function block
// - let is scoped to the nearest enclosing block

let a = 10;

function reassign() {
  a = 30; // we are keeping this variable open and with the 'let' keyword we are capable of changing the value
}
console.log(`a is being set to ${a} in this function.`);
reassign();
console.log(`After reassigning function: ${a}`);

var x = 2;

function varScope() {
  var x = 4;
  if (true) {
    var x = 5;
    console.log(x);
  }
  console.log(`Var Block Scope: ${x}`);
}

varScope();
console.log(x);

// statements like "if" or loops dont create a new scope. If a variable is defined inside a block statement, it will remain in the scope. However, we can utilize let and const as keywords to help us control how our variables are viewed.
