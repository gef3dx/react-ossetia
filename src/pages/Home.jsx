import React from 'react'
import Post from '../components/Post'
import './home.css'

function home() {
  return (
    <div className='line'>
      <div className='main-title sticky-top'>
        <h1>Главная</h1> 
      </div>
      <Post />
    </div>
  )
}

export default home;
