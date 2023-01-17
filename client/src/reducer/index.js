const initialState = {
    recipes: [],
    allRecipe: [],
    detail: [],
    diets: [],
    currentPage: 1
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
            return {
                ...state,
                detail: action.payload
            }
        case 'POST_RECIPE':
            return {
                ...state,
            }
        case 'FILTER_BY_DIETS':
            const allRecipes = state.allRecipe;
            const dietsFilter = action.payload === 'all diets' ? allRecipes : allRecipes.filter(e => e.diets.some(d => d === action.payload))
            return {
                ...state,
                recipes: dietsFilter
            }
        case 'FILTER_CREATED':
            const allCreated = state.allRecipe;
            const createdFilter = action.payload === 'Created' ? allCreated.filter(e => e.createInDb) : state.allRecipe.filter(e => !e.createInDb)
            return {
                ...state,
                recipes: action.payload === 'All' ? state.allRecipe : createdFilter
            }
        case 'ORDER_BY_NAME':
            const sortedArr = action.payload === 'asc' ? state.recipes.sort(
                    function(a, b) {
                        const na = a.name.toUpperCase()
                        const nb = b.name.toUpperCase()
                        if (na > nb) {
                            return 1;
                        }
                        if (nb > na) {
                            return -1
                        }
                        return 0;
                    }) :
                state.recipes.sort(function(a, b) {
                    const na = a.name.toUpperCase()
                    const nb = b.name.toUpperCase()
                    if (na > nb) {
                        return -1;
                    }
                    if (nb > na) {
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
        case 'CLEAN_FILTERS':
            return {
                ...state,
                recipes: state.allRecipe,
                currentPage: 1
            }

        case 'CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }

        default:
            return state;
    }
}


export default rootReducer;