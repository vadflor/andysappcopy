const initialState = {
    data: []
}

export default function brandListLogoReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_BRAND_LIST_LOGO_DATA":
            return { ...state, data: action.payload };
        default:
            return state
    }
}