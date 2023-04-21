import React from "react";
import Navbar from "./Navbar";

const navigation = {
    links: [
        {name: "Home", to: "/home" },
        {name: "Pantries", to: "/pantries" },
        {name: "Resources", to: "/resources" },
        {name: "About", to: "/about" }

    ]
}
function Header(){
    return(
        <div>
            <Navbar links={navigation.links}/>
            {/* insert navbar
            insert logo
            insert search  */}
        </div>
    )
}

export default Header; 