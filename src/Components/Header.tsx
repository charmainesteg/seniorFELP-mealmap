import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';


export default function Header(){
    return (
        <Navbar className="navbarContainer" expand="lg">
            <Navbar.Brand className="brandName" href="#"><h3><span>MEAL</span> Map</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className="navText" href="#">Home</Nav.Link>
                <Nav.Link className="navText"href="#">Pantries</Nav.Link>
                <Nav.Link className="navText"href="#">Resources</Nav.Link>
                <Nav.Link className="navText"href="#">About</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="searchButton">Search</Button>
              </Form>
            </Navbar.Collapse>
        </Navbar>
      );
} 