import React from 'react'
import Profile from './Profile.jsx'
import './Gallary.css'

const Gallary = () => {
    const student=
    
   [
     {
        pic:"https://t3.ftcdn.net/jpg/13/11/22/86/360_F_1311228699_YoiLc5aJ3RWz3uRfdEtlV0UYSQjqf7RW.jpg",
        name:"Rohan kumar",
        branch:'IT',
        section:"C",
        college:"ABES Engineering college"
    },
     {
        pic:"https://t3.ftcdn.net/jpg/13/11/22/86/360_F_1311228699_YoiLc5aJ3RWz3uRfdEtlV0UYSQjqf7RW.jpg",
        name:"Ritik kumar",
        branch:'IT',
        section:"C",
        college:"ABES Engineering college"
    },
     {
        pic:"https://t3.ftcdn.net/jpg/13/11/22/86/360_F_1311228699_YoiLc5aJ3RWz3uRfdEtlV0UYSQjqf7RW.jpg",
        name:"Ravi kumar",
        branch:'IT',
        section:"C",
        college:"ABES Engineering college"
    }
   ]
  return (
    <div className='gallary'>
        {/* <Profile name="Rohan kumar" branch="IT" section="C" college="ABES engineering college"/>
        <Profile name="Ritik kumar" branch="IT" section="C" college="ABES engineering college"/>
        <Profile name="Ravi kumar" branch="IT" section="C" college="ABES engineering college"/> */}
        {/* <Profile data={student[0]}/> */}
        {
            student.map((ele,index)=>(
                <Profile data={ele} key={index}/>
            ))
        }

    </div>
  )
}

export default Gallary