import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getRecipes, filterDiets, orderByName, orderHealthScore} from '../actions';
import Card from "./Card";
import SerchBar from "./serchBar/serchBar";
import Pagination from "./Pagination/Pagination";
// import Pagination from "./Paginations";

 ////////////////////// REDUX  ////////////////////////

export default function Home (){
     const dispatch = useDispatch();
     const allRecipe = useSelector((state)=> state.recipes)
     const [/*order*/, setOrder]= useState('')


     useEffect(()=>{
        dispatch(getRecipes());
        // dispatch(getDiets())
     },[dispatch]);

/////////////////////////////////////////////////////////

///////////////////// PAGINATION ///////////////////////// 

const [currentPage, setCurrentPage] = useState(1) // Pagina actual que inicia en 1
const [recipePerPage, /*setRecipePerPage*/] = useState(9) // Cantidad de recetas que se muestran por pagina
const indexLastRecipe = currentPage * recipePerPage // Guardo en una constante el indice de la ultima receta, se multipllica la pagina actual por la cantidad de recetas por pagina.
const indexFirstRecipe = indexLastRecipe - recipePerPage // guardo el indix de la primer recerta que se muestra en la pagina, restando la cantidad de recetas por pagina al index de la ultima receta en pagina.
const currentRecipe = allRecipe.slice(indexFirstRecipe, indexLastRecipe) // selecciona las recetas segun los index de la pagina actual.


const pagination = (pageNumber)=>{
    setCurrentPage(pageNumber)
}


////////////////////////// REFRESH BUTTOM ///////////////////////////////

function handleClick(e){
e.preventDefault();
dispatch(getRecipes());
}

///////////////////////////// FILTERS ////////////////////

function handleFilterbyDiets(e){
dispatch(filterDiets(e.target.value))
}

function handleSortName(e){
e.preventDefault()
dispatch(orderByName(e.target.value))
setCurrentPage(1)
setOrder(`Ordenado ${e.target.value}`)
}

function handleSortHealth(e){
e.preventDefault()
dispatch(orderHealthScore(e.target.value))
setCurrentPage(1)
setOrder(`Ordenado ${e.target.value}`)
}
//////////////////////////////////////////////////


return (
        <div>
            <div>
                <h1>Recipe List:</h1>
                <div className="filters">
                    <div className="dietsFilter">
                        <h5> Diets: </h5>
                        <select onChange={e => handleFilterbyDiets(e)}>
                            <option value= 'all diets'>All diets</option>
                            <option value= 'dairy free'>Dairy free</option>
                            <option value= 'gluten free'>Gluten free</option>
                            <option value= 'lacto ovo vegetarian'>Lacto ovo vegetarian</option>
                            <option value= 'vegan'>Vegan</option>
                            <option value= 'pescatarian'>Pescatarian</option>
                            <option value= 'fodmap firendly'>Fodmap firendly</option>
                            <option value= 'whole 30'>Whole 30</option>
                            <option value= 'primal'>Primal</option>
                            <option value= 'paleolithic'>Paleolithic</option>
                            <option value= 'ketogenic'>Ketogenic</option>
                            <option value= 'Other'>Other</option>
                        </select>
                    </div>
                    <div className="orderName">
                        <h5> Order Name:  </h5>
                        <select onChange={e => handleSortName(e)}>
                            <option value= 'asc'>A-Z</option>
                            <option value= 'desc'>Z-A</option>
                        </select>
                    </div>
                    <div className="orderHealth">
                        <h5> Heatlh Score: </h5>
                        <select onChange={e => handleSortHealth(e)}>
                            <option value= 'asc'>Ascendent</option>
                            <option value= 'desc'>Descendent</option>
                        </select>
                    </div>
                </div>
                <br />
                <button onClick={ e => {handleClick (e)}}>Refresh</button>
            </div>
            <div>
                <Pagination pagination={pagination} recipePerPage={recipePerPage} allRecipes={allRecipe.length}/>
            </div>
            <div>
            <Link to='/recipe'> <button>Created recipe</button></Link>
            </div>
            <div>
                <SerchBar/>
            </div>
            <div>
                <Link to = '/recipes'>Find Recipes </Link>
                {currentRecipe?.map((r)=>{
                    return (
                        <div className='cartas' >
                            <Link to={`/recipe/:${r.id}`}>
                                <Card 
                                name={r.name} 
                                image={r.image} 
                                diets={r.diets} 
                                healtScore={r.healthScore} 
                                id={r.id}/>
                            </Link>
                        </div>  
                    )                  
                })}
            </div>
        </div>
)
}
