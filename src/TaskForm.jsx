import { useState } from "react";

function TaskForm( {Inputs, setInputs}){
    
return(
    <>
    <input type="text" value={Inputs}
      onChange={(e)=>setInputs(e.target.value)}
      placeholder="Enter a skill" />
    </>
)
} 
export default TaskForm;