import axios from 'axios';


export function getRecipes() {
    return async function(distpach) {
            let json = await axios.get('http://localhost:3001/recipes');
            return distpach({ type: 'GET_RECIPES', payload: json.data })
        }
        // return async function(distpach) {
        //     return await fetch('http://localhost:3001/recipes')
        //         .then(response => response.json())
        //         .then((json) => {
        //             return distpach({ type: 'GET_RECIPES', payload: json })
        //         })
        // }
};

export function getDiets() {
    return async function(distpach) {
        let json = await axios.get('http://localhost:3001/diets')
        return distpach({ type: 'GET_DIETS', payload: json.data })
    }
}

export function getRecipeByName(name) {
    return async function(distpach) {
        let json = await axios.get(`http://localhost:3001/recipes?name=${name}`);
        return distpach({ type: 'GET_NAME_RECIPES', payload: json.data })
    }
}
export function getDetail(id) {
    return async function(distpach) {
        let info = await axios.get(`http://localhost:3001/recipes/${id}`);
        return distpach({ type: 'GET_DETAIL', payload: info.data })
    }
};

export function postRecipes(payload) {
    return async function(distpach) {
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
// export function filterCreated(payload) {
//     return {
//         type: 'FILTER_CREATED',
//         payload
//     }
// };
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