import React from "react"
import './Pagination.css'

export default function Pagination({ recipePerPage, allRecipes, pagination, currentPage }){
    const pageNumbers = []

    
    
    for (let i=1; i<= Math.ceil(allRecipes/recipePerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div className='pagination'>
                {pageNumbers?.map(paged => 
                <button className = {currentPage === paged ? 'buttonPage' : 'buttonCurrent'} key={paged} onClick={() => pagination(paged)}>{paged}</button> )}
        </div>
)}


