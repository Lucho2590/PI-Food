import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getRecipes, getDiets, filterDiets, orderByName, orderHealthScore, filterCreated, cleanAllFilters} from '../actions';
import Card from "./Card";
import SerchBar from "./serchBar/serchBar";
import Pagination from "./Pagination/Pagination";
import './Home.css'


 ////////////////////// REDUX  ////////////////////////

export default function Home (){
     const dispatch = useDispatch();
     const allRecipe = useSelector((state)=> state.recipes)
     const allDiets= useSelector((state)=>state.diets)
     const page = useSelector(state => state.currentPage)
     const [/*order*/, setOrder]= useState('')


     useEffect(()=>{
        if(!allRecipe.length)dispatch(getRecipes());
        if(!allDiets.length)dispatch(getDiets())
     },[]);

/////////////////////////////////////////////////////////

///////////////////// PAGINATION ///////////////////////// 

const recipePerPage = 9;
const lasRecipe = page * recipePerPage // 1 * 9 = 9
const firstRecipe = lasRecipe-recipePerPage // 9 - 9 = 0
const recipesPage = allRecipe.slice(firstRecipe, lasRecipe)


////////////////////////// REFRESH BUTTOM ///////////////////////////////

function handleClick(e){
e.preventDefault();
dispatch(cleanAllFilters());
}


///////////////////////////// FILTERS ////////////////////

function handlefilterCreated(e){
    dispatch(filterCreated(e.target.value))
}

function handleFilterbyDiets(e){
dispatch(filterDiets(e.target.value))
}


function handleSortName(e){
e.preventDefault()
dispatch(orderByName(e.target.value))
setOrder(`Ordenado ${e.target.value}`)
}

function handleSortHealth(e){
e.preventDefault()
dispatch(orderHealthScore(e.target.value))
setOrder(`Ordenado ${e.target.value}`)
}

//////////////////////////////////////////////////


return (
    <div className="container_global">
        <div className="header">
            <div className="tittle">
                <h1>Henry Food</h1>
            </div>
            <div className="container_nav">
                <div className="filters">
                    <div className="dietsFilter">
                    <label>Diets: </label>
                        <select onChange={(e)=>handleFilterbyDiets(e)}>
                            {allDiets.map(d => (
                                 <option value={d.name}>{d.name}</option>
                            ))}
                            {/* {error.diets && (<option>{error.diets}</option>)} */}
                        </select>
                        {/* <label> Diets: </label>
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
                        </select> */}
                    </div>
                    <div>
                        <label>My recipe: </label> 
                        <select onChange={e => handlefilterCreated(e)}>
                            <option value="All"> All</option>
                            <option value="Created">Created</option>
                            <option value="Api">Existing</option>
                        </select>
                    </div>
                    <div className="orderName">
                        <label>Order Name:  </label>
                        <select onChange={e => handleSortName(e)}>
                            <option value= 'asc'>A-Z</option>
                            <option value= 'desc'>Z-A</option>
                        </select>
                    </div>
                    <div className="orderHealth">
                        <label> Heatlh Score: </label>
                        <select onChange={e => handleSortHealth(e)}>
                            <option value= 'asc'>Ascendent</option>
                            <option value= 'desc'>Descendent</option>
                        </select>
                    </div>
                    <button className="refreshButton" onClick={ e => {handleClick (e)}}>Clean filter</button>
                </div>
                <div className="createButton">
                    <Link to='/recipe' > <button>Create recipe</button></Link>
                </div>
                <div className="serchBar">
                    <SerchBar/>
                </div>
            </div>
            <div className="pagination">
                <Pagination recipePerPage={recipePerPage} allRecipes={allRecipe.length} />
            </div>
        </div>
        <div className="info_recipe">
            {allRecipe.length <= 0 ? 
            <div className="loading">
                {/* <img src='../img/loading.gif'/> */}
                <h5 className="loading_h5">Loading...</h5>
            </div> :    
             <div className="card">
                {recipesPage?.map((r)=>{
                        return (
                        <div className="background_card">
                            <div className='cartas' >
                                <Link to={`/recipe/:${r.id}`} key = {r.id}>
                                    <Card 
                                    name={r.name} 
                                    image={r.image} 
                                    diets={r.diets} 
                                    healtScore={r.healthScore} 
                                    id={r.id}
                                    createInDb={r.createInDb}/>
                                </Link>
                            </div>  
                        </div>
                    )                  
                })}
            </div>}
        </div>
    </div>
)
}
