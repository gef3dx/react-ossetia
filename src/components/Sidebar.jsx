import React from 'react'
import Baner from '../assets/images/banner_03.jpg'
import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
         <img src={Baner} alt="" className="img-fluid" />
    </div>
  )
}

export default Sidebar