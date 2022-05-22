import {Routes, Route, Outlet} from 'react-router-dom'

import Logo from'./components/Logo'
import Sidebar from './components/Sidebar'
import Navbar from'./components/Navbar'

import Home from'./pages/Home'
import News from'./pages/News'
import Films from'./pages/Films'

import './fonts/fontawesome6/all.min.css'
import './App.css';

function App() {
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
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='news' element={<News />} />
                <Route path='films' element={<Films />} />
                <Route path='*' element={<Home />} />
              </Route>
            </Routes>
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

export default App;
