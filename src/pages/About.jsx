import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from '../components/Common/Banner';
import Img from "../components/Common/about-banner-img.png"
import AboutDropdown from '../components/About/About-Dropdown';
import '../sass/pages/about.scss'



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