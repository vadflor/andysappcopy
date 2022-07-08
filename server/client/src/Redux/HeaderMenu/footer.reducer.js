const initialState = {
    data: []
}

export default function footerReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_FOOTER_DATA":
            return { ...state, data: action.payload };
        default:
            return state
    }
}