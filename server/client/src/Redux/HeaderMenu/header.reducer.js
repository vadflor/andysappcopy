const initialState = {
    data: []
}

export default function headerReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_HEADER_DATA":
            return { ...state, data: action.payload };
        default:
            return state
    }
}