/*
* *********
! CONSTRUCTOR FUNCTIONS
* *********
    - Functions allow us to easily create a unique solution for different circumstances by using parameters.
        - creating several different objects with the same keys but different values.
*/

// Opt 1:
let person1 = {
  name: "Macy",
  age: 24,
  canVote: true,
};
let person2 = {
  name: "Jeremy",
  age: 15,
  canVote: false,
};
let person3 = {
  name: "Tyler",
  age: 38,
  canVote: true,
};

// Opt 2:
//  1       2       3
function Person(name, age, canVote) {
  // 4   5       6
  this.name = name;
  this.age = age;
  this.canVote = canVote;
}

//console.log(typeof Person);

//              7    8
let person4 = new Person("James", 80, true);
console.log(person4);

/*

    1. keyword (function)
    2. function NAME. For constructor functions, the first letter SHOULD BE CAPITALIZED
    3. parameters. These will be the values of the objects once this function is in use
    4. the 'this' keyword gives us the ability to refer back to whatever called, or whatever activates it. In this case 'this' refers to 'Person'
    5. key of the new object we will create. this is NOT referring back to the parameter. 
    6. this is referring back to the parameter that we passed through.
    7. and 8. the 'new' keyword is calling our Person function, creating a new person with the values we are passing as arguments, and storing that person in a variable.
*/
