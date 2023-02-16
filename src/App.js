import './App.css';
import Schedules from './Components/Schedules'
import plus from './images/add.png';
import React, { useState } from 'react';


function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);


  const taskHandler = (event) =>{
    setInput(event.target.value);
  }
  const clickHandler = () => {
    if(!input){
      return;
    }
    const data = {id: new Date().getTime().toString(), name:input}
    setItems([...items, data]) 
    setInput('');
  }
  const deleteItems = (index) =>{
    console.log(index);
    const updateItems = items.filter((ele) => {
      return index !== ele.id;
    })
    setItems(updateItems);
  }
  const editVal = (newValue) => {
    console.log(newValue.value);
    setItems(
      items.map((ele) =>{
        if(ele.id == newValue.id){
          return {...ele, name:newValue.value}
        }
        return ele;
      })
    )
  }



  return (
    <div className="App mt-5">
      <h2 className='text-style'>To-Do APP</h2>
      <div className="form d-flex flex-row justify-content-between mt-4 styles p-3 bg-light">
          <input 
          type="text" 
          className="form-control form-input p-2 me-2 input-styles text-style2" 
          placeholder="Add a task"
          value={input}
          onChange={taskHandler}
          />
          <button className="ms-2 button-styles" onClick={clickHandler}>
           <img src={plus}alt='add-task'/>
          </button> 
      </div>
      
      <ul className='my-3 px-3 py-3 bg-light styles'>
        <p className='text-style1 m-0'><b>Your Todays's Tasks ...</b></p>
        <div className='ul-style p-2 my-2 mx-0'>
      {
        items.map((val) => {
          return (
            <li className='list' key={val.id}>
            <Schedules 
            value={val.name} 
            id={val.id}
            onSelect = {deleteItems}
            onEdit = {editVal}
            />
            </li>
          )
        })
      }
      </div>
      </ul>
    </div>
  );
}

export default App;
