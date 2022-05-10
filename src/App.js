import './App.css';
import Logo from'./components/Logo'
import Navbar from'./components/Navbar'
import Home from'./pages/Home'
import './fonts/fontawesome6/all.min.css'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <div className='sticky-top'>
              <Logo />
              <Navbar />
            </div>
          </div>
          <div className='col-9'>
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
