import React from "react";  
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect } from "react";


export default function Detail(){
    const distpach = useDispatch()
    // const [name, image, summary,healthScore, diets, steps ] = useSelector((state)=> state.detail) 
    const {id}=useParams();

    // useEffect(()=>{
    //     distpach(getDetail(id));
    // },[id])

    useEffect(()=>{
      distpach(getDetail(id));
    },[id,distpach])

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
                <p>Sumarry: {details[0].summary}</p>
              
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