import React from "react";  
import { Link, useParams, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getRecipes, cleanRecipeDetails,  } from "../../actions";
import { useEffect } from "react";
import { deleteRecipe } from "../../helpers/delete";
import './Detail.css'

export default function Detail(){
    const dispatch = useDispatch()
    const {id}=useParams();
    const history= useHistory()

    useEffect(()=>{
      dispatch(getDetail(id)) 
       return () => {
        dispatch(cleanRecipeDetails([ ]))
    }
    },[dispatch, id])

    const handleDelete=()=>{
      deleteRecipe(id);
      dispatch(getRecipes())
      // dispatch(cleanAllFilters())
      history.push('/home');
    }

    const details = useSelector((state)=> state.detail)

    return (
        <div className="container_detail">
          <div className="info_detail">
           {
              details.length > 0 ?
                <div>
                  <div>
                  {details[0].createInDb ? <button onClick={handleDelete}>ELIMINAR</button> : " "} 
                  </div>
                  <h1>{details[0].name}</h1>
                  <img className="img_detail" src={details[0].image} alt='not found' />
                  <h3 >Health Score: {details[0].healthScore}</h3>
                  <p>Summary: {details[0].summary}</p>
                  <h5> Steps: {!details[0].createInDb? details[0].steps.map(s => s.map(e=> <ul><li>{e.do}</li></ul>)) : details[0].steps}</h5>
                  <h4>Diets: {!details[0].createInDb? details[0].diets + ', ' : details[0].diets.map(d => d.name + ', ')} </h4>
                </div> : 
              <div> 
                <h4>Loading...</h4>
              </div>
            }
            </div>
          <Link to={'/home'}>
            <button className="buttonHome_detail">Home</button>
          </Link> 

        </div>
    )

}



