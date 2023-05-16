import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
 return (
    <div className='slider'>
        <img src="" alt="" />
        <div className='chevrons'>
            <FontAwesomeIcon className="chevron" icon={faChevronLeft}/>
            <FontAwesomeIcon className="chevron" icon={faChevronRight}/>
        </div>
    </div>
 )
}

export default Slider;