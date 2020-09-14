/* 
* *******
! FOR LOOPS
* *******
    - loops helps us repeat a process without writing a lot of code

    - Need to:
        1) Create an Index
        2) Run a Condition
        3) Change the indexing variable (execution of condition)
*/

//for (let i = 0; i <= 10; i++) {
//  console.log(i);
//}

/* 

    we state our loops with a "for".
    within this function, we are injecting some parameters that JS will run against
        (index; condition; change index -> result)

        for(create index variable; <run condition>; <change index>) {
            <return results>
            *will cont. until run condition is met.
        }

*/

//let x = 20;
//let i = 10;
//for (i; i <= x; i++) {
//  console.log(i);
//}

//! CHALLENGE
//* Using a for loop, set an index to 2. Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration.

//for (let i = 2; i > -10; i -= 4) {
//  console.log(i);
//}

//let word = "supercalifragilisticexpialidocious";

//for (let i = 0; i < word.length; i++) {
//  console.log(i, word[i]);
//}

/*
* **********
! FORIN LOOP
* **********
    
*/

let city = {
  name: "Indy",
  pop: 900000,
  speedway: true,
};

for (info in city) {
  console.log(info);
  console.log(city[info]);
}

/*
    for( variable IN object){
        <statement>
    }
*/

let list = ["milk", "eggs", "beans", "bread", "banana"];

for (item in list) {
  //console.log(item);
  console.log(list[item]);
}

/*//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
//let name = "piCard";
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let fullName = "piCard";

for(letter in fullName) {
  console.log(letter);
  console.log(fullName[letter]);

letter == 0 ? fullName = name[n].toUpperCase() : fullName += name[n].toLowerCase();
}

console.log(fullName);*/

/*
    1) we are taking the value of the "n" index and declaring the position of 0
    2) we assign our empty variable to equal that positioned value
    3)if that index is 0, we will take that value and run a "/toUpperCase()" method on it
    4) if the index is NOT 0 we still want to include it into our empty variable and utilize our += expression so it knows to add the next value (or n++)
    5) if the index is NOT 0, we want to run a ".toLowerCase()" method so all letters are in proper case

*/

/* 
* ***********
! FOROF LOOP
* ***********
- In order to run a FOR OF loop, the "thing" must be numbered like an array

let object = {
    key: value,
    key: value,
    key: value
};

for(o of object) {
    <breaks>
}
*/

let indexArr = ["spot 1", 2, true, "four"];

for (pos of indexArr) {
  console.log(pos);
}

/*
? Quick recap:
    for loop: loops thru a block of code until counter reaches specified number
    for in loop: loops thru properties of an object
    for of loop: loops over iterable objects as in arrays and strings * strings can be accessed much in the same way as arrays.
*/
