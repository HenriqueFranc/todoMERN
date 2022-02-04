import React from "react";

const CreateList = ( props )=>{
    const value = props.value
    const updateHasDone = props.updateHasDone
    const setTaskUpdate = props.setTaskUpdate
    const remove = props.remove
    const updateTask = props.updateTask

 return( 
        <div className='w-100 card d-flex align-items-center'>
        <div className='card-body'>
        <h5 className='w-100 card-title'>
            {value.task}
        </h5>
        <form> 
            <div className='form-check' >
            <input type="checkbox" className="form-check-input"  id="exampleCheck1" checked={value.hasDone} onChange={async()=> await updateHasDone(value._id,value.hasDone)}/>
            <label className='form-check'>
                HasDone : {value.hasDone ? 'True' : 'False'}
            </label>
            </div>
            <div className='input-group'>
            <input type="text" className='form-control' onChange={async(e)=>{await setTaskUpdate(e.target.value)}}/>
            <div className='btn-group'>
            <button className='w-20 btn btn-danger' onClick={async()=>{await remove(value._id)}}>Delete</button>
            <button className='w-20 btn btn-dark' onClick={async()=>{await updateTask(value._id)}}>Update</button>
            </div>
            </div>
        </form>
        
        </div>
    </div>   
    
            
    )


}

export default CreateList