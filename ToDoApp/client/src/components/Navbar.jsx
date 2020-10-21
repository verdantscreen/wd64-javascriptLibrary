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

const NavbarComponent = () => {
  //  var         function
  const [isOpen, changeIsOpen] = useState(false); // array destructuring

  const toggleNavbarMenu = () => changeIsOpen(!isOpen);

  return (
    <Navbar light color="light" expand="sm">
      <NavbarBrand>
        <Link to="/">ToDo</Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbarMenu} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/lists">Lists</Link>
          </NavItem>
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
