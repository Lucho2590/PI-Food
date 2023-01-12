import { Link } from "react-router-dom";
import React from "react";
import './Card.css'

export default function Card ({name, image, diets, id, healtScore}){
        
    return (
        <div className="container">
        <Link to={`/recipes/${id}`}>
        <div className="receta">
            <h2>{name}</h2>
            <img src={image} alt="Recipe.jpg not found" />
            <h3>HealthScore: {healtScore}</h3>
            <div id="diets">
            {!diets.createInDb ? diets + ", " : diets.map(e=> e.name) } 
            {/* {diets.map((diet, key) => <h5 key={key}>{diet.toUpperCase()}</h5>)}  */}
          </div>
        </div>
        </Link>
        </div>
    )
}
