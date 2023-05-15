import React from "react";
import WhiteLogo from "./logo-footer.png";
import '../../sass/components/footer.scss'

const Footer = () => {
    return(
        <div className="footer">
            <img className="white-logo" src={WhiteLogo} alt="kasa white logo"></img>
            <p className="all-rights">© 2020 Kasa. All rights reserved</p>
        </div>
    )
};

export default Footer;