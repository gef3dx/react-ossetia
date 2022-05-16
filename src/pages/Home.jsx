import React from 'react'
import Post from '../components/Post'
import './home.css'

function home() {
  return (
    <div className='line'>
      <div className='main-title sticky-top'>
        <div>
          <h1>Главная</h1> 
        </div>
        <div className='soc'>
          <i class='bx bxl-telegram'></i>
        </div>
      </div>
      <Post />
    </div>
  )
}

export default home;
