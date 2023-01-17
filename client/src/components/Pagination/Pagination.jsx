import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeCurrentPage } from "../../actions"

import './Pagination.css'

export default function Pagination({ recipePerPage, allRecipes}){

    const dispatch = useDispatch();
    const page = useSelector((state)=> state.currentPage)


    const pageNumbers = []

    
    for (let i=1; i<= Math.ceil(allRecipes/recipePerPage); i++){
        pageNumbers.push(i)
    }
    
    const pagination = (num)=>{
        dispatch(changeCurrentPage(num))
    }

    return(
        <div className='pagination'>
                {pageNumbers?.map(paged => 
                <button className = {page === paged ? 'buttonPage' : 'buttonCurrent'} key={paged} onClick={() => pagination(paged)}>{paged}</button> )}
        </div>
)}


