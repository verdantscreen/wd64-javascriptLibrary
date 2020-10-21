// ES6 JS Classes

class User {
  constructor(name) {
    this.name = name;
    this.type = "Trial User";
  }
  // method 1
  greet() {
    console.log("Welcome back, " + this.name);
  }
  // method 2
  status() {
    console.log("Current status: " + this.type);
  }
}

class TrialUser extends User {
  trialEnding() {
    console.log(
      "Your trial is ending soon, " + this.name + ". " + "Wanna join?"
    );
  }
}

// instance of User class

let anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

// instance of TrialUser class

let trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends TrialUser {
  bannedUserReason() {
    console.log(
      "Too bad! You've been banned for posting fake news repeatedly."
    );
  }
}

let bannedUser = new BannedUser("Garfield");
bannedUser.greet();
bannedUser.trialEnding();
bannedUser.bannedUserReason();
