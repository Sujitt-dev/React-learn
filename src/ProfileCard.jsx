function ProfileCard({name, age, role, imgurl, skills}) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{role}</h2>
      <img
        src={imgurl}
        alt={'Photo of ' + name}
        style={{ width: '100px', height: '100px' }}
      />
      <ul>
        {skills.map((x)=>{
          return <li key={x} > {x} </li>
        })}
      </ul>
    </div>
  )
}
export default ProfileCard;