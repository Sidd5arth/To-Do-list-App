import './Schedules.css';
import '../App.css';
import edit from '../images/edit.png';
import remove from '../images/delete.png';
import { useState } from 'react';
import EditTask from './EditTask';

const Schedules = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  const editHandler = (newValue) => {
    props.onEdit(newValue);
    console.log(newValue);
  }
  

  return (
    <div>
      {modal && <EditTask toggle = {toggleModal} value={props.value} id={props.id} onSaveInput={editHandler}/>}
      <div className="form d-flex flex-row justify-content-between mt-3 styles1 p-3 bg-light">
        <p className='bg-light text-style2 bg-light bg-gradient rounded p-2 m-0 input-styles w-100 me-3'>{props.value}</p>
         <div className='d-flex justify-content-between gap-3'>
           
            <button className='button-styles'
            onClick = {() =>{
              toggleModal()
            }}>
            <img src={edit}alt='edit-task'/></button>

            <button className='button-styles'
            onClick = {() =>{
              props.onSelect(props.id)
            }}>
            <img src={remove}alt='remove-task'/>
            </button> 

         </div> 
      </div>
    </div>
  )
}

export default Schedules;
