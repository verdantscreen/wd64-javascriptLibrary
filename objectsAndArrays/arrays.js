/*
* **********
! ARRAYS
* **********


*/

//? POPULATING AND REFERRING

let list = ["orange", "banana", "oreos"];
console.log(list[1]);

// JS begins counting at 0, so in this array it is 0-2
// when we call an array, we can append square brackets onto the end of our array name containing the index number we want to reference. This is SQUARE BRACKET NOTATION.
/*
//let students = [
  "Tony",
  "Marshall",
  "Rhys",
  "Ray",
  23,
  true,
  ["Ryan", "Iesha", "Amira"],
//];
*/
//console.log(typeof students);
//console.log(students instanceof Array); // the instanceof operator is used to check the type of an object at run time. Remember that arrays are technically objects (see instanceof JavaScript MDN)

//console.log(students[2]);

/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/
let students = [
  "Tony",
  "Marshall",
  "Rhys",
  "Ray",
  23,
  true,
  ["Ryan", "Iesha", "Will"],
];

console.log(students[1]);
console.log(students[6][2]);
console.log(`Hello ${students[1]}!`);
console.log("Hello " + students[6][2] + "!");

//? ARRAY METHODS
// We have multiple methods to allow us to manipulate arrays as needed.

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheesecake", "Hotdog"];
for (foodItem of food) {
  console.log(foodItem);
}

//Add to our array
food.push("Pizza");
console.log("push: ", food);

//Remove and insert

food.splice(1, 1, "Bananas"); //removes shrimp, inserts bananas: (position, number of items, replacement with)
console.log("splice: ", food);

//food[1] = "Apples"; //not a method, just targeting a position but same result
//console.log(food);

food.splice(2, 0, "Sweet Potato Pie"); //injecting without removing any items
console.log("splice 2: ", food);

//Remove from end
food.pop(); // pop the last item of an array
console.log("pop: ", food);

//Adds to the start
food.unshift("Popcorn", "Steak"); //unshift adds one or more elements to the beginning of the array
console.log("unshift: ", food);

//Remove from start
food.shift(); //shift removes the first element in an array
console.log("shift: ", food);

//? LENGTH

//We can use a method called length() to tell us how many values are within our array

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ["blue", " green", " yellow", " red", " orange", " purple"];
console.log(colors.length); //items within objects/arrays are values

console.log(colors);
console.log(colors.toString());

let bool = [true, true, false, null];
console.log(bool);
console.log(bool.toString());

//? ITERATING
/*
    forEach - 
        - the forEach() method executes a provided function once for each element in an array - much like a for loop or a for-of loop (streamline the for loop)

        - runs three arguments:
            1. The Value
            2. The Index
            3. The array object itself
*/
//      3                   1   2
// arrayObject.forEach((value, index) => return);

let foodList = ["apple", "pear", "mushroom", "cheese", "peach"];

for (let i = 0; i < foodList.length; i++) {
  console.log(foodList[i]);
}
//We invoke callback function for each element within our array
foodList.forEach((foodItem) => console.log(foodItem));

// a call back function is another function we invoke within our main function

//syntax
// function print(callBack) {
//   callBack();
// }

foodList.forEach((foodItem, index) => {
  console.log(foodItem);
  console.log(index);
});
// - the second position of the parameter is ALWAYS

/*
! CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/
console.log("");
console.log("Original:");
console.log("");
let moviesList = ["Inherent Vice", "Billy Madison", "Casino", "It Follows"];
moviesList.forEach((movieItem, index) => {
  console.log(movieItem);
});
console.log("");
console.log("After Push:");
console.log("");
moviesList.push("Jurassic Park");
moviesList.forEach((movieItem, index) => {
  console.log(movieItem);
});
console.log("");
console.log("After Splice:");
console.log("");
moviesList.splice(1, 1, "Jackie Brown");
moviesList.forEach((movieItem, index) => {
  console.log(movieItem);
});
console.log("");
