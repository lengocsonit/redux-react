const numReducerInitialState = [1, 2, 3]
const numReducer = (state = numReducerInitialState, action) => {
    switch (action.type) {
        case "ADD_NUM":
            return [...state, action.newItem]
        case "DELETE":
            return state.filter((value, index) => value !== action.num)
        default:
            return state
    }
}

export default numReducer