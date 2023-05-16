import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Home/Gallery';
import '../sass/pages/home.scss'
import Banner from '../components/Common/Banner';
import Img from "../components/Common/home-banner-img.png"
import { housingData } from '../data/HousingData';


const Home = () => {
    console.log(housingData);
    return(
        <div>
            <Header/>
            <div className="main-home">
                <Banner img={Img} text="Chez vous, partout et ailleurs"/>
                <Gallery/> 
            </div>
            <Footer/>        
        </div> 
               
    )
};

export default Home;