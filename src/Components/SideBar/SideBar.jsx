import React from 'react'


const SideBar = () => {
  return (
    <div className='sidebar'> 
      <div className="sidebar-container">
        <div className="sidebar-header">
          <div className="sidebar-logo">
          <img src="./assets/profile.png" alt='avatar' width={40} height={40}/>
          </div>
        </div>
        <div className="sidebar-bottom">
          -------------
          
          <img src="./assets/leon.jpg" alt='avatar' width={40} height={40}/>
        </div>
      </div>

    </div>
  )
} 

export default SideBar