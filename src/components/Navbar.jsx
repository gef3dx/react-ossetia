import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar__ul'>
        <li className='nabar__li'>
          <i class="fa-solid fa-house"></i>
          <span className='navbar__link'>Главная
          </span>
        </li>
        <li className='nabar__li'>
          <i class="fa-solid fa-newspaper"></i> 
          <span className='navbar__link'>Новости
          </span>
        </li>
        <li className='nabar__li'>
          <i class="fa-solid fa-video"></i>
          <span className='navbar__link'>Фильмы
          </span>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar;