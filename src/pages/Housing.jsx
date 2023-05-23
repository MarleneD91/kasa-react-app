//LIBRARIES
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

//HEADER & FOOTER - COMPONENTS
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//SSPECIFIC COMPONENTS
import Slider from '../components/Housing/Slider';
import Housingheader from '../components/Housing/Housing-header';
import Dropdown from '../components/Common/Dropdown';

//DATA
import { housingData } from '../data/HousingData';

//STYLESHEET
import '../sass/pages/housing.scss';

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


//React component = page
const Housing = () => {

//1 - Get the data
    //Dropdown manager
    const [isOpen,setIsOpen] = useState(false);
    function handleCollapse() {
        setIsOpen(true); 
    }

    //Get the housing page id
    let { housingId }= useParams();

    //Get housing (id-entified) data
    const theHousing = housingData.find(element => element.id === housingId);

    //Go to error page with a wrong housing url id
    if (!theHousing) {
        return <Navigate to="/error"/>;
    }
  
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

//2- Return the JSX with data values    
    return (
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