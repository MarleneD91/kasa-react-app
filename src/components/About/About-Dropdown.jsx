import React from 'react';
import Dropdown from "../Common/Dropdown";
import { aboutData } from '../../data/About-data';

const AboutDropdown = ({title,}) => {
    return(
        <div className='about-dropdowns'>
            {aboutData.map(element => (
            <Dropdown key={element.title} title={element.title} text={element.description} />
            ))}
        </div>
       
    )
}

export default AboutDropdown;