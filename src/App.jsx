import {useState} from "react";
import { useEffect } from "react";

function App() {
  const [todos, settodos]=useState([]);
  const [Loading, setLoading]=useState(true)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((res)=>(res.json())).then((data)=>{settodos(data),setLoading(false)})
  },[])
  return(
    <>
     <h2>ToDo List</h2>

     {Loading ? <p>Loading....</p>:(
      <ul>
        {todos.map((x)=>{
          return(
            <li key={x.id}>{x.title}</li>
          )
        })}
      </ul>
     )}
    </>
  )
}
export default App