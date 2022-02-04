const initialState = {
    task:'',
}

const todoItemReducer = (state = initialState ,action ) =>{
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, task: action.payload}
        
        default:
            return {...state}
    }
}

export default todoItemReducer