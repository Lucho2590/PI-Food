import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipes, getDiets } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import './RecipeCreate.css'

function validate(input){
    let error = {}
    if(!input.name.trim()){error.name = 'Add a name to your recipe'}
    else if(parseInt(input.name)){error.name = 'Invalid name, should contain at least one letter at the beginning'}
    if(!input.image){error.image = 'Upload an image'}
    if(!input.summary.trim()){error.summary = 'Add a summary of your recipe'}
    else if(parseInt(input.summary)){error.summary = 'Summary should contain at least one letter at the beginning'}
    if(input.healthScore < 0 || input.healthScore > 100){error.healthScore = 'The healtscore should be a number between 1 and 100'}
    if(!input.steps){error.steps = 'Add the steps for your recipe'}
    if(!input.diets.length){error.diets = 'You must select at least one diet type'}
    return error
}

export function RecipeCreate() {
    const dispatch= useDispatch()
    const history = useHistory()
    const diets = useSelector((state)=> state.diets)
    const [ error, setError ] = useState({})

    const [input, setInput]=useState({
        name:'',
        image:'',
        summary:'',
        healthScore:'',
        steps:'',
        diets:[],
    })


    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(e){
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })
        setError(validate({
            ...input,
            diets: [ ...input.diets, e.target.value ]
        }))
        // console.log(input.diets)
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
            diets:[],
        })
        history.push('/home')
    }

    function handleDelete(e){
        setInput({
            ...input,
            diets: input.diets.filter( d => d !== e)
        })
        setError(validate({
            ...input,
            diets: input.diets.filter( d => d !== e)
        }))
    }
    const disabled = Object.keys(error).length || !input.name 
 

/////////////////////////////////////////////////////////////////
    return (
        <div className="container_create">
            <div className="data_create">
            <Link to='/home'> <button>Home</button></Link>
            <h1>Create Recipe</h1>
            <form onSubmit={e=> handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={input.name} 
                        name='name' 
                        onChange={(e)=>handleChange(e)}/>
                        {error.name && (<span className="error">{error.name}</span>)}
                </div>
                <div>
                    <label>Image:</label>
                    <input 
                        type="text" 
                        value={input.image} 
                        name='image' 
                        onChange={(e)=>handleChange(e)}/>
                        {error.image && (<span className="error">{error.image}</span>)}
                </div>
                <div>
                    <label>Summary: </label>
                    <input 
                        type="text" 
                        value={input.summary} 
                        name='summary' 
                        onChange={(e)=>handleChange(e)}/>
                        {error.summary && (<span className="error">{error.summary}</span>)}
                </div>
                <div>
                    <label>Steps: </label>
                    <input 
                        type="text" 
                        value={input.steps} 
                        name='steps' 
                        onChange={(e)=>handleChange(e)}/>
                        {error.steps && (<span className="error">{error.step}</span>)}
                </div>
                <div>
                    <label>Health Score:</label>
                    <input 
                        type="number" 
                        value={input.healthScore} 
                        name='healthScore' 
                        onChange={(e)=>handleChange(e)} />
                        {error.healthScore && (<span className="error">{error.healthScore}</span>)}
                </div>
                <div>
                    <label>Diets: </label>
                        <select onChange={(e)=>handleSelect(e)}>
                            {diets.map(d => (
                                 <option value={d.name}>{d.name}</option>
                            ))}
                            {error.diets && (<option>{error.diets}</option>)}
                        </select>
                <div>
                    {input.diets.map((e, i) => {
                    return(
                        <div key= {i} className="formDiets">
                            <span>{e} <button className="buttonXdiets" onClick={() => handleDelete(e)}>X</button> </span>
                        </div>
                        )}
                      )}
                </div>
                </div>
                <button disabled={disabled} type="submit">Create</button>
    
            </form>
            </div>
        </div>

    )
}




