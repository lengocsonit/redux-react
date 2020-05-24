const editStatusReducerInitialState = true
const editStatusReducer = (state = editStatusReducerInitialState, action) => {
    switch (action.type) {
        case "EDIT_STATE":
            return !state
        default:
            return state
    }
}

export default editStatusReducer