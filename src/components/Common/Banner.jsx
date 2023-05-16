import React from 'react';

const Banner = (props) => {
    return (
        <div className='banner'>
            <div className='overlay'></div>
            <img src={props.img} />
            <p>{props.text}</p>
        </div>
    )
}

export default Banner;