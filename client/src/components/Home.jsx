import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import getRecipes from "../actions";
import Card from "./Card";
import Pagination from "./Pagination";

 ////////////////////// REDUX  ////////////////////////

export default function Home (){
     const dispatch = useDispatch();
     const allRecipe = useSelector((state)=> state.recipes)
    //  const allDiets = useSelector((state) => state.diets)


     useEffect(()=>{
        dispatch(getRecipes());
        // dispatch(getDiets())
     },[dispatch]);

/////////////////////////////////////////////////////////

///////////////////// PAGINATION ///////////////////////// 

// const [currentPage, setCurrentPage] = useState(1) // Pagina actyual que inicia en 1
// const [reciperPerPagae, setRecipePerPage] = useState(9) // Cantidad de recetas que se muestran por pagina
// const indexOfLastRecipe = currentPage * reciperPerPagae // Esto me indica, la cantidad de recetas por pagina (pagina multiplicado la cantidad de recetas por pagina => 9)
// const indexOfFirstRecipe = indexOfLastRecipe - reciperPerPagae // 
// const currentRecipe = allRecipe.slice(indexOfFirstRecipe, indexOfLastRecipe) // selecciona las recetas segun los index de la pagina actual.


// const pagination = (pageNumber)=>{
//     setCurrentPage(pageNumber)
// }

//////////////////////////////////////////////////////////

function handleClick(e){
e.preventDefault();
dispatch(getRecipes());
}


return (
        <div>
            <div>
                <h1>Recipe List:</h1>
                <Link to = '/recipes'>Find Recipes </Link>
                <button onClick={ e => {handleClick (e)}}>Refresh</button>
                {allRecipe?.map((r)=>{
                    return (
                        <div classname='cartas'>
                            <Link to={"/home" + r.id}>
                                <Card 
                                name={r.name} 
                                image={r.image} 
                                diets={r.diets} 
                                healtScore={r.healtScore} 
                                id={r.id}/>
                            </Link>
                        </div>  
                    )                  
                })}
            </div>

            {/* <div>
                <Pagination reciperPerPagae={reciperPerPagae} allRecipe={allRecipe.length} pagination={pagination} />
            </div> */}
        </div>
)
}

{/* <div className='allRecipes'>
                {recipesPage?.map(e => {
                    return(
                    <div className='cardgrid'>
                        <Link to={'/home/'+ e.id}>
                        <CardRecipe
                        name={e.name} 
                        image= {e.image} 
                        diets={e.diets}
                        healthScore={e.healthScore}
                        id={e.id}/>
                        </Link>
                    </div>
                )})}
            </div> */}