import React from 'react';

const Banner = (props) => {
    return (
        <div>
            <img src={props.img} />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner;