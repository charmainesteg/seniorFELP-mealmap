import React from "react";
import './Footer.css';
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { linkurls } from "../constants/linkurls";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <a className="navbar-brand" href="/"><h3><span>MEAL</span> Map</h3></a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde nisi vero impedit vitae, ad minima quaerat doloribus veniam odio iure inventore, nobis necessitatibus corrupti beatae. Autem ducimus excepturi voluptates!</p>
                        <div className="footer-icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-square-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-tiktok"></i>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <h5>Quick Links</h5>
                        <ul>
                            {linkurls.map((item, index) => (
                                <li className="nav-item" key={item.id}>
                                    <Nav.Link className="navText"
                                        as={NavLink}
                                        to={item.url}>{item.name}</Nav.Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 ft-3">
                        <h5>Contact Info</h5>
                        <p><i className="fa-solid fa-phone"></i>+1 1234567890</p>
                        <p><i className="fa-solid fa-envelope"></i>charmaine.stegall@ey.com</p>
                        <p><i className="fa-solid fa-location-dot"></i>123 Meal Map Ave</p>
                    </div>
                </div>

            </div>
        </footer >
    );
}
