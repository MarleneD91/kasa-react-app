//libraries
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

//Common components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//Specific components
import Slider from '../components/Housing/Slider';
import Dropdown from '../components/Common/Dropdown';

//Data
import { housingData } from '../data/HousingData';

//Style
import '../sass/pages/housing.scss';




const Housing = () => {
    //Dropdown manager
    const [isOpen,setIsOpen] = useState(false);
    function handleCollapse() {
        setIsOpen(true); 
    }
    //Get the housing page id
    let housingId = useParams();
    console.log(housingId);
    console.log(housingId.id)

    const theHousing = housingData.find(element => element.id === housingId.id);
    console.log(theHousing);
    /*const housingKeys = Object.keys(theHousing);
    console.log(housingKeys);
    const housingArray = Array.from(theHousing);
    console.log(housingArray);*/


    //Get imgs form housing data
    const housingImg = theHousing.pictures;
    console.log (housingImg);

    //For slider

    /*let dataArray = [];
    let slides = [];
    let SliderImg = [];
    {housingData.map (data => {
        if(data.id === housingId){
        dataArray = [data[data.id]];
        console.log(dataArray);
        slides = [data.id, data.pictures];
        console.log(slides);
        console.log(slides[1]);
        
            SliderImg = slides[1];
        };
    })}*/
    return(
    <div>
        <Header />
        <div className='main-housing'>
            <Slider key="slider" slides={housingImg}/>
            {/*theHousing.map (element => (*/}
                <div className='dropdowns'>
                    <Dropdown key={`description${theHousing.id}`} title="Description" text={theHousing.description} isOpen={isOpen} onClick={handleCollapse} />
                    <Dropdown key={`equipments${theHousing.id}`} title="Équipements" text={theHousing.equipments} isOpen={isOpen} onClick={handleCollapse}/>
                </div>
           {/*))}*/}
        </div>
        <Footer/>
    </div>
    )
}

export default Housing;