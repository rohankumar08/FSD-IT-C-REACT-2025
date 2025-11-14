import React from 'react'
import { Link } from'react-router-dom'

function MainLayout(cartdata) {
  return (
    <div>

      <nav style={{backgroundColor:'#6d6e64',height:'400px' , width:'500px',border:'3px solid black' ,marginLeft:'550px' ,marginTop:'150px',paddingTop:'150px',paddingLeft:'200px'}}>
          <Link style={{fontSize:'20px',color:'white' }} to='/login'>Log In</Link> <br />
          <Link style={{fontSize:'20px',color:'white'}} to='/register'>Registration</Link>
      </nav>
    </div>
  )
}

export default MainLayout