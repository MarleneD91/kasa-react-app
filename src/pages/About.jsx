import React from 'react';

// HEADER & FOOTER - COMPONENTS
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// SPECIFIC COMPONENTS
import Banner from '../components/Common/Banner';
import Img from "../images/about-banner-img.png"
import AboutDropdown from '../components/About/About-Dropdown';

// STYLESHEET
import '../sass/pages/about.scss'

//React component
const About = () => {
    return(
    <div>
        <Header/>
        <div className="main-about">
            <Banner page="about" img={Img}/> 
            <AboutDropdown/>
        </div>
        <Footer/>
    </div>
    )
}

export default About;