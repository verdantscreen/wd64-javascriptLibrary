/*
* ***********
! FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
* ***********
    - create a variable named FB that gets initialized with a number
    - write a conditional that:  - 100 range
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - otherwise, prints the number
*/

/* let FB = 0;
for (let FB = 0; FB <= 100; FB++) {
  if (FB % 3 == 0 && FB % 5 == 0) console.log(`Fizz Buzz`);
  else if (FB % 5 == 0) console.log(`Buzz`);
  else if (FB % 3 == 0) console.log(`Fizz`);
  else console.log(FB);
} */

/* for (let fb = 0; fb <= 100; fb++) {
  let fizz = fb % 3 == 0;
  let buzz = fb % 5 == 0;
  console.log(fizz ? (buzz ? "Fizz Buzz" : "Fizz") : buzz ? "Buzz" : fb);
} */

/*let fB = 20;
fB % 3 === 0 && fB % 5 === 0
  ? console.log("Fizz Buzz")
  : fB % 5 === 0
  ? console.log("Buzz")
  : fB % 3 === 0
  ? console.log("Fizz")
  : console.log(fB); */
/*
for (let fb = 1; fb <= 100; fb++) {
  switch (true) {
    case fb % 15 == 0:
      console.log("Fizz Buzz");
      break;
    case fb % 5 == 0:
      console.log("Buzz");
      break;
    case fb % 3 == 0:
      console.log("Fizz");
    default:
      console.log(fb);
  }
}*/

let f = "Fizz ";
let b = "Buzz";
let l = console.log;
for (let fb = 1; fb < 100; fb++) {
  if (fb % 15 == 0) {
    l(f + b);
  }
  if (fb % 5 == 0) {
    l(b);
  }
  if (fb % 3 == 0) {
    l(f);
  } else {
    l(fb);
  }
}
