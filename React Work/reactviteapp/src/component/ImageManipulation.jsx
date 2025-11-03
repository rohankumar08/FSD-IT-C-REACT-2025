import React, { useState } from 'react'
import Gift from './Gift.jpg'

export default function ImageManipulation() {
    const [giftHeight,setGiftHeight]=useState(200);
    const [giftWidth,setGiftWidth]=useState(200);
  return (
    <div>ImageManipulation
        <div style={{border:'2px solid green',width:'450px', height:'300px', marginLeft:'500px' ,marginTop:'50px', paddingLeft:'150px',paddingTop:'100px'}}>
            <img src={Gift} height={giftHeight} width={giftWidth} alt="Gift" />
        </div>
        <div>
            <button onClick={()=>setGiftHeight(giftHeight+20)} >Increase Height</button>
             <button onClick={()=>setGiftHeight(giftHeight-20)} >Decrease Height</button>
            <button onClick={()=>setGiftWidth(giftWidth+20)} >Increase Width</button>
            <button onClick={()=>setGiftWidth(giftWidth-20)} >Decrease Width</button>
        </div>
    </div>
    
  )
}
