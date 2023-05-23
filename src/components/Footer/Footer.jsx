//LIBRARIES
import React from "react";

//LOGO
import WhiteLogo from "../../images/logo-footer.png";

//STYLESHEET
import '../../sass/components/footer.scss'

const Footer = () => {
    return(
        <div className="footer">
            <img className="white-logo" src={WhiteLogo} alt="kasa white logo"></img>
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </div>
    )
};

export default Footer;