import React, { useEffect, useState } from 'react'

function Dashboard() {

  const[counter,setCounter]=useState(10);

  const [pointer,setPointer]=useState(50);
  useEffect(()=>{
    console.log(counter)
    console.log(pointer)
  },[counter,pointer])
  return (
    <div>
      <div>
        <h2>counter value={counter}</h2>
        <h2>Pointer Value={pointer}</h2>
      </div>
      <button onClick={()=>setCounter(counter+20)}>Counter</button>
      <button onClick={()=>setPointer(pointer+1)}>Pointer</button>
    </div>
  )
}

export default Dashboard