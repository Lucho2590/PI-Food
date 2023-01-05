import { Link } from "react-router-dom";
import React from "react";


export default function Card ({name, image, diets, id, healtScore}){
        
    return (
        <Link to={`/recipe/${id}`}>
        <div>
            <h2>{name}</h2>
            <img src={image} alt="Recipe.jpg not found" />
            <h3>HS: {healtScore}</h3>
            <div id="diets">
            {diets.map((diet, key) => <h5 key={key}>{diet.toUpperCase()}</h5>)} 
          </div>
        </div>
        </Link>
    )
}
// export default function CardRecipe({ name, image, diets, id, healthScore }){
//     return (
//         <div className="cardsConteiner">
//             <Link to={${id}}>
//             <h3>{name}</h3>
//             <img className= 'cardRecipe' src= {image} alt='Not found'/>
//             </Link>
//             <div className="diets">
//                 {diets?.map(e => <h5>{e}</h5>)}
//             </div> 
//             <span>HealthScore: {healthScore}</span>
//         </div>
//     )
// }