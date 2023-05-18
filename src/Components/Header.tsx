import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { NavLink } from "react-router-dom";
import { linkurls } from '../constants/linkurls';

export default function Header() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Navbar className="navbar-container" expand="lg">
        <Navbar.Brand className="brandName">
          <Nav.Link className="navText" as={NavLink} to="/">
            <h3><span>MEAL</span> Map</h3>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {linkurls.map((item, index) => (
              <Nav.Link className="navText" key={item.id} as={NavLink} to={item.url}>{item.name}</Nav.Link>
            ))}
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
    </div>
  );
}
