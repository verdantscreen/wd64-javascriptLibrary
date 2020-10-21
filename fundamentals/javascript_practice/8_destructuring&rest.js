// array destructuring is related to object destructuring
// array dstructuring allows us to grab specific values from an array of values and assign them to new variables

// without destructuring example:

const array = [
  "thing",
  42,
  false,
  { key: "value" },
  [1, 2, 3, 4, undefined],
  NaN,
];

let stringVar = array[0];
let numVar = array[1];
let alsoTwo = array[2];
let objVar = array[3];
let nanVar = array[array.length - 1];
let alsoFour = array[4];
let alsoFive = array[5];

let practice = array[4][3];

console.log(stringVar, numVar, objVar, nanVar, practice);

let [string, num, , obj, arr, nan] = array; //js interprets [] following let/const/var as variable assignment (double commas allow you to skip over items in the array that aren't of interest to you)
console.log(string, num, obj.key, arr[2], nan);

// spread operator (basically lets you spread out values in an array - or object- )

let newArr = [...array, "a", 1, undefined, ...array];
console.log(newArr);

const testObj = {
  testString: "string thing",
  testNum: 23,
  testBool: true,
  testObject: { key: "wally" },
  testArr: [1, 2, 3, 4, undefined],
  testNan: NaN,
};

const objString = testObj.testString;
const objNum = testObj.testNum;
const objObj = testObj.testObject;
const objNan = testObj.testNan;

console.log(objString, objNum, objObj, objNan);

let { testString, testObject, testNum, testNan } = testObj;
console.log(testString, testNum, testObject, testNan);

let newObj = {
  newString: "more strings",
  anotherString: "another string",
  ...testObj,
};

console.log(newObj);
