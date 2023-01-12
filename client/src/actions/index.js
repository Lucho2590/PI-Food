import axios from 'axios';


export function getRecipes() {
    return async function(dispatch) {
            let json = await axios.get('http://localhost:3001/recipes');
            return dispatch({ type: 'GET_RECIPES', payload: json.data })
        }
        // return async function(dispatch) {
        //     return await fetch('http://localhost:3001/recipes')
        //         .then(response => response.json())
        //         .then((json) => {
        //             return dispatch({ type: 'GET_RECIPES', payload: json })
        //         })
        // }
}
export function getDiets() {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/diets')
        return dispatch({ type: 'GET_DIETS', payload: json.data })
    }
}
export function getRecipeByName(name) {
    return async function(dispatch) {
        let json = await axios.get(`http://localhost:3001/recipes?name=${name}`);
        return dispatch({ type: 'GET_NAME_RECIPES', payload: json.data })
    }
}
export function getDetail(id) {
    return async function(dispatch) {
        let info = await axios.get(`http://localhost:3001/recipes/${id}`);
        return dispatch({ type: 'GET_DETAIL', payload: info.data })
    }
}
export function cleanRecipeDetails(payload) {
    return dispatch => {
        dispatch({ type: 'CLEAN_RECIPE_DETAILS', payload })
    }
};
export function postRecipes(payload) {
    return async function(dispatch) {
        console.log('payload', payload)
        const response = await axios.post('http://localhost:3001/recipes', payload)
        return response
    }
}

export function filterDiets(payload) {
    return {
        type: 'FILTER_BY_DIETS',
        payload
    }
};
export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
};
export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
};
export function orderHealthScore(payload) {
    return {
        type: 'ORDER_BY_HEALTH',
        payload
    }
};