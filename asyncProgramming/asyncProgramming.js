//!  ASYNCHRONOUS PROGRAMMING
/*
    - synchronous programming is code read line by line (JS)
    - asynchronous programming:
        - allows a program to do more than one thing at a time
        - makes it possible to run long-running actions without stopping the program to wait for a response/data from API

*/

//? Synchronous Sample: Execution Stack
const secondSync = () => {
  console.log("Second Hello");
};

const firstSync = () => {
  console.log("First Hello");
  secondSync();
  console.log("End");
};

firstSync(); //invoke

// "First Hello" - then "Second Hello" - then "End". Once the one before is completed, the next will execute.

//? Asynchronous Sample:
const networkRequest = () => {
  setTimeout(() => {
    console.log("Async Code");
  }, 2000); //setTimeout has two arguments: callback (our console log) and time measured in ms (milleseconds)
};
console.log("Hello World");
networkRequest();
console.log("The End");

// Event Loop: looks into the call stack and determines if it is empty or not. If empty, it considers if there is any waitinig callback that needs to be executed (our console.log('Async Code')). Multithreaded processing; Event Loop tries to use a single "factory" as multiple, fracture your set up

//! API
/*
    Application Program Interface (API)
    - NOT a database or server
    - allow us access points to server
        - comes in the form of ENDPOINTS
        - endpoints direct us to set of data 
    ? REST API
    - REpresentational State Transfer API
        - creates an object of requested data by the client, send values in response to user
    - Methods:
        CRUD
            Create (POST)
            Read (GET)
            Update (PUT)
            Delete (DELETE)
*/

//! FETCH ()
/*
    - the fetch() method is an asynchronous method. part of the browser, NOT JS!
    - the fetch() method starts the process of "fetching" a resource. Will return a promise and respond ONCE that promise is fulfilled (accepted vs rejected). //sort of like eventListeners except that they can only succeed or fail once

        Promise:
            - an unknown value when created
            - represents the eventual fulfilled value or rejection (error)
        *Promises always one of these states:
            1. Pending: initial state, neither fulfilled nor rejected
            2. Fulfilled: meaning the operation completed successfully
            3. Rejected: meaning the operation failed
    */
