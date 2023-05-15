import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HousingGallery from '../components/Home/HousingGallery';


const Home = () => {
    return(
        <div>
            <Header/>
            <div className="main-home">
                <div className='cards-container'>
                <HousingGallery/> 
                </div>
            </div>
            <Footer/>        
        </div> 
               
    )
};

export default Home;