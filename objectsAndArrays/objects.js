/*
* **********
! OBJECTS
* **********
*/

let netflix = {
  id: 1,
  name: "The Office",
  season1: {
    seasonInfo: {
      episodeInfo: [
        {
          episode: 1,
          episodeName: "Pilot",
        },
        {
          episode: 2,
          episodeName: "Diversity Day",
        },
        {
          episode: 3,
          episodeName: "Health Care",
        },
        {
          episode: 4,
          episodeName: "The Alliance",
        },
        {
          episode: 5,
          episodeName: "Basketball",
        },
        {
          episode: 6,
          episodeName: "Hot Girl",
        },
      ],
    },
  },
  season2: {},
  season3: {},
};

//? DOT NOTATION
//While we use {} notation for arrays, we use DOT NOTATION for objects

//console.log("All Data", netflix);
//console.log("Just Season Info: ", netflix.season1.seasonInfo);
//we can utlize bracket notation as well as dot
console.log("Episode:", netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//? JSON OBJECTS
/*
    JavaScript Object Notation (JSON)
        - The JSON syntax is derived from JavaScript Object Notation syntax, but JSON format is text only
        - JSON exists as a string - useful to fetch data from a server
        - JSON needs to be converted to a native JS object if you want to access it
*/

let spaceJam = {
  toonSquad: {
    human: "MJ",
    rabbit1: "Bugs",
    rabbit2: "Lola",
    duck: "Daffy",
    tDevil: "Taz",
    bird: "Tweety",
    cat: "Syl",
    pig: "Porky",
  },
};

//Object.keys() will return any array of strings that represent the properties of that object

console.log(Object.keys(spaceJam.toonSquad)); // String of Keys

console.log(Object.keys(spaceJam.toonSquad.tDevil)); // string of the index numbers of that string value
console.log(Object.values(spaceJam.toonSquad.tDevil)); // string of the values of that string value
console.log(spaceJam.toonSquad.tDevil[2]);

console.log(Object.values(spaceJam.toonSquad));

//? Object Bracket Notation
/*
    - object bracket nation can also allow us to find a value in an object
    - using obn can be handy if we want to store a key in a variable and then use that variable to parse through an object
    - this works bc ALL keys in an object are STRINGS
*/

let garden = {
  vegetable: "zucchini",
  flower: "sun flower",
  fruit: "grape",
  water: true,
  sun: true,
  size: 10,
};

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

let test2 = Object.values(garden);
console.log(test2);
console.log(typeof test2[3]);

//Dot Notation:
console.log(garden.vegetable);

console.log(" ");
//Square Bracket
let flowerType = garden["flower"];
console.log(flowerType);
//We are accessing the keys within our object by a specific name within our square bracket. The key name that is passed needs to be wrapped in quotes as all keys in an object are strings

console.log("");
let baking = {};
baking["zucchini"] = "better make some bread";
//console.log(baking);
// we have the ability to set NEW key/value pairs using square brackets

console.log(baking[garden["vegetable"]]); // here we are saying the same thing as we did above, expect we are passing information from our object. garden['vegetable'] is the same as 'zucchini' up above.

let testObj = {
  "Spaces Here ": true,
  noSpaces: true,
};

console.log(testObj.noSpaces);
console.log(testObj["Spaces Here "]);
