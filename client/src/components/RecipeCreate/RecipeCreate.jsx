import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipes } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export function RecipeCreate() {
    const dispatch= useDispatch()
    const diets = useSelector((state)=> state.diets)

    const [input, setInput]=useState({
        name:'',
        image:'',
        summary:'',
        healthScore:'',
        steps:'',
        diets:[],
    })


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function handleSelect(e){
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault(e)
        dispatch(postRecipes(input))
        console.log(input)
        alert('recipe created successfully')
    }
    return (
        <div>
            <Link to='/home'> <button>Home</button></Link>
            <h1>Create Recipe</h1>
            <form onSubmit={e=> handleSubmit(e)}>
                <div>
                    <label>Name: </label>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={input.name} 
                        name='name' 
                        onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Image:</label>
                    <input 
                        type="text" 
                        placeholder="Image" 
                        value={input.image} 
                        name='image' 
                        onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Summary: </label>
                    <input 
                        type="text" 
                        placeholder="Sumarry" 
                        value={input.summary} 
                        name='summary' 
                        onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Steps: </label>
                    <input 
                        type="text" 
                        placeholder="Steps" 
                        value={input.steps} 
                        name='steps' 
                        onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Health Score:</label>
                    <input 
                        type="number" 
                        value={input.healthScore} 
                        name='healthScore' 
                        onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                        <label>Diets: </label>
                <select onChange={(e)=>handleSelect(e)}>
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
                            <option value= 'other'>Other</option>
                </select>
                </div>
                <ul><li>{input.diets.map(e => e + ", ")}</li></ul>
                <button type="submit">Create</button>
            </form>
        </div>

    )
}




