import React from "react";

const Housingheader = (props) => {
    return (
        <div className="housing-header" >
            <div className="title-location-and-tags" >
                <div className="title-and-loc" >
                    <h1 >{props.title}</h1>
                    <p className="location" >{props.location}</p>
                </div>
                <div className="tags" >{props.tags}</div>
            </div>
            <div className="host-and-rate" >
                <div className="host" >
                    <p className="host-name" >{props.hostName}</p>
                    <img src={props.hostImg} alt="host-picture" />
                </div>
                <div className="rating-stars" >
                   {props.stars}
                </div>
            </div>
        </div>
    )
}

export default Housingheader;