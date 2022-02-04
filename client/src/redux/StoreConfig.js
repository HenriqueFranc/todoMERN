import {createStore,combineReducers} from 'redux'
import todoItemReducer from './reducers/todoItem'

const reducers = combineReducers({
    todoItem : todoItemReducer,
})


const storeConfig = () => createStore(reducers)

export default storeConfig 