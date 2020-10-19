// C-reate R-ead U-pdate D-elete
//Purpose:
// Crud for LISTS
// Crud for ITEMS
// Crud for USERS
// C-reate R-ead U-pdate D-elete

// index.js is the collection point for all controllers
// index.js is the outlet point for all controllers

// Current Goal: create a Test Controller
// compartmentalize it in a file

const TestController = require("./TestController");

const UsersController = require("./UsersController");

module.exports = {
  test: TestController,
  users: UsersController,
};
