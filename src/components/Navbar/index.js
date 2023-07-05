import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex py-3 px-3">
            <Link className="text-slate-700 hover:text-sky-700 px-3" to="/">
                <span>Home</span>
            </Link>
        </div> 
	);
};

export default Navbar;
