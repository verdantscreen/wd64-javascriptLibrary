/*
* **********
! SYNTAX
* **********

keyword varName = [...arrayName];
*/

const nameOne = ["Eric", "Wine"];
const nameTwo = ["Zach", "May"];
const copiedNames = ["Adam", "Jayne", ...nameOne, ...nameTwo];
console.log(copiedNames);

const copiedNamesDiff = ["Adam", "Jayne", nameOne, nameTwo];
console.log(copiedNamesDiff);

/*
since the spread operator is pulling out all items of an array, we need to make sure we use the spread operator within a new array. this is so the values that were pulled out get placed into our new array.

...arrName (if not within array, will throw error)

- We can add to our original array without altering our copied array
    - dependent on what data types we are using
*/

nameOne.unshift("Mr");
console.log("Altered: ", nameOne, "Spread: ", copiedNames);

// order matters

/*
* ***********
! ...NUMBERS
* ***********
*/

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 5.49];
console.log(Math.min(prices)); //expects numbers not an array
console.log(Math.min(...prices)); // spread operator pulls elements out of the prices array to allow the min method to work

/*  
* ********
! OBJECTS
* **********
*/

const persons = [
  {
    name: "Lore",
    species: "Android",
  },
  {
    name: "Picard",
    species: "Human",
  },
];

const copiedPersons = [...persons];
persons.push({ name: "Worf", species: "Klingon" });
console.log("Obj", persons, "SO", copiedPersons);
// we are only changing the original array

/*
    - primitive variable = primitive value
    e.g.:
        let x = 10;
        let y = 'abc';
        let z = null;

    - JS stores to memory both variable and values:
    Variables   Values
    x           10
    y           'abc'
    z           null

    e.g.:
    let a = x;
    let b = y;
    console.log(x, y, a, b) -> 10, 'abc', 10, 'abc'

    - Altering one would not affect the previous
    a = 5;
    b = 'xyz';
    console.log(x, y, a, b) -> 10, 'abc', 5, 'xyz'

Pass-by-reference compared to pass-by-value

- 3 Data Types that are passed by reference: Array, Functions, and Objects
    - JS has six primitive types: string, number, boolean, null, undefined, symbol (everything else is treated as an object)
    -  arrays, functions, and objects are all technically objects/nonprimitive values
    - nonprimitive variables are given a reference value - the reference points to the location in memory.
    ** for this example, pretend datatype: address is denoted by < >

    let arr = [];
    arr.push(1);

    in memory, our code would look like this: 

    VARIABLES   VALUES  ADDRESS OBJECT
        arr     <#001>  #001    []     
        arr     <#001>  #001    [1]

        let ref = [1];
        let refCopy = ref;

        - Memory:
     VARIABLES   VALUES  ADDRESS OBJECT
        ref      <#001>    #001    [1]   
     refCopy     <#001>
        
ref.push(2)
console.log(ref, refCopy) -> [1,2], [1,2]

    */
copiedPersons[0].name = "Data";
console.log("Obj:", persons, "SO", copiedPersons);

/*
* ******************
! ... & AVOIDING CHANGING BOTH THE ORIGINAL & COPIED ARRAY
* ******************
*/

const comics = [
  //original array
  { title: "Spider-Man", year: 1962 },
  { title: "Detective Comics", year: 1939 },
];

const copiedComics = comics.map((comic) => ({
  //saving a copy of the original array inside variable copiedComics; map method returns an array to us, what is inside of that returned array depends on what functionality we give it
  title: comic.title,
  year: comic.year,
}));

comics.push({ title: "Calvin and Hobbes", year: 1985 });
console.log("Before Altering: ", copiedComics);
copiedComics[1].title = "Detective Comics #27";
console.log("After Altering: ", comics, copiedComics);
