import { useState } from "react";

function TaskList({skil}){
    
return(
    <>
    <ul>
        {skil.map((x)=>{
         return <li key={x}>{x}</li>
        })}
      </ul>
    </>
)
}
export default TaskList;