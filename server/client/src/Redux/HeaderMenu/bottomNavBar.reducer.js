const initialState = {
    data: []
}

export default function bottomNavBarReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_BOTTOM_NAV_BAR_DATA":
        return { ...state, data: action.payload };
            
        default:
            return state
    }
    
}