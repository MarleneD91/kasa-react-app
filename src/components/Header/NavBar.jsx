import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return ( 
  	<nav className="navbar" role="navigation" aria-label="navigation">
        <NavLink className="navlink" to="/">Accueil</NavLink>
        <NavLink className="navlink" to="/about">A propos</NavLink>
    </nav>
  );
 };
 
 export default Navbar;