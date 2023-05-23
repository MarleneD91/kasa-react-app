//LIBRARIES
import React from 'react';
import { Link } from 'react-router-dom';

//React component
const Card = (props) => {
    return(
            <div className="card-container">
                <Link to={props.url} >
                    <div className="card-content">
                        <div className="gradient"></div>
                        <img src={props.cover} alt={props.title} />
                        <p>{props.title}</p>
                    </div>
                </Link>
            </div>
    )
}

export default Card;