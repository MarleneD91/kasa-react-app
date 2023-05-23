import React from "react";
import { housingData } from "../../data/HousingData";
import Card from "./Card";



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