import React from "react";
import { housingData } from "../../data/HousingData";
import Card from "./Card";

const Gallery = () => {
    return(
        <div className="gallery">
            {housingData.map(element =>(
                <Card cover={element.cover} title={element.title} />
            ))}
        </div>
    )
}

export default Gallery;