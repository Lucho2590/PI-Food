import axios from 'axios';


export default function getRecipes() {

    return async function(distpach) {
        let jsonRecipe = await axios.get('http://localhost:3001/recipes');
        return distpach({ type: 'GET_RECIPES', payload: jsonRecipe.data })
    }

    // return async function(distpach) {
    //     let jsonRecipe = await fetch('hhtp://localhost:3001/recipes') //.then(response => response.json());
    //     let data = await jsonRecipe.json();

    //     return distpach({ type: 'GET_RECIPES', payload: data })
    // }
};

// export function getDiets() {
//     return async;
// };