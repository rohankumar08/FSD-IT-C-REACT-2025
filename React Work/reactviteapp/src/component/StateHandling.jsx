import React,{useState} from 'react'

export default function StateHandling() {
    const [counter,setCounter]=useState(10);
    function increaseValue(){
        // alert('hii');
        setCounter(counter+1);
    }
  return (
    <div>StateHandling
        <h2>Counter Value={counter}</h2>
        <button onClick={increaseValue}>Increase Value</button>
        <button onClick={()=>setCounter(counter-1)}>Decrease Value</button>
    </div>
  )
}
