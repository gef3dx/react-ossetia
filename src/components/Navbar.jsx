import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar__ul'>
        <li className='nabar__li'>
          <i className='bx bx-home'></i>
          <span className='navbar__link active'>Главная
          </span>
        </li>
        <li className='nabar__li'>
          <i className='bx bx-news' ></i>
          <span className='navbar__link'>Новости
          </span>
        </li>
        <li className='nabar__li'>
          <i className='bx bx-video'></i>
          <span className='navbar__link'>Фильмы
          </span>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar;