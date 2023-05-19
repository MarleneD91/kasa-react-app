import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

//import { housingData } from '../../data/HousingData';

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState (0);

    //Slider navigation
    const previousImg = () => {
        const isFirstImg = currentIndex === 0;
        const newIndex = isFirstImg ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }
    const nextImg =() => {
        const isLastImg = currentIndex === slides.length - 1;
        const newIndex =  isLastImg ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className='slider'>
            <img src={`${slides[currentIndex]}`} alt="" />
            <div className='chevrons'>
                <FontAwesomeIcon className="chevron" icon={ slides.length>1 ? faChevronLeft : "" } onClick={ previousImg }/>
                <FontAwesomeIcon className="chevron" icon={ slides.length>1 ? faChevronRight : "" } onClick={ nextImg }/>
            </div>
            <div className='img-number'><p>{ slides.length>1 ? (currentIndex +1) + "/" + (slides.length): "" }</p></div>
        </div>
    )
}

export default Slider;