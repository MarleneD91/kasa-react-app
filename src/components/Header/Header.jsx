import React from "react";
import Navbar from "./NavBar";
import PinkLogo from "./logo.png"
import '../../sass/header.scss'



const Header = () => {
    return (
        <div className="header">
            <img className="pink-logo" src={PinkLogo} alt="kasa pink logo"></img>
            <Navbar/>
        </div>
    )
}

export default Header;