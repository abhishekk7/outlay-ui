import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaDollarSign, FaUserCircle } from "react-icons/fa";

class NavigationTop extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">
          <FaDollarSign size={30} style={{ margin: "0 10px" }} /> Outlay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="\home">Home</Nav.Link>
            <Nav.Link href="\transactions">Transactions</Nav.Link>
            <Nav.Link href="\trends">Trends</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              alignRight
              title={
                <span>
                  <FaUserCircle size={30} style={{ margin: "0 10px" }} />
                  MS DHONI
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationTop;
