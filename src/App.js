import './App.css';
import Logo from'./components/Logo'
import Navbar from'./components/Navbar'
import Home from'./pages/Home'
import './fonts/fontawesome6/all.min.css'

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
            <Home />
          </div>
          <div className='col-3'>
            <img src="images/banner_03.jpg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
