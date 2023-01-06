import React from "react";  
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanRecipeDetails } from "../../actions";
import { useEffect } from "react";


export default function Detail(){
    const dispatch = useDispatch()

    const {id}=useParams();

    useEffect(()=>{
      dispatch(getDetail(id)) 
       return () => {
        dispatch(cleanRecipeDetails([]))
    }
    },[dispatch, id])

    const details = useSelector((state)=> state.detail)

    return (
        <div>
            <h3>Detail</h3>
            {
              details.length>0?
              <div>
                <h1>{details[0].name}</h1>
                <img src={details[0].img? details[0].img : details[0].image}/>
                <h3>Health Score: {details[0].healthScore}</h3>
                <p>Summary: {details[0].summary}</p>
                {/* <h5>Steps: {details[0].steps.map(s => s.map(e=> <ul><li>{e.do}</li></ul>))}</h5> */}
                {/* <div>
            {Steps?.map(step => (
              <div key={steps.steps}>
                <h4>Step: {step.step}</h4>
                <p> {step.do} </p>
              </div> */}
              <h5> Steps: {!details[0].createInDb? details[0].steps.map(s => s.map(e=> <ul><li>{e.do}</li></ul>)) : details[0].steps}</h5>
                <h4>Diets: {!details[0].createInDb? details[0].diets + ', ' : details[0].diets.map(d => d.name + ', ')} </h4>
              </div> : 
              <div> 
                <h4>Loading...</h4>
              </div>
              
            }
          <Link to={'/home'}>
            <button>Home</button>
          </Link> 
        </div>
    )

}