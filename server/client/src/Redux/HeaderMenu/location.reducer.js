const initialState = {
    data: []
}

export default function locationReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_LOCATION_DATA":
            return { ...state, data: action.payload };
        default:
            return state
    }
}