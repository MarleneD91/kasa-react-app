import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from '../components/Common/Banner';
import Img from "../components/Common/about-banner-img.png"


const About = () => {
    return(
    <div>
        <Header/>
        <div className="main-about">
            <Banner img={Img}/> 
            <div>
                
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default About;