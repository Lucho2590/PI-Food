import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipes, getDiets } from "../../actions";
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
        diet:[],
    })


    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e){
        setInput({
            ...input,
            diets: [...input.diet, e.target.value]
        })
        console.log(input.diet)
    }

    function handleSubmit(e){
        e.preventDefault(e)
        dispatch(postRecipes(input))
        alert('recipe created successfully')
        setInput({
            name:'',
            image:'',
            summary:'',
            healthScore:'',
            steps:'',
            diet:[],
        })
    }

/////////////////////////////////////////////////////////////////
    return (
        <div>
            <Link to='/home'> <button>Home</button></Link>
            <h1>Create Recipe</h1>
            <form onSubmit={e=> handleSubmit(e)}>
                <div>
                    <label>Name: </label>
                    <input 
                        type="text" 
                        value={input.name} 
                        name='name' 
                        onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Image:</label>
                    <input 
                        type="text" 
                        value={input.image} 
                        name='image' 
                        onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Summary: </label>
                    <input 
                        type="text" 
                        value={input.summary} 
                        name='summary' 
                        onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Steps: </label>
                    <input 
                        type="text" 
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
                            {diets.map(d => (
                                 <option value={d.name}>{d.name}</option>
                            ))}
                        </select>
                </div>
                <ul><li>{input.diets.map(e => e + ", ")}</li></ul>
                <button type="submit">Create</button>
            </form>
        </div>

    )
}




