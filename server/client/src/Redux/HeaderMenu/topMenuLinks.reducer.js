const initialState = {
    data: []
}

export default function topMenuLinksReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_TOP_MENU_LINKS_DATA":
            return { ...state, data: action.payload };
        default:
            return state
    }
}