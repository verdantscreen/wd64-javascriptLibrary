import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"; //anything within the { } is destructuring

import "./App.css";

import NavbarComponent from "./components/Navbar";
import LoginComponent from "./components/Login";
import RegisterComponent from "./components/Register";
import ListsComponent from "./components/Lists";

function App() {
  const [authenticationJWT, changeAuthJWT] = useState("");

  // useEFFECT NOTES:
  /* 
    1.) if you make a useEffect without an array, it will fire each time the app is rendered to the screen
    2.) if you make a useEffect with an empty array, it will fire only when the component is first MOUNTED to the screen
    3.) if you include a dependency in the array, it will fire when that dependency is updated 
    */
  //  this allows us to get the previous token if the user has already logged in (on refresh for example)

  useEffect(() => {
    if (window.localStorage.getItem("authToken")) {
      console.log("abc");
      changeAuthJWT(window.localStorage.getItem("authToken"));
    }
  }, []); //if you give an empty array, any time the app is remounted (hard refresh)

  const authenticateUser = (token) => {
    // purpose: save the JWT locally and in the browser
    window.localStorage.setItem("authToken", token);
    // Challenge: use the State Change function to set the new token in state
    changeAuthJWT(token);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent isLoggedIn={authenticationJWT} />
        <Switch>
          <Route exact path="/login">
            <LoginComponent authenticateUser={authenticateUser} />
          </Route>
          <Route exact path="/register">
            <RegisterComponent authenticateUser={authenticateUser} />
          </Route>
          <Route exact path="/myLists">
            <ListsComponent token={authenticationJWT} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
