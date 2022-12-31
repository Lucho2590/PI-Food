import React from "react";


export default function Pagination({recipePerPage, allRecipe, pagination}){
    const pageNumber = [];

    for (let i = 0; i <= Math.ceil(allRecipe/recipePerPage); i++){
        pageNumber.push(i)
    }

    return (
        <nav>
            <div className="pagination">
                { pageNumber && pageNumber.map((number, i) => (
                        <button  className="number" key={i} onClick={()=>pagination(number)} >{number}</button>
                    ))
                }
            </div>
        </nav>
    )
};



