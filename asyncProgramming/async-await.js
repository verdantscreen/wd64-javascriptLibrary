//! ASYNC/AWAIT
/*

    - allows us to program in a synchronous manner while still allowing code to run in the background
    - makes our site as responsive as possible
*/

//? Async Function (syntax)
/*  
    - allows us to make a normal function asynchronous. Can use "await"
    - must use the async keyword at the beginning of the function declaration
*/

async function myFn() {
  //await...
}

const myAsyncFn = async () => {
  //await...
};

async function fn() {
  return "Hello";
}

fn().then(console.log);

fn().then((dataFromAsyncFun) => {
  console.log(dataFromAsyncFun);
});

//? Await
// pauses at each await expression

fetch("https://random.dog/woof.json")
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

// - chaining .then() together returns a promise (resolve/reject) and is known as method chaining

//const response = await fetch("https://random.dog/woof.json");
//const json = await response.json();
//console.log(json);

const request = async () => {
  const response = await fetch("https://random.dog/woof.json");
  const json = await response.json();
  return json;
};

request().then((json) => {
  console.log(json);
});

//Challenge: link to HTML to check what information you can pull from this js file
