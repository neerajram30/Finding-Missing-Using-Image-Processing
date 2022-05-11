import React from 'react'
import './Portal.css'
function PolicePortal() {
  return (
    <div className='portal'>
        <a href='/login' style={{color:'white'}}>
            Login
        </a>
        <a href='/signup'>
            Signup
        </a>
    </div>
  )
}

export default PolicePortal