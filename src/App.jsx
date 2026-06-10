import ProfileCard from "./ProfileCard"

function App() {
  return(
   <>
    <ProfileCard  name="sujitt" age={25} role={"Developer"}  skills={["java","python","javascript","react","node js","sql"]}/>

    <ProfileCard  name="rahul" age={24} role={"Developer"}  skills={["javascript","react","node js"]}/>

    <ProfileCard  name="sumit" age={25} role={"Developer"}  skills={["javascript","react","node js","AWS"]}/>
   
   </>

   
  )
}
export default App