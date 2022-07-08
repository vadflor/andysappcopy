const initialState = {
    data: []
}

export default function productSnaksReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCT_SNAKS_DATA":
            return { ...state, data: action.payload };
        default:
            return state
    }
}