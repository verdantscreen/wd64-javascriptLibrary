/*
* *********
! CLASSES   
* **********
    - classes can be defined by either expression or declaration
    - classes are functions
    - classes act as a blueprint for creating objects
        - e.g.: model could be a property of a class of automobile. Each new automobile we create that's a copy of our original class and could have a different value for the property of model
    - body of a class is between {}
    - constructor method is a special method for creating and initializing an object that was created with a class
        - there can only be ONE constructor method
        - can use the keyword "super"
        - the super keyword is used to access and call functions on an object parent 
        - Introduced in ES5 (closest thing in vanilla JS to object oriented programming)
            - new way to write previous existing prototype-based inheritance 

*/

/*
* **************
! CLASS DECLARATION
* **************
*/

class Automobile {
  constructor(make, model) {
    // instanced properties must be defined inside of class methods, like the constructor method.
    this.make = make;
    this.model = model;
  }
}

//Hoisting: unlike function declaration, class declarations are not hoisted. A class declaration needs to be declared before accessing it.

/*
* **************
! CLASS EXPRESSIONS
* **************
    - can be named or not named
    - the name given to an unnamed class expression is local to the class's body
    - the name of a named class can be retrieved through the class's name property

*/

//* unnamed:
let Vehicle = class {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
};
console.log(Vehicle.name);

//* named:
let Auto = class Mobile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
};
console.log(Auto.name);

/*
* **************
! CLASS Methods
* **************
    - introduced is ES5
        - prototype methods are shorter for method definitions

*/
// Method Definition (OLD SYNTAX)
const automobile = {
  start: function () {
    //
  },
  stop: function () {
    //
  },
};

//Prototype Method (NEW SYNTAX)
const autoMobile = {
  start() {
    //
  },
  stop() {
    //
  },
};

class AutoMobile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  // method 1
  start() {
    console.log(`This ${this.make} ${this.model}'s engine is started.`);
  }

  // method 2
  stop() {
    console.log(`This ${this.make} ${this.model}'s engine is stopped.`);
  }
}
/*
* **********
! NEW INSTANCE
* **********
    - using the keyword 'new' we can create a new object/instance of the Automobile class
*/
// new object/instance of the class

let hondaCivic = new AutoMobile("Honda", "Civic");
hondaCivic.start();
hondaCivic.stop();
let fordEscape = new AutoMobile("Ford", "Escape");
fordEscape.start();
fordEscape.stop();

/*
* *************
! CONSTRUCTOR METHOD
* *************
    - special method that allows us to create and initialize an object from a class
    - works along with the 'new. keyword
    - needs to be included to create new objects and instances of our class
        - sets properties
        - passes values for properties
*/

class Cookie {
  constructor(type, icing, shape) {
    // the parameters we note will be the values we want passed and stored in the object
    this.t = type;
    this.i = icing;
    this.s = shape;
    // LEFT SIDE: assigning our keys for the values we pass in
    // RIGHT SIDE: the accepted values from our parameters.
  }
}

let chocolateChip = new Cookie("chocalate chip", false, "circle");
let sugarCookie = new Cookie("sugar cookie", "pink", "star");
//console.log(chocolateChip.type); // undefined bc we renamed the placeholder type to t
console.log(chocolateChip.t);
console.log(chocolateChip.i);
console.log(chocolateChip.s);
console.log(chocolateChip);
console.log(sugarCookie.t);
console.log(sugarCookie.i);
console.log(sugarCookie.s);
console.log(sugarCookie);
console.log(
  `I want a ${sugarCookie.s}-shaped ${sugarCookie.i}-frosted ${sugarCookie.t}.`
);

/*
* *******************
! EXTENDS
* *******************
    - keyword is used in class declaration/expression to create a new class
    - each new class created inherits the properties and methods from the parent class
    - can have its own properties and methods
        - also know as a subclass

*/

//* PARENT
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eats their food.`);
  }
}

//* SUBCLASS

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 'super' must come prior to 'this' keyword or it will cause an error
    this.type = breed;
  }
  play() {
    console.log(`The ${this.type} named ${this.name} fetches the ball!`);
  }
}

let fido = new Dog("Fido", "mutt");
fido.eat();
fido.play();
//Animal.play(); // this breaks bc can't access method without Dog
//it's conventional to use pascal casing for custom data types, like classes
