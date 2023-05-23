// LIBRARIES
import React from 'react';

// React component
const Banner = (props) => {
    return (
        <div className={`banner ${props.page}-banner`}>
            <div className='overlay'></div>
            <img src={props.img} />
            <p>{props.text}</p>
        </div>
    )
}

export default Banner;