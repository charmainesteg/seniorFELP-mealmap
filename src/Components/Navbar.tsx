import React from "react";

const Navbar = (props: {links: Array<{name: string; to: string}>}) => {
    const {links} = props;
    const NavLinks: any = () => links.map((link: {name: string, to: string}) => <li key={link.name}><a href={link.to}>{link.name}</a></li>)
    return (
        <div>
            <NavLinks/>
        </div>
    );
}

export default Navbar;