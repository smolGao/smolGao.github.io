import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import "../styles/SideBar.css";

const SideBar = () => {
  return (
    <>
      <Navbar id="sidebar" expand="lg">
        <Navbar.Brand>
          <img id="profile-image" src="/images/Profile.jpg"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="dropdown">
              <Nav.Link as={Link} to="/">About</Nav.Link>
              <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
              <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default SideBar;
