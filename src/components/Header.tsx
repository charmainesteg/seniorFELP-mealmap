import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { PageLinks } from "../constants/PageLinks";
import SearchPantry from "./SearchPantry";

export default function Header() {
  return (
    <div>
      <Navbar className="navbar-container" expand="lg">
        <Navbar.Brand className="brand-name" as={NavLink} to="/">
          <h3>
            <span>MEAL</span> Map
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {PageLinks.map((item, index) => (
              <Nav.Link className={item.className} key={item.id} as={NavLink} to={item.url}>
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
          <SearchPantry/>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}