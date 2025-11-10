import React, { useState } from 'react'
import Gift from './Gift.jpg'

export default function ImageManipulation() {
    const [giftHeight,setGiftHeight]=useState(200);
    const [giftWidth,setGiftWidth]=useState(200);
    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [blue,setBlue]=useState(0);
    const [imageAngle,setImageAngle]=useState(0);

    function setColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
    function imgRotate(){
        setImageAngle(imageAngle+30);
    }
  return (
    <div>ImageManipulation
        <div style={{border:'2px solid green',width:'450px', height:'300px', marginLeft:'500px' ,marginTop:'50px', paddingLeft:'150px',paddingTop:'100px'}}>
            <img src={Gift} height={giftHeight} width={giftWidth} alt="Gift" style={{transform:`rotate(${imageAngle}deg)`,backgroundColor:`rgb(${red},${green},${blue})`}} />
        </div>
        <div>
            <button onClick={()=>setGiftHeight(giftHeight+20)} >Increase Height</button>
             <button onClick={()=>setGiftHeight(giftHeight-20)} >Decrease Height</button>
            <button onClick={()=>setGiftWidth(giftWidth+20)} >Increase Width</button>
            <button onClick={()=>setGiftWidth(giftWidth-20)} >Decrease Width</button>
            <button onClick={setColor}>Change BackGround Colour</button>
            <button onClick={imgRotate}>Image Rotate</button>
        </div>
    </div>
    
  )
}
