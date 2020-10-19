// this file is a collection point and outlet for all models

const User = require("./userModel"); // bring it in

module.exports = {
  // object literal: handwritten object (not behind the scenes)
  user: User,
};
