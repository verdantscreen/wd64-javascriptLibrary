/*
* **********
!TYPES
* **********
*/
/*
? Data and Structure Types 
* **********
    - Primitive Data Types
        - boolean 
        - undefined 
        - number 
        - string 
            - bigInt*
            - symbol*
    - null 
    - Object 
    - Function 
*/

//? BOOLEANS
//* **********

// A boolean has two possible values: true or false

let on = true;
let off = false;

console.log(on);

// ? NULL
/* Empty value. Think of this as an empty container with space to fill*/

let empty = null;
console.log(empty);

//? UNDEFINED
// No value has been assigned to a container.

let undef = undefined;
console.log(undef);
let password;
console.log(password);

/*
    - Null is like a container with nothing in it. (Null you can trust as zero.)
    - Undefined is when a variable has never been set, or hasn't been created yet. (Undefined, not so much.)
*/

//?NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 999999999999999; //15 9's
console.log(precise);

let rounded = 9999999999999999; //16 9's
console.log(rounded);
// JS gives us space for 15 9's before rounding up.

let notQuite = 0.2 + 0.1;
console.log(notQuite);
// JS rounds out at a certain number, so if math is needed be aware!

let whatIf = 0.2 * 10 + 0.1 * 10;
console.log(whatIf);
let numberAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numberAreHard);
console.log("." + whatIf);

//? STRINGS
// Strings represent text and are wrapped in either single or double quotes.

let doubleQuote = "Double Quote";
let singleQuote = "Single Quote";
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = "I've";
console.log(inception, singleQ);

//? Numbers vs String
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = "1050" + "100";
console.log(addTheseAlso);

console.log(typeof addThese);
console.log(typeof addTheseAlso);

// we can use an operator called 'typeof' that returns a string telling us exactly what our variable "type" is. (see also: type-casting line 95)

let stringToNumber = Number("1150");
console.log(stringToNumber);
console.log(typeof stringToNumber);

// const log = console.log;
//log("test");

//? OBJECTS
/*
    - Store many values as opposed to single value
    - Consider these a collection of various properties
    - denoted by curly brackets: {}
     - contained details are called keys: values and sets are separated by commas ,
*/

let frodo = {
  race: "hobbit",
  rings: 1,
  sting: true,
};

console.log(frodo);
console.log(typeof frodo);

let obj = {
  key: "value",
};

console.log(obj);

//? ARRAYS
/* special type of object

    - Containers that hold a list of items.
    - denoted by []
    - all items are within the []
    - regardless of data type, each item is separated by a comma

*/

let arrayList = ["pos 1", "pos 2", "pos 3"];
console.log(arrayList);
let anotherExample = [1, 2, "three", true];
console.log(anotherExample);
console.log(typeof anotherExample);
// JS classified arrays as objects and not a datatype of their own.

let objArr = [
  {
    race: "hobbit",
    rings: 1,
    sting: true,
  },
];

console.log(objArr);

//? ADDITION vs CONCATENATION
/*

    - JS sees the "+" symbol in two different ways.'
        - when combined with numbers, uses built-in math functionality
        - when comvbined with strings, it ignores math and concats the two strings

*/

let strings = "one" + " " + "is a number";
let concatDiff = 1050 + "100";
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);
//let concatDiff = Number(1050 + "100");
//console.log(concatDiff);

/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = "Jenat";
let lastName = "Heneghan";
let houseNumber = "not telling";
let street = "Tecumseh Street";
let city = "Indianapolis";
let state = "IN";
let zipcode = 46201;
console.log(
  houseNumber + " " + street + " " + city + " " + state + " " + zipcode
);
console.log(houseNumber, street, city, state, zipcode);

//? String: Properties

/*
    - strings have propertiesm or qualities associated with that string
    - length of a string is an example of a property
*/

let myName = "Jenat";
console.log(myName.length);

//? String: Methods
/*
    - methods are tools that can help us manipulate our data
    - 
*/

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.includes("e"));
