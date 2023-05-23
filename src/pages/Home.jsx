import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Home/Gallery';
import '../sass/pages/home.scss'
import Banner from '../components/Common/Banner';
import Img from "../components/Common/home-banner-img.png"

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