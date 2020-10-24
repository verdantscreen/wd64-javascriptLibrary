import React, { useState } from "react";
import { Button, Input, Form, FormGroup, Label } from "reactstrap";
import "../styles/Register.css";

const RegisterComponent = (props) => {
  // create state variables (these will match our Login)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // create local helper state-change functions (which cause re-render)
  const triggerEmailInputChange = (event) => {
    setEmail(event.target.value);
  };
  const triggerPasswordInputChange = (event) => {
    setPassword(event.target.value);
  };
  const triggerPasswordConfirmInputChange = (event) => {
    setPasswordConfirm(event.target.value);
  };
  // create submit event function that POSTS to the registration route
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Procedure: verify there is an email and pw
    // Password and confirm password MUST match
    // Register user using a FETCH -> {server}/user/register

    if (email && password) {
      if (password === passwordConfirm) {
        //register user//
        console.log("REGISTERING USER");
        fetch("http://localhost:8080/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((response) => response.json())
          .then(() => {
            console.log("User is registered");
            // TODO: Login automatically
          })
          // .then((json) => {console.log(json.message);})
          .catch((error) => console.log(error));
      } else {
        // TODO: Tooltip instead of alert
        alert("passwords MUST match");
      }
    }
  };
  // think about how to handle a token
  return (
    <div id="registerForm" className="authForm">
      <h3>Looks like you're new here, let's get you registered.</h3>
      <Form onSubmit={handleRegisterSubmit}>
        <FormGroup>
          <Label htmlFor="emailRegisterField">Email:</Label>
          <Input
            onChange={triggerEmailInputChange}
            value={email}
            type="email"
            name="emailRegister"
            id="emailRegister"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passwordRegisterField">Password:</Label>
          <Input
            onChange={triggerPasswordInputChange}
            value={password} // hooked to
            type="password"
            name="passwordRegister"
            id="passwordRegister"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passwordRegisterConfirmField">
            Password Confirm:
          </Label>
          <Input
            onChange={triggerPasswordConfirmInputChange}
            value={passwordConfirm}
            type="password"
            name="passwordRegisterConfirm"
            id="passwordRegisterConfirm"
          />
        </FormGroup>
        <Button>Register!</Button>
      </Form>
    </div>
  );
};

export default RegisterComponent;
