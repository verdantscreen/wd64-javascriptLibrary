import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  //  var         function
  const [isOpen, changeIsOpen] = useState(false); // array destructuring

  const toggleNavbarMenu = () => changeIsOpen(!isOpen);

  const loggedInView = (
    <>
      <NavItem>
        <Link to="/myLists">My Lists</Link>
      </NavItem>
      <NavItem>
        <p>Logout</p>
      </NavItem>
    </>
  );

  const loggedOutView = (
    <>
      <NavItem>
        <Link to="/login">Login</Link>
      </NavItem>
      {/* Add a register button */}
      <NavItem>
        <Link to="/register">Register</Link>
      </NavItem>
    </>
  );

  return (
    <Navbar light color="light" expand="sm">
      <NavbarBrand>ToDo</NavbarBrand>
      <NavbarToggler onClick={toggleNavbarMenu} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {props.isLoggedIn ? loggedInView : loggedOutView}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
