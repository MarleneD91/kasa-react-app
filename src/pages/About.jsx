import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from '../components/Common/Banner';
import Img from "../components/Common/about-banner-img.png"
import Dropdown from "../components/Common/Dropdown";
import { aboutData } from '../data/About-data';


const About = () => {
    console.log(aboutData);
    const AboutDropdown = () => {aboutData.map(element =>(
        <Dropdown key={element.title} title={element.title} text={element.description}/>
    ))};
    return(
    <div>
        <Header/>
        <div className="main-about">
            <Banner img={Img}/> 
            <div className='about-dropdowns'>
            <AboutDropdown/>
            <p>???</p>
            </div>   
        </div>
        <Footer/>
    </div>
    )
}

export default About;