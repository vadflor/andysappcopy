const initialState = {
    data: []
}

export default function productPizzaReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCT_PIZZA_DATA":
            return { ...state, data: action.payload };
        default:
            return state
    }
}