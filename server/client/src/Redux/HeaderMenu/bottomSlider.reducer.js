const initialState = {
    data: []
}

export default function bottomSliderReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_BOTTOM_SLIDER_DATA":
        return { ...state, data: action.payload };
            
        default:
            return state
    }
    
}