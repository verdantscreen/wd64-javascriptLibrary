/*
PROMISES - The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

Essentially, a Promise is code that is on it's way after it finishes running somewhere else. This is a key idea of understanding how asynchronous programming works within JavaScript.

Promises have 3 possible states:
    1.pending
    2.resolved aka fulfilled
    3.rejected
                    executor
syntax: new Promise(function (resolve, reject) {...} );
*/
// Boolean declaration
var amIGood = false;

// Promise
var iCanHasGift = new Promise(function (resolve, reject) {
  if (amIGood) {
    var gift = {
      brand: "HasMattelbro",
      item: "Turbo-Man action figure",
    };
    resolve(gift); // fulfilled
  } else {
    var naughty = "You've made Santa's naughty list; enjoy your coal!";
    reject(naughty); // rejected
  }
});
// Promise call
var checkTwice = function () {
  iCanHasGift
    .then(function (fulfilled) {
      // nice list = gift
      console.log(fulfilled);
      // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'}
    })
    .catch(function (error) {
      // naughty list = coal
      console.log(error);
      // output: "You've made Santa's naughty list; enjoy your coal!"
    });
};

checkTwice();

// 2nd promise
var playDate = function (gift) {
  return new Promise(function (resolve, reject) {
    var message =
      "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " +
      gift.brand +
      " " +
      gift.item +
      "?";

    resolve(message);
  });
};

// Promise call
var checkTwice = function () {
  console.log("before Christmas"); // log before
  iCanHasGift
    .then(playDate)
    .then(function (fulfilled) {
      console.log(fulfilled);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log("after opening gifts"); // log after
};

checkTwice();
