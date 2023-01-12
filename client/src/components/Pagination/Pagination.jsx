import React from "react"
import './Pagination.css'

export default function Pagination({ recipePerPage, allRecipes, pagination, currentPage, lastRecipe }){
    const pageNumbers = []
    // const previousPage = currentPage - 1
    // const nextPage = currentPage + 1
    
    
    for (let i=1; i<= Math.ceil(allRecipes/recipePerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div className='pagination'>
             {/* <div className='paginationConteiner'>
                <ul className="pages">
                    { currentPage >= 2 && 
                    <button onClick={() => pagination(1)} className="buttonPrevNext">{"<<"}</button>}
                    { currentPage >= 2 && 
                    <button onClick={() => pagination(previousPage)} className="buttonPrevNext">{"<"}</button>} */}
                    {/* {pageNumbers?.map(paged =>
                    <button key={paged} onClick={() => pagination(paged)} className = {currentPage === paged ? 'pagination-active' : 'pagination'}>{paged}</button> )} */}
                    {/* { currentPage >= 1 && currentPage < Math.ceil(allRecipes/recipePerPage) && 
                    <button onClick={() => pagination(nextPage)} className="buttonPrevNext">{">"}</button>}
                    { currentPage <= (allRecipes/recipePerPage) && 
                    <button onClick={() => pagination(Math.ceil(allRecipes/recipePerPage))} className="buttonPrevNext">{">>"}</button>}
                </ul>
            </div> */}
                {pageNumbers?.map(paged => 
                <button className = 'buttonPage' key={paged} onClick={() => pagination(paged)}>{paged}</button> )}
        </div>
)}


