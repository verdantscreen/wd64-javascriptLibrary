import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"; //anything within the { } is destructuring

import "./App.css";

import LoginComponent from "./components/Login";
import NavbarComponent from "./components/Navbar";

function App() {
  const [authenticationJWT, changeAuthJWT] = useState("");

  // TODO: load up the auth token if it's stored locally (on startup)

  //create helper function that saves JWT locally AND in the browser:
  const authenticateUser = (token) => {
    window.localStorage.setItem("authToken", token);
    changeAuthJWT(token);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Switch>
          <Route path="/login">
            {/* name of component  */}
            <LoginComponent authenticateUser={authenticateUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
