import React,{useState, useEffect} from "react";
import {connect} from 'react-redux'
import {actionAddTodo} from "./redux/actions/actionTodoItem";

import axios from 'axios'
import CreateList from "./components/CreateList";

function App(props) {
  const [list, setlist] = useState([])
  const [taskUpdate, setTaskUpdate] = useState('')
  const {task,addTask} = props

  const saveTodo = ()=>{
    axios.post('http://localhost:3002/insert', { task : task } ).then((res)=> console.log(res))
    
  }
  const updateTask = (id)=>{
    axios.put(`http://localhost:3002/update/${id}`,{ taskUpdate: taskUpdate })
  }
  const updateHasDone = (id,hasDone)=>{
    axios.put(`http://localhost:3002/updateHasDone/${id}`,{ hasDone: !hasDone})
  }
 
  const remove = (id)=>{

    axios.delete(`http://localhost:3002/delete/${id}`)
  }

  const search = ()=>{
    axios.get('http://localhost:3002/getItems')
        .then((resp)=>{
          const DbList = resp.data
          setlist( DbList.map((value,index)=>{ return <CreateList key={value._id} value={value} 
          updateHasDone={updateHasDone} setTaskUpdate={setTaskUpdate} remove={remove} updateTask={updateTask} />}))
        })
  }
  useEffect(()=>{
    search()
  })
  
  return (
    <div className='vh-100 vw-100  d-flex flex-column justify-content-start align-items-center' >
      <div className='d-flex justify-content-center'>
      <h1>To Do List</h1>
      </div>
      <div className='container input-group p-3' >
        <input type="text" className='form-control' placeholder='To Do' value={task} onChange={(e)=>addTask(e.target.value)} />
        <button className='w-25 btn btn-outline-primary' type='button' onClick={() => saveTodo() } >Add me</button>
      </div>
      <div className='container'>
        {list}
        
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>{
    return{
      task: state.todoItem.task
    }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addTask: (value)=>{
      const action = actionAddTodo(value)
      dispatch(action)
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
