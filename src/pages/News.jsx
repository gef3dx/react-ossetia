import React from 'react'
import Post from '../components/Post'
import './css/home.css'

function News() {
  return (
    <div className='line'>
      <div className='main-title sticky-top'>
        <div>
          <h1>Новости</h1> 
        </div>
        <div className='soc'>
          <i class='bx bxl-telegram'></i>
        </div>
      </div>
      <Post />
    </div>
  )
}

export default News;
