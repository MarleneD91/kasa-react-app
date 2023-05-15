import React from 'react';

const Card = (props) => {
    return(
            <div className="card-container">
                <a>
                    <div className="card-content">
                        <img src={props.cover} alt={props.title} />
                        <p>{props.title}</p>
                    </div>
                </a>
            </div>
    )
}

export default Card;