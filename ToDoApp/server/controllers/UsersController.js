const { Router } = require("express"); //brings in Router object

const bcrypt = require("bcrypt");

//const User = require("../models/index").user;

const { user } = require("../models/index");

const UsersControllerRouter = Router();

// CRUD code for users
// C create a user by registration (url): "/register"
// R read user profile (url: "/profile", "/login")
// U update user info (url: "/update")
// D delete user profile (nuke 'em) (url: "/delete")

// types of requests:
// POST create new info, insert info into DB or sends info to compare to DB
// GET retrieve info or pull info from DB (or give me an html doc)
// PUT update existing info ALWAYS
// DELETE delete existing info from DB

UsersControllerRouter.post("/register", (req, res) => {
  // process
  // 1. retrieve the data from the body of the request
  // 2. use that data to craft a user (express doesn't have that ability, so we'll need another tool)
  // 3. save the user to the DB (express doesn't have that ability, so we'll need another tool)
  // 4. respond w the status of the action

  let { email, password } = req.body; //object destructuring
  let newUser = user.build({
    email: email,
    password: bcrypt.hashSync(password, 12),
  });
  newUser
    .save()
    .then(() => {
      console.log("[server]: new user created");
      res.json({
        message: "created user successfully",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "failure of user creation",
      });
    });
  // res.json({
  //   message: "hello from the user register route!",
  // });
});

UsersControllerRouter.post("/login", (req, res) => {
  // PROCESS:
  // retrieve data from the body of the request
  // verify that user exists in our DB, and compare to make sure that data matches the user entry in our DB
  // if so respond with a token; if not respond with an error
  res.json({
    message: "hello from the user login route!",
  });
});

// TODO: implement the following routes: "profile", "update", "delete"

module.exports = UsersControllerRouter;
