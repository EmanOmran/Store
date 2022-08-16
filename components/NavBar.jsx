import React, { useContext } from "react";
import logo from "../image/infinity logo.jpg";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Countercontext } from "./Counter";

function NavBar() {
  const {count}=useContext(Countercontext)
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home" s>
          <img src={logo} width="200" height="80" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <pre> </pre>
            <NavLink className="text-dark fs-4" to="/">
              Home
            </NavLink>
            <pre> </pre>
            <NavLink className="text-dark fs-4" to="/about">
              About
            </NavLink>
            <pre> </pre>
            <NavLink className="text-dark fs-4" to="/Contact">
              Contact
            </NavLink>
            <pre> </pre>
            <NavLink className="text-dark fs-4" to="/LogIn">
              Login
            </NavLink>
            <pre> </pre>
            <NavLink className="text-dark fs-4" to="/Sign_up">
              Signup
            </NavLink>

            <pre> </pre>
            <div className="header_search h-5 ">
              <input
                type="text"
                placeholder="search"
                aria-label="search"
                aria-describedby="inputGroup-sizing-sm"
                className="border border-white"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="header_searchInput fs-3 "
              />
            </div>
            <pre> </pre>

            <span className="fs-4 text-dark">
              {" "}
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="header_searchInput fs-1 "
                
              />
            </span>
            <NavLink className="nav-link" to="/Date">
              {count}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
