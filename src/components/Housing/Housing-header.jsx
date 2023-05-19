import React from "react";

//Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Housingheader = (props) => {
    return (
        <div className="housing-header">
            <div className="title-and-tags">
                <h1>{props.title}</h1>
                <div className="tags">{props.tags}</div>
            </div>
            <div className="host-and-rate">
                <div className="host">
                    <p className="host-name">{props.hostName}</p>
                    <img src={props.hostImg} alt="" />
                </div>
                <div className="rating-stars">
                   {props.stars}
                </div>
            </div>
        </div>
    )
}

export default Housingheader;