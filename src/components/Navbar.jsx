import React from 'react'
import {NavLink} from 'react-router-dom'
import './css/navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar__ul'>
        <NavLink className='nabar__li' to="/">
          <i className='bx bx-home'></i>
          <span className='navbar__link'>Главная
          </span>
        </NavLink>
        <NavLink className='nabar__li' to="/news">
          <i className='bx bx-news' ></i>
          <span className='navbar__link'>Новости
          </span>
        </NavLink>
        <NavLink className='nabar__li' to="/films">
          <i className='bx bx-video'></i>
          <span className='navbar__link'>Фильмы
          </span>
        </NavLink>
      </ul>
    </nav>
  )
}
export default Navbar;