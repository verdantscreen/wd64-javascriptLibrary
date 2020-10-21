// we name the class
class User {
  // we call the constructor function and create parameters
  // these parameters will be the values that we want to be passed in and stored in the object
  constructor(first, last, e) {
    // on the right side of these expressions (the word 'first', 'last', and 'e' below)
    //we have the value that is getting passed into the parens when the object is created
    this.f = first;
    this.l = last;
    this.email = e;
    // on the right side, we have the actual properties of the object
    // the left side stores the incoming value from the right side as
    //the property for 'this' specific object being created
  }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); // undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Connor
console.log(userOne); // User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org" }

class Wizard {
  constructor(one, two, three) {
    this.wand = one;
    this.robes = two;
    this.curse = three;
  }
}

let harry = new Wizard("phoenix", "green", "expecto patronum");
console.log(harry.curse);

let hermione = new Wizard("unicorn", "periwinkle", "wingardium leviosa");
console.log(hermione.robes);
