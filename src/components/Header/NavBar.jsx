//LIBRARIES
import React from "react";
import {NavLink} from "react-router-dom";

//React component
const Navbar = () => {
  return ( 
  	<nav className="navbar" role="navigation" aria-label="navigation">
        <NavLink className={({ isActive }) => "navlink" + (isActive ? ' active' : '')} to="/">Accueil</NavLink>
        <NavLink className={({ isActive }) => "navlink" + (isActive ? ' active' : '')} to="/about">À propos</NavLink>
    </nav>
  );
 };
 
 export default Navbar;