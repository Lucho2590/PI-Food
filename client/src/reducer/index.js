const initialState = {
    recipes: [],
    diets: [],
    recipe: {},
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_RECIPES':
            return {...state, recipes: action.payload }
        default:
            return state;
    }

}


export default rootReducer;