//LIBRARIES
import React from "react";

//DATA
import { housingData } from "../../data/HousingData";

//SPECIFIC COMPONENT
import Card from "./Card";

//React COMPONENT
const Gallery = () => {
    return(
        <div className="gallery">
            {housingData.map(data =>(
                    <Card cover={data.cover} title={data.title} key={data.id} url={`/housing/${data.id}`}/>
            ))}
        </div>
    )
}

export default Gallery;