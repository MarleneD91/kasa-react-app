//LIBRARIES
import React, { useState } from 'react';

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

//React component
const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    const collapse = () => {
        setOpen(!open);
    }
    return(
        <div className='dropdown'>
            <div className='dropdown-head'>
                <div className='dropdown-title' >{props.title}</div>
                <FontAwesomeIcon className="icon" icon={!open?faChevronDown:faChevronUp} onClick={collapse}/>
            </div>
            {open && <div className='description' >{props.text}</div>}
        </div>
    )
};

export default Dropdown;