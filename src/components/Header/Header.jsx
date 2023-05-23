//LIBRARIES
import React from "react";

//COMPONENT
import Navbar from "./NavBar";

//LOGO
import PinkLogo from "../../images/logo.png"

//STYLESHEET
import '../../sass/components/header.scss'

//React component
const Header = () => {
    return (
        <div className="header">
            <a href="/home"><img className="pink-logo" src={PinkLogo} alt="kasa pink logo"></img></a>
            <Navbar/>
        </div>
    )
}

export default Header;