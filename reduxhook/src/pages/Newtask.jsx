import React from 'react'
import { useState } from 'react'
import Subtask from './Subtask';
export default function Newtask() {
  const [subtask ,setsubtask] = useState([]);
    return (
    <>
<div style={
{
  display:"flex",
  justifyContent : "space-around"
  
}
}>
  <div className='left-side'>

    <div>
      <input type="text"  placeholder='Title'></input>
    </div>
    
    <div>
      <textarea placeholder='Description' cols="20" rows="5"></textarea>
    </div>

    <div>
      <label>Todo:</label>
      <input type = "radio" name = "task_status" id = "todo"></input>
      <br />
      <label>Inprogress : </label>
      <input type = "radio" name = "task_status" id = "Inprogess"></input>
      <br/>
      <label>Done</label>
      <input type = "radio" name = "task_status" id = "done"></input>
    </div>
<br/><br/>
    <div className="checkbox">
      <label>Official</label>
      <input type = "checkbox" id="official"></input>
      <br />
      <label>Personal</label>
      <input type = "checkbox"  id="personal"></input>
      <br />

      <label>Others</label>
      <input type= "checkbox" id= " others"></input>
      <br />
      </div>

      </div>

      <div className='right-side'>

<Subtask subtask = {subtask} setsubtask = {setsubtask} />
      </div>
    </div>
    </>
  )
}
