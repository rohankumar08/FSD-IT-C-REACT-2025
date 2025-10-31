import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import Gallary from './component/Gallary'

function App() {
  

  return (
    <>
     <div className='app'>
      <h2 style={{textAlign:"center"}}>WElcome to Vite and REact</h2>
      {/* <h3>
        <Profile/>
      </h3> */}

      <Gallary/>
     
     </div>
    </>
  )
}

export default App
