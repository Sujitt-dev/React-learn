let user = {
  name: "sujitt kumar",
  age: 25,
  imgurl: 'https://images.unsplash.com/photo-1780678839543-1abf5a0b8d71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  role: "Full stack Developer",
  skills: ['JavaScript', 'Node.js', 'React', 'sql']
}



function App() {
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <img
        src={user.imgurl}
        alt={'Photo of ' + user.name}
        style={{ width: '100px', height: '100px' }}
      />
      <h3>{user.role}</h3>
      <ul>
        {user.skills.map((x)=>{
          return <li key={x}>{x}</li>
        })}
      </ul>
    </div>
  )
}
export default App