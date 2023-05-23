import React from 'react';

//HEADER & FOOTER - COMPONENTS
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

//SPECIFIC COMPONENTS
import Gallery from '../components/Home/Gallery';
import Banner from '../components/Common/Banner';
import Img from "../images/home-banner-img.png"

//STYLESHEET
import '../sass/pages/home.scss'

//React component = page
const Home = () => {
    return(
        <div>
            <Header/>
            <div className="main-home">
                <Banner page="home" img={Img} text="Chez vous, partout et ailleurs"/>
                <Gallery/> 
            </div>
            <Footer/>        
        </div> 
               
    )
};

export default Home;