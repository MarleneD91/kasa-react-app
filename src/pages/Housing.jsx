import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Slider from '../components/Housing/Slider';


const Housing = () => {
    return(
    <div>
        <Header/>
        <div className='main-housing'>
            <Slider />
        </div>
        <Footer/>
    </div>
    )
}

export default Housing;