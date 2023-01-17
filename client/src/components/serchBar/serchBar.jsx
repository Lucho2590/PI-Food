import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../../actions" 


export default function SerchBar(){
    const dispatch = useDispatch();
    const [name, setName]=useState('')

function handleImputChange(e){
    e.preventDefault()
    setName(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    try{
        dispatch(getRecipeByName(name))
    }catch(error){
        return error
    }
    setName('')
}

return (
        <div className="search">
            <input type="text" placeholder="Seacrh ..." onChange={(e)=>handleImputChange(e)}/>
            <button type='submit' onClick={(e)=> handleSubmit(e)}>Search</button>
        </div>
        )
}