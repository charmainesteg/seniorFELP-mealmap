import React from "react";
import Navbar from "./Navbar";
import './Header.css';

// placeholder links for pages
/* const navigation = {
    links: [
        {name: "Home", to: "/home" },
        {name: "Pantries", to: "/pantries" },
        {name: "Resources", to: "/resources" },
        {name: "About", to: "/about" }

    ]
} */
export default function Header(){
    return(
        <div className="container">
            <Navbar/>
            {/* insert navbar
            insert logo
            insert search  */}
        </div>
    )
} 