import React from 'react';

const Dropdown = (props) => {
    return(
        <div className='dropdown'>
            <div className='dropdown-title'>{props.title}</div>
            <div className='description'>{props.text}</div>
        </div>
    )
};

export default Dropdown;
