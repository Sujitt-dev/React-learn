import ProfileCard from "./ProfileCard"
import {useState} from "react"

function App() {
  const [Count, setCount]=useState(0);
  const [Inputs, setInputs]=useState("");
  const [skil, setskil]=useState([])
  return(
    <>
    <div>
      <ul>
        {skil.map((x)=>{
         return <li key={x}>{x}</li>
        })}
      </ul>
      <input type="text" value={Inputs}
      onChange={(e)=>setInputs(e.target.value)}
      placeholder="Enter a skill" />
      
      <button onClick={()=>{setskil([...skil,Inputs]),setInputs("")}}>Add Skill</button>
    </div>

    <div>
      <h1>{Count}</h1>
      <button onClick={()=>setCount(Count+1)}>Increment</button>
      <button onClick={()=>setCount(Count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)} >Reset</button>
    </div>
    
    <ProfileCard  name="sujitt" age={25} role={"Developer"}  skills={["java","python","javascript","react","node js","sql"]} bio_info={"highly skiled and good problem solver"} isAvailable={true}/>

    <ProfileCard  name="rahul" age={24} role={"Developer"}  skills={["javascript","react","node js"]} bio_info={"good communictor and best in management"}/>

    <ProfileCard  name="sumit" age={25} role={"Developer"}  skills={["javascript","react","node js","AWS"]} bio_info={"extriemly good at cloud "}/>
   
   </>

   
  )
}
export default App