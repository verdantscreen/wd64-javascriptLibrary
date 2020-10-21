import React, { useState } from "react";
// same as const React = require('react'); -- older more established way for JS
import { Button, Form, FormGroup, Label, Input } from "reactstrap"; // object destructuring of reactstrap

const LoginComponent = (props) => {
  // execute the function
  // step 1a of mounting a react component: set a const array equal to useState hook (set up state variables)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // step 1b of mounting a react component: create local functions/execute the local procedure
  const triggerEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const triggerPasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // if both email and pw are present, we want to send them off to the api to verify whether its an existing user in db
    // if the response is OK, take the token and call the props.authenticateUser function with that token
    // if the response is NOT OK, display an error message and do nothing
    if (email && password) {
      // ^^ this works bc blank strings are falsy
      fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email, // shorthand for email: email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((body) => {
          //body of the jsonified response that comes back in the promise
          props.authenticateUser(body.token);
        })
        .catch((error) => console.log(error));
    }
  };

  // step 2 of mounting a react component: return the JSX component // if state change, trigger the re-render(loop back up to execute the function, if state change bring in new state values)
  return (
    <div>
      <h3>Login</h3>
      <Form onSubmit={handleLoginSubmit}>
        <FormGroup>
          <Label htmlFor="emailField">Email:</Label>
          <Input
            onChange={triggerEmailInputChange}
            value={email}
            type="email"
            name="email"
            id="email"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passwordField">Password</Label>
          <Input
            onChange={triggerPasswordInputChange}
            value={password} // hooked to
            type="password"
            name="password"
            id="password"
          />
        </FormGroup>
        <Button>Log In</Button>
      </Form>
    </div>
  );
};

// challenge: create a login form w 2 inputs (email and password)
// take note: for == htmlFor
// import your component into app.js
// mount the component in the app component

export default LoginComponent;
// same as module.exports = LoginComponent; -- older more established way for JS
