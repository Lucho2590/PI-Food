import React from "react"


export default function Pagination({ recipePerPage, allRecipes, pagination }){
    const pageNumbers = []
    
    for (let i=1; i<= Math.ceil(allRecipes/recipePerPage); i++){
        pageNumbers.push(i)
    }

    return(
        // <div>   
        //     <ul className="pagination">
        //         { pageNumbers?.map((number)=>{
        //                return ( <li className="number" key={number}>
        //                     <button onClick={()=>pagination(number)}>{number}</button>
        //                 </li>)
        //             })
        //         }
        //     </ul>
        // </div>
        <div className='pagination'>
            <h3>Aca van los numeritos</h3>
                {pageNumbers?.map(paged => 
                <button className = 'paginationButton' onClick={() => pagination(paged)}>{paged}</button> )}
        </div>
)}


