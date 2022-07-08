const initialState = {
    data: []
}

export default function topSliderReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_TOP_SLIDER_DATA":
            return { ...state, data: action.payload };
        default:
            return state
    }
}