import {useState} from "react";
import { useEffect } from "react";

function App() {
const [name,setname]=useState([]);
const [input, setinput]=useState("");

return(
  <>
  <input type="text"
  placeholder="enter names" 
  value={input} 
  onChange={(e)=>setinput(e.target.value)}/>
  <br />
  <button 
  onClick={(e)=>{
    setname([...name,input]);
    setinput("");

  }}
   >Add name</button>

   <ul>
    {name.map((e)=>{
      return <li key={e}>{e}</li>    })}
   </ul>
  </>
)
}
export default App