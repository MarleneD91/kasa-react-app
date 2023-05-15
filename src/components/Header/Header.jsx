import React from "react";
import Navbar from "./NavBar";
import PinkLogo from "./logo.png"
import '../../sass/components/header.scss'



const Header = () => {
    return (
        <div className="header">
            <a href="/home"><img className="pink-logo" src={PinkLogo} alt="kasa pink logo"></img></a>
            <Navbar/>
        </div>
    )
}

export default Header;