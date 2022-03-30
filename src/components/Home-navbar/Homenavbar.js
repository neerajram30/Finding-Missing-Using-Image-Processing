import React from 'react'
import './Homenavbar.css'

function Homenavbar() {
  return (
    <div>
      <nav className='nav-bar'>
        <div className='nav-bar-container'>
            <p  >God's Eye</p>
            <div className='modules'>
            <a href='/admin'>admin</a>
            <a href='/police'>Police</a>
            <a href='/user'>User</a>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Homenavbar