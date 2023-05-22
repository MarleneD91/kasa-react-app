//libraries
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

//Common components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//Specific components
import Slider from '../components/Housing/Slider';
import Housingheader from '../components/Housing/Housing-header';
import Dropdown from '../components/Common/Dropdown';

//Data
import { housingData } from '../data/HousingData';

//Style
import '../sass/pages/housing.scss';

//Icons
//Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Housing = () => {
    //Dropdown manager
    const [isOpen,setIsOpen] = useState(false);
    function handleCollapse() {
        setIsOpen(true); 
    }

    //Get the housing page id
    let housingId = useParams();
    const theHousing = housingData.find(element => element.id === housingId.id);
    console.log(theHousing.location);

    //Get imgs form housing data
    const housingImg = theHousing.pictures;

    //Making equipments as a list
    const housingEquipment = theHousing.equipments;
    const equipmentArray = Object.values(housingEquipment);

    //Tags as a list
    const housingTags = theHousing.tags;
    const tagsArray = Object.values(housingTags);

    //Host info
    const hostInfo = theHousing.host;

    //Rating
    const arrayOf5 = [1,2,3,4,5];
    const ratingValue = parseInt(theHousing.rating);
    

    return(
    <div>
        <Header />
        <div className='main-housing'>
            <Slider key="slider" slides={housingImg}/>
            <Housingheader  key={housingId}
                            id={housingId}
                            title={theHousing.title}
                            location={theHousing.location} 
                            tags={tagsArray.map(e=> <li key={e} className='tag'>{e}</li>)} 
                            hostName={hostInfo.name} 
                            hostImg={hostInfo.picture} 
                            stars={arrayOf5.map( e => <FontAwesomeIcon key={e} className={e <= ratingValue ? "pink-star star" : "grey-star star"} icon={faStar}/> 
                            )}/>
            <div className='housing-dropdowns'>
                <Dropdown   key={`description${theHousing.id}`} 
                            title="Description" text={theHousing.description} 
                            isOpen={isOpen} onClick={handleCollapse} />
                <Dropdown   key={`equipments${theHousing.id}`}
                            title="Équipements" text={equipmentArray.map(e => <li key={e}>{e}</li> )}  
                            isOpen={isOpen} onClick={handleCollapse} />
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Housing;