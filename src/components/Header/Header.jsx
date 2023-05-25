//LIBRARIES
import React from "react";

//COMPONENT
import Navbar from "./NavBar";

//LOGO
import PinkLogo from "../../images/pink-logo.svg"

//STYLESHEET
import '../../sass/components/header.scss'

//React component
const Header = () => {
    return (
        <div className="header">
            <a href="/"><img className="pink-logo" src={PinkLogo} alt="kasa pink logo"></img></a>
            <Navbar/>
        </div>
    )
}

export default Header;