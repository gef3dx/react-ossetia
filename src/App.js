import './App.css';
import Logo from'./components/Logo'
import Navbar from'./components/Navbar'
import Home from'./pages/Home'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <div className='sticky-top'>
              <Logo />
              <Navbar />
            </div>
          </div>
          <div className='col-10'>
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
