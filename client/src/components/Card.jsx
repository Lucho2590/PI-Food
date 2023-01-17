import { Link } from "react-router-dom";
import React from "react";

import './Card.css'

export default function Card ({name, image, diets, id, healtScore, createInDb}){

    const recipeDb = diets.map(e=>e.name)
        
    return (
        <div className="container">
            <Link to={`/recipes/${id}`} key={id} >
            <div className="receta">
                <h2>{name}</h2>
                <img src={image} alt="Recipe.jpg not found"  className="image"/>
                <h3>HealthScore: {healtScore}</h3>
                <div id="diets">
                {!createInDb ? diets + ", " : recipeDb + ", " } 
            </div>
            </div>
            </Link>
        </div>
    )
}
