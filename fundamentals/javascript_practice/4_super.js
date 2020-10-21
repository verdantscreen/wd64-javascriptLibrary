const { extend } = require("lodash");

class User {
  constructor(name) {
    this.name = name;
    this.type = "Trial User";
  }
  // Method 1
  greet() {
    console.log("Welcome back, " + this.name);
  }
  // Method 2
  status() {
    console.log("Current status: " + this.type);
  }
}

// instance of the class/new object
let anonDude = new User("Anonymous Dude");

// we can now use the instance and the . operator to access the 2 methods

anonDude.greet();
anonDude.status();

// super
class BronzeLevelUser extends User {
  constructor(username, password, ccinfo) {
    // if youre gonna use 'this' in your constructor
    // you gotta have super that points to parent constructor
    super(username, password);
    // the 'this' keyword wouldn't work without super
    this.type = "Bronze User";
    this.ccinfo = ccinfo;
  }
  getInfo() {
    console.log(this.username, this.password, this.type, this.ccinfo);
  }
}

let bronzeGuy = new BronzeLevelUser(
  "Bronze Dude",
  "bronzebro80",
  "9090 9090 9090 9090"
);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);
