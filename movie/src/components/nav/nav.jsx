import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

function Nav() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <Navbar className="">
      <Container fluid>
        <h1>
          <img src="/img/Logo.png" width={30} alt="" />
          <Navbar.Brand href="#" className="ps-2">
            Love U Ma
          </Navbar.Brand>
        </h1>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="me-auto">
          <Navbar.Brand href="#" className="ps-2 ms-auto">
            Login
          </Navbar.Brand>
          <Navbar.Brand href="/login" className="ps-2 ">
            LogOut
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
