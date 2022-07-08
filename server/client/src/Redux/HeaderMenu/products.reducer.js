const initialState = {
    data: []
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCTS_DATA":
            return { ...state, data: action.payload };
        default:
            return state
    }
}