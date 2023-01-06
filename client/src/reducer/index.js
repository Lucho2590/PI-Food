const initialState = {
    recipes: [],
    allRecipe: [],
    detail: [],
    diets: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                allRecipe: action.payload,
            }
        case "GET_DIETS":
            return {
                ...state,
                diets: action.payload
            }
        case 'GET_NAME_RECIPES':
            return {
                ...state,
                recipes: action.payload
            }
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        case 'CLEAN_RECIPE_DETAILS':
            return {...state, detail: action.payload }
        case 'POST_RECIPE':
            return {
                ...state,
            }
        case 'FILTER_BY_DIETS':
            const allRecipes = state.allRecipe;
            const dietsFilter = action.payload === 'all diets' ? allRecipes : allRecipes.filter(e => e.diets.some(d => d.toLowerCase() === action.payload.toLowerCase()))
            return {...state,
                recipes: dietsFilter
            }
        case 'ORDER_BY_NAME':
            const sortedArr = action.payload === 'asc' ? state.recipes.sort(
                    function(a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1
                        }
                        return 0;
                    }) :
                state.recipes.sort(function(a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                sortedArr
            }
        case 'ORDER_BY_HEALTH':
            const sortedArrHealth = action.payload === 'desc' ? state.recipes.sort(
                    function(a, b) {
                        if (a.healthScore > b.healthScore) {
                            return 1;
                        }
                        if (b.healthScore > a.healthScore) {
                            return -1
                        }
                        return 0;
                    }) :
                state.recipes.sort(function(a, b) {
                    if (a.healthScore > b.healthScore) {
                        return -1;
                    }
                    if (b.healthScore > a.healthScore) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                sortedArrHealth
            }
        default:
            return state;
    }
}


export default rootReducer;