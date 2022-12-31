import React from "react";


export default function Pagination({recipePerPage, allRecipe, pagination}){
    const pageNumber = [];

    for (let i = 0; i <= Math.ceil(allRecipe/recipePerPage); i++){
        pageNumber.push(i+1)
    }

    return (
        <nav>
            <ul className="paginado">
                {
                    pageNumber &&
                    pageNumber.map(number => {
                        <li className="number" key={number}>
                            <a onClick={()=>pagination(number)} >{number}</a>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
};
