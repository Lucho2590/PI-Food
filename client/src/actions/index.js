import axios from 'axios';


export default function getRecipes() {

    // return async function(distpach) {
    //     let jsonRecipe = await axios.get('http://localhost:3001/recipes');
    //     return distpach({ type: 'GET_RECIPES', payload: jsonRecipe.data })
    // }

    return async function(distpach) {
        return await fetch('http://localhost:3001/recipes')
            .then(response => response.json())
            .then((json) => {
                return distpach({ type: 'GET_RECIPES', payload: json })
            })
    }
};

// export function getDiets() {
//     return async;
// };