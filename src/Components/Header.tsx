import React from "react";
import { ReactDOM } from "react";
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';


export default function Header() {
    return (
        <Router>
            <Navbar className="navbarContainer" expand="lg">
                <Navbar.Brand className="brandName" as={NavLink} to="/">
                    <h3><span>MEAL</span> Map</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="navText" as={NavLink} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link className="navText" as={NavLink} to="/Pantries">
                            Pantries
                        </Nav.Link>
                        <Nav.Link className="navText" as={NavLink} to="/Resources">
                            Resources
                        </Nav.Link>
                        <Nav.Link className="navText" as={NavLink} to="/About">
                            About
                        </Nav.Link>
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
        </Router>
    );
} 