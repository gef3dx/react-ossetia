import {Outlet} from 'react-router-dom'

import Logo from'./Logo'
import Sidebar from './Sidebar'
import Navbar from'./Navbar'

import './css/base.css'

function Base() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row no-padding'>
          <div className='col-2'>
            <div className='sticky-top'>
              <Logo />
              <Navbar />
            </div>
          </div>
          <div className='col-7'>
            <Outlet />
          </div>
          <div className='col-3'>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Base;