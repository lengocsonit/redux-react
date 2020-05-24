// Import redux
var redux = require('redux')
var oldState = {
    num: [1, 2, 3],
    editState: false
}

//Khai bao reducer
var reducer1 = (state = oldState, action) => {
    //Dinh nghia action
    switch (action.type) {
        case "EDIT_STATE":
            return { ...state, editState: !state.editState }

        case "ADD_NUM":
            return { ...state, num: [...state.num, action.newItem] }

        case "DELETE":
            return { ...state, num: state.num.filter((value, index) => value !== action.num) }

        default:
            break;
    }
    return state
}

//Chia tach reducder de quan ly
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

const editStatusReducerInitialState = true
const editStatusReducer = (state = editStatusReducerInitialState, action) => {
    switch (action.type) {
        case "EDIT_STATE":
            return !state
        default:
            return state
    }
}
//Ket hoi cac reducer lai thanh 1 reducer
const allReducer = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer
})

//Khoi tao store1 quan ly reducer1
var store1 = redux.createStore(allReducer)

//Moi khi state thay doi, thi thuc hien
store1.subscribe(() => {
    console.log(store1.getState())
})

//Goi reducer thuc hien action
store1.dispatch({
    type: 'EDIT_STATE'
})

store1.dispatch({
    type: "ADD_NUM",
    newItem: 20
})

store1.dispatch({
    type: "DELETE",
    num: 1
})

export default store1