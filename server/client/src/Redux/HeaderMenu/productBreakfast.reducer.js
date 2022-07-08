const initialState = {
    data: []
}

export default function productBreakfastReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCT_BREAKFAST_DATA":
            return { ...state, data: action.payload };
        default:
            return state
    }
}