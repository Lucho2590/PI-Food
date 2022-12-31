import { Link } from "react-router-dom";
import React from "react";


export default function Card ({name, image, diets, id, healtScore}){
        
    return (
        <Link to={`${id}`}>
        <div>
            <h2>{name}</h2>
            <img src={image} alt="Recipe not found" />
            <h3>HS:{healtScore}</h3>
            <div id="diets">
            {diets.map((diet, key) => <h5 key={key}>{diet.toUpperCase()}</h5>)} 
          </div>
        </div>
        </Link>
    )
}