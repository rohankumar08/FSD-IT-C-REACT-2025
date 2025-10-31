import React from 'react'
import './Profile.css';

export default function Profile({data}) {
  return (
    <div className='container'>
        <h3>This is my profile page</h3>
        <img src={data.pic} height={200} width={200} alt="Profile pic" style={{borderRadius:"50%"}} />
        <h2>Name: {data.name}</h2>
        <h2>Branch: {data.branch}</h2>
        <h2>Section: {data.section}</h2>
        <h2>College Name: {data.college}</h2>
    </div>
  )
}
