// LIBRARIES
import React, { useState } from 'react';

//COMPONENT
import Dropdown from "../Common/Dropdown";

//DATA
import { aboutData } from '../../data/About-data';

// React component
const AboutDropdown = () => {
    const [isOpen,setIsOpen] = useState(false);
    function handleCollapse() {
        setIsOpen(true); 
    }
    return(
        <div className='about-dropdowns'>
            {aboutData.map(element => (
            <Dropdown key={element.title} 
                    title={element.title} 
                    text={element.description} 
                    isOpen={isOpen} 
                    onClick={handleCollapse} />
            ))}
        </div>
       
    )
}

export default AboutDropdown;