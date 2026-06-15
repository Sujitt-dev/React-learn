import { useState } from "react";

function ProfileCard({name, age, role, imgurl, skills, bio_info}) {
  const [Bio, setBio]= useState(false);
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
      <>
      {Bio && <h4>{bio_info}</h4> }
      <button onClick={()=>setBio(!Bio)} >{Bio ? "Hide Bio ":"Show Bio "}</button>
      </>
      <ul>
        {skills.map((x)=>{
          return <li key={x} > {x} </li>
        })}
      </ul>
    </div>
  )
}
export default ProfileCard;