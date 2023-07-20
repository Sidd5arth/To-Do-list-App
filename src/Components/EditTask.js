import save from '../images/save.png';
import '../App.css';
import './EditTask.css';
import { useState } from 'react';

const EditTask = (props) => {
  const [editInput, setEditInput] = useState("")
  const taskHandler = (event) =>{
    setEditInput(event.target.value);
  }

  const updateHandler = () =>{
    const newValue = {
      value : editInput,
      id: props.id,
    }
    props.onSaveInput(newValue);
  }

    
  return ( 
    <div className='edit-stl'>
      <div className="edit-styles styles1">
      <input 
          type="text" 
          className="form-control form-input p-2 me-3 input-styles text-style2" 
          placeholder="Edit the task"
          value={editInput}
          onChange={taskHandler}
          />
         <div className='d-flex justify-content-between gap-3'>
           <button className='button-styles'
           onClick = {() =>{
            updateHandler();
            props.toggle();
          }}><img src={save}alt='remove-task'/></button> 
         </div> 
      </div>
    </div>
  )
}

export default EditTask;
