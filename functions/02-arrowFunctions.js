/*
* **********
! ARROW FUNCTIONS
* **********
    
Arrow functions are expressional functions that can be simplified into one of two forms, CONCISE and BLOCK BODY.
The main goal is to generate shorter syntax for writing a function.

* Arrow Functions also DO NOT get hoisted.

*/

function regFunc() {
  console.log("Regular");
}
regFunc();

//    1         2   3       4
let arrowFunc = () => console.log("Arrow Func");
arrowFunc(); //still need to invoke our function

/*
    1. Arrow functions are ALWAYS anonymous (no name)
    2. Parameters can still be injected
        - if we have one parameter, we technically don't need the parens ()
        - BUT if we are not passing any parameters, it is REQUIRED to use ()
    3. This syntax tells JS that we are about to process a function
    4. Within this format, JS assumes the return statement
    */

/* 
* ***********
! CONCISE
* ***********
*/

//*Concise:

let cBody = (x, y) => console.log(x + y);
cBody(1, 2);

let slightlyComplex = (x, y) =>
  x > 2 && y < 2
    ? console.log(`${x} is greater than 2 and ${y} is less than 2`)
    : console.log(`${x} and ${y} are where we want them`);

slightlyComplex(3, 1);
slightlyComplex(1, 5);

//* Block

let blockArrow = (x, y) => {
  return `${x} are within a ${y}`;
};

console.log(blockArrow(`We`, "Block Body"));

let sampleBlock = (x) => {
  console.log(x);
};

sampleBlock(99);
